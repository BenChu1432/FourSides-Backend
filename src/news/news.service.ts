import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sql } from 'kysely';
import { KyselyService } from 'src/kysely/kysely.service';
import { jsonArrayFrom, jsonObjectFrom } from 'kysely/helpers/postgres';
import { MediaNameEnum, VoteType } from 'src/kysely/types';
import graphicationUtil from 'utils/graphicationUtil';
import cluster from 'cluster';
import { ForumService } from 'src/forum/forum.service';
import timeUtil from 'utils/timeUtil';
import getClustersUtil from './util/getClustersUtil';
import { identityToRegionMap, MisreadMedia } from 'constant/constants';
import { getClusters } from './util/general-queries';
import { DislikeArticleDto, LikeArticleDto } from './news.dto';

@Injectable()
export class NewsService {
  constructor(
    private readonly kyselyService: KyselyService,
    private readonly forumService: ForumService,
  ) {}
  private get db() {
    return this.kyselyService.connection;
  }
  async getLatestClusters({
    userId,
    offset,
  }: {
    userId: string;
    offset: number;
  }) {
    console.log('offset:', offset);

    // Step 1: Fetch 30 cluster IDs based on latest_published
    const idRows = await this.db
      .selectFrom('cluster')
      .select(['id'])
      .where('id', 'is not', null)
      .orderBy('latest_published', 'desc')
      .limit(30)
      .offset(offset)
      .execute();

    const clusterIds = idRows.map((row) => row.id);

    if (clusterIds.length === 0) {
      return [];
    }

    // Step 2: Fetch full clusters based on the selected IDs
    const clusters = await getClusters(this.db, userId)
      .where('cluster.id', 'in', clusterIds)
      // Optional: preserve order (if needed)
      .orderBy('cluster.latest_published', 'desc')
      .execute();

    return clusters;
  }

  async getPopularClusters({
    userId,
    offset,
  }: {
    userId: string;
    offset: number;
  }) {
    console.log('offset:', offset);

    const idRows = await this.db
      .selectFrom('cluster')
      .select(['cluster.id'])
      .leftJoin(
        'cluster_vote_summary',
        'cluster_vote_summary.clusterId',
        'cluster.id',
      )
      .leftJoin('news', 'news.clusterId', 'cluster.id')
      .leftJoin('news_media', (join) =>
        join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
      )
      .where(
        'cluster.latest_published',
        '>=',
        timeUtil.getLast72HoursTimestamp(),
      )
      .groupBy('cluster.id')
      .having((eb) => eb.fn.count(sql`distinct news_media.id`), '>=', 3)
      .orderBy('cluster.latest_published', 'desc')
      .orderBy((eb) => eb.fn.count(sql`distinct news_media.id`), 'desc')
      .orderBy((eb) => eb.fn.count('news.id'), 'desc')
      .limit(30)
      .offset(offset)
      .execute();

    const clusterIds = idRows.map((row) => row.id);

    if (clusterIds.length === 0) return [];

    return await getClusters(this.db, userId)
      .where('cluster.id', 'in', clusterIds)
      .orderBy('cluster.latest_published', 'desc')
      .execute();
  }

  async getPersonalisedClusters({
    userId,
    offset,
  }: {
    userId: string;
    offset: number;
  }) {
    function buildTopicsClause(topics: string[]) {
      console.log('topics:', topics);
      if (!topics?.length) return sql<boolean>`false`;
      return sql<boolean>`
    cluster.main_topic = ANY(CAST(${sql`${topics}`} AS text[]))
  `;
    }

    function buildRegionsClause(regions: string[]) {
      if (!regions?.length) return sql<boolean>`false`;
      return sql<boolean>`
    cluster.places_in_concern
    && CAST(${sql`${regions}`} AS "InterestingRegionOrCountry"[])
  `;
    }

    console.log('offset:', offset);
    const userInfo = await this.db
      .selectFrom('user')
      .select(['topicsInterestedIn', 'regionsInterestedIn'])
      .where('id', '=', userId)
      .executeTakeFirst();

    if (!userInfo?.topicsInterestedIn) {
      throw new HttpException(
        "Cannot find user's interested topics",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const topics = userInfo.topicsInterestedIn ?? [];
    const regions = userInfo.regionsInterestedIn ?? [];

    const topicsClause = buildTopicsClause(topics);
    const regionsClause = buildRegionsClause(regions);

    return await getClusters(this.db, userId)
      .where((eb) =>
        eb.and([
          eb.and([topicsClause, regionsClause]),
          eb('cluster.id', 'is not', null),
        ]),
      )
      .orderBy('cluster.latest_published', 'desc')
      .offset(offset)
      .limit(30)
      .execute();
  }

  async getBlindspots({ userId, offset }: { userId: string; offset: number }) {
    const userInfo = await this.db
      .selectFrom('user')
      .select('topicsInterestedIn')
      // .select('regionsInterestedIn')
      .where('id', '=', userId)
      .executeTakeFirst();
    if (!userInfo?.topicsInterestedIn) {
      throw new HttpException(
        "Cannot find user's interested topics",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const greenExpr = sql<number>`
  COUNT(DISTINCT CASE WHEN news_media.political_standing > 0.6 THEN news_media.name END)
`;
    const blueExpr = sql<number>`
  COUNT(DISTINCT CASE WHEN news_media.political_standing < 0.4 THEN news_media.name END)
`;
    const greyExpr = sql<number>`
  COUNT(DISTINCT CASE WHEN news_media.political_standing >= 0.4 AND news_media.political_standing <= 0.6 THEN news_media.name END)
`;
    const totalExpr = sql<number>`${blueExpr} + ${greenExpr} + ${greyExpr}`;

    const ratioGreen = sql<number>`${greenExpr}::float / NULLIF(${totalExpr}, 0)`;
    const ratioBlue = sql<number>`${blueExpr}::float / NULLIF(${totalExpr}, 0)`;

    return await getClusters(this.db, userId)
      // Use COUNT(news.id), not COUNT(cluster.id)
      // Only accept rows where total > 0 and ratio meets threshold
      .having((eb) =>
        eb.and([
          eb(totalExpr, '>=', 4),
          eb.or([eb(ratioGreen, '>=', 0.7), eb(ratioBlue, '>=', 0.7)]),
        ]),
      )
      .orderBy('cluster.latest_published', 'desc')
      .orderBy(sql`"news_count"`, 'desc')
      .offset(offset)
      .limit(30)
      .execute();
  }

  async getMisreadNews({ userId, offset }: { userId: string; offset: number }) {
    return await this.db
      .selectFrom('news')
      .leftJoin('cluster', 'cluster.id', 'news.clusterId')
      .leftJoin('news_reaction', (join) =>
        join
          .onRef('news_reaction.newsId', '=', 'news.id')
          .on('news_reaction.userId', '=', userId),
      )
      .select([
        'news.id as id',
        'news.authors',
        'news.url',
        'news.media_name',
        'news.num_of_likes',
        'news.num_of_dislikes',
        'news.published_at',
        'news.title',
        'news.images',
        'news.clusterId',
        'cluster.main_topic',
        'news_reaction.type as reaction',
      ])
      .where(sql`news.media_name::text`, 'in', MisreadMedia)
      .orderBy('news.published_at')
      .offset(offset)
      .execute();
  }

  async getNews({ userId, clusterId }: { clusterId: string; userId: string }) {
    const news = await this.db
      .selectFrom('news')
      .leftJoin('news_media', (join) =>
        join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
      )
      .leftJoin('news_author', 'news_author.newsId', 'news.id')
      .leftJoin('author', 'author.id', 'news_author.authorId')
      .select([
        'news.id as id',
        'news.clusterId',
        'news.copypaste_flag',
        'news.images',
        'news.journalistic_merits',
        'news.journalistic_demerits',
        'news.media_name',
        'news_media.imageUrl as mediaImageUrl',
        'news.num_of_dislikes',
        'news.num_of_likes',
        'news.origin',
        'news.places_in_concern',
        'news.places_in_detail',
        'news.published_at',
        'news.refined_title',
        'news.clickbait',
        'news.reporting_intention',
        'news.reporting_style',
        'news.title',
        'news.url',
        'news.authors as authorNames',
        sql`json_agg(json_build_object('id', author.id, 'name', author.name) 
        order by author.name) 
        filter (where author.id is not null)`.as('authors'),
      ])
      .where('news.clusterId', '=', clusterId)
      .groupBy(['news.id', 'news_media.id'])
      .orderBy('news.published_at', 'desc')
      .execute();

    console.log('news:', news);
    const newsIds = news.map((n) => n.id);

    const newsReactions = await this.db
      .selectFrom('news_reaction')
      .selectAll()
      .where((eb) =>
        eb.and([
          eb('userId', '=', userId),
          eb('news_reaction.newsId', 'in', newsIds),
        ]),
      )
      .execute();

    const newsMedia = await this.db
      .selectFrom('news')
      .leftJoin('news_media', (join) =>
        join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
      )
      .select([
        'news_media.id',
        'news_media.name',
        'news_media.chinese_name',
        'news_media.imageUrl',
      ])
      .distinctOn('news.id')
      .select('news.id as id')
      .select('news_media.id as media_id')
      .where('news.clusterId', '=', clusterId)
      .execute();

    const {
      stanceStats,
      stanceStatsPercent,
      identityStats,
      identityStatsPercent,
      summary,
      voteCompositionByStance,
      stanceCompositionByVote,
      overallVoteDistributionByStance,
      voteCompositionByIdentity,
      identityCompositionByVote,
      overallVoteDistributionByIdentity,
    } = await this.getVoteResults({ clusterId: clusterId });

    const { comments, replies, commentReactions } =
      await this.forumService.getComments({
        userId: userId,
        clusterId: clusterId,
        offset: 0,
      });

    const trueFalseNotGivenQuestions = await this.db
      .selectFrom('news_questions')
      .leftJoin('user_answer', (join) =>
        join
          .onRef('user_answer.questionId', '=', 'news_questions.id')
          .on('user_answer.userId', '=', userId),
      )
      .selectAll()
      .select([
        sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
        'user_answer.selectedOption',
        'news_questions.id as id',
      ])
      .where((eb) =>
        eb.and([
          eb('news_questions.newsId', 'in', newsIds),
          eb('news_questions.type', '=', 'TRUE_FALSE_NOT_GIVEN_QUESTION'),
        ]),
      )
      .execute();
    const misguidingTechniquesQuestions = await this.db
      .selectFrom('news_questions')
      .leftJoin('user_answer', (join) =>
        join
          .onRef('user_answer.questionId', '=', 'news_questions.id')
          .on('user_answer.userId', '=', userId),
      )
      .selectAll()
      .select([
        sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
        'user_answer.selectedOption',
        'news_questions.id as id',
      ])
      .where((eb) =>
        eb.and([
          eb('news_questions.newsId', 'in', newsIds),
          eb('news_questions.type', '=', 'MISGUIDING_TECHNIQUES_QUESTION'),
        ]),
      )
      .execute();
    return {
      news,
      trueFalseNotGivenQuestions,
      misguidingTechniquesQuestions,
      newsMedia,
      comments,
      replies,
      newsReactions,
      commentReactions,
      pollingAnalysis: {
        ...summary,
        voteDistributionByPoliticalStance: {
          voteCompositionByStance,
          stanceCompositionByVote,
          overallVoteDistributionByStance,
        },
        voteDistributionByIdentity: {
          voteCompositionByIdentity,
          identityCompositionByVote,
          overallVoteDistributionByIdentity,
        },
        stanceStats,
        stanceStatsPercent,
        identityStats,
        identityStatsPercent,
      },
    };
  }

  async getVoteResults({ clusterId }: { clusterId: string }) {
    function calculatePercentages(
      stats: Record<
        string,
        {
          support: number;
          neutral: number;
          oppose: number;
          total: number;
        }
      >,
    ) {
      const result: Record<
        string,
        {
          supportPct: number;
          neutralPct: number;
          opposePct: number;
        }
      > = {};

      for (const key in stats) {
        const { support, neutral, oppose, total } = stats[key];
        result[key] = {
          supportPct: total ? Math.round((support / total) * 100) : 0,
          neutralPct: total ? Math.round((neutral / total) * 100) : 0,
          opposePct: total ? Math.round((oppose / total) * 100) : 0,
        };
      }

      return result;
    }

    const [byStance, byIdentity] = await Promise.all([
      this.db
        .selectFrom('cluster_vote')
        .innerJoin('user', 'cluster_vote.userId', 'user.id')
        .select([
          'user.politicalStance',
          'cluster_vote.vote',
          this.db.fn.count<number>('cluster_vote.vote').as('count'),
        ])
        .where('cluster_vote.clusterId', '=', clusterId)
        .groupBy(['user.politicalStance', 'cluster_vote.vote'])
        .execute(),

      this.db
        .selectFrom('cluster_vote')
        .innerJoin('user', 'cluster_vote.userId', 'user.id')
        .select([
          'user.identity',
          'cluster_vote.vote',
          this.db.fn.count<number>('cluster_vote.vote').as('count'),
        ])
        .where('cluster_vote.clusterId', '=', clusterId)
        .groupBy(['user.identity', 'cluster_vote.vote'])
        .execute(),
    ]);

    type VoteStats = {
      [key: string]: {
        support: number;
        neutral: number;
        oppose: number;
        total: number;
      };
    };

    const stanceStats: VoteStats = {};
    for (const row of byStance) {
      const stance = row.politicalStance;
      if (stance === null) continue;
      const vote = row.vote;
      const count = Number(row.count); // ✅ Explicit conversion
      console.log('count:', count);
      if (!stanceStats[stance]) {
        stanceStats[stance] = { support: 0, neutral: 0, oppose: 0, total: 0 };
      }
      if (vote === 'SUPPORT') stanceStats[stance].support += count;
      else if (vote === 'OPPOSE') stanceStats[stance].oppose += count;
      else if (vote === 'NEUTRAL') stanceStats[stance].neutral += count;
      stanceStats[stance].total += count;
    }

    const identityStats: VoteStats = {};
    for (const row of byIdentity) {
      const identity = row.identity;
      if (identity === null) continue;
      const vote = row.vote;
      const count = Number(row.count);
      if (!identityStats[identity]) {
        identityStats[identity] = {
          support: 0,
          neutral: 0,
          oppose: 0,
          total: 0,
        };
      }
      if (vote === 'SUPPORT') identityStats[identity].support += count;
      else if (vote === 'OPPOSE') identityStats[identity].oppose += count;
      else if (vote === 'NEUTRAL') identityStats[identity].neutral += count;

      identityStats[identity].total += count;
    }

    const stanceStatsPercent = calculatePercentages(stanceStats);
    const identityStatsPercent = calculatePercentages(identityStats);
    console.log('stanceStats:', stanceStats);
    console.log('identityStats:', identityStats);
    console.log('stanceStatsPercent:', stanceStatsPercent);
    console.log('identityStatsPercent:', identityStatsPercent);

    // Get vote summary
    let summary = await this.db
      .selectFrom('cluster_vote_summary')
      .selectAll()
      .where('clusterId', '=', clusterId)
      .executeTakeFirst();

    // Build both tables
    if (!summary) {
      summary = {
        clusterId: clusterId,
        support: 0,
        oppose: 0,
        neutral: 0,
        updatedAt: timeUtil.getUnixTimestamp(),
      };
    }
    if (!stanceStats) {
      throw new HttpException(
        'Cannot calculate stance statistics',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const {
      voteCompositionByStance,
      stanceCompositionByVote,
      overallVoteDistributionByStance,
    } = graphicationUtil.buildStanceDistributions({
      summary,
      stanceStats,
      order: ['深綠', '淺綠', '中立', '淺藍', '深藍'],
    });

    const {
      voteCompositionByIdentity,
      identityCompositionByVote,
      overallVoteDistributionByIdentity,
    } = graphicationUtil.buildIdentityDistributions({
      summary,
      identityStats,
    });
    console.log('summary:', summary);
    return {
      stanceStats,
      identityStats,
      stanceStatsPercent,
      identityStatsPercent,
      summary,
      voteCompositionByStance,
      stanceCompositionByVote,
      overallVoteDistributionByStance,
      voteCompositionByIdentity,
      identityCompositionByVote,
      overallVoteDistributionByIdentity,
    };
  }

  async voteNews({
    userId,
    clusterId,
    vote,
  }: {
    userId: string;
    clusterId: string;
    vote: VoteType;
  }) {
    const votedAt = Math.floor(Date.now() / 1000);

    // STEP 1–4: Handle vote and update summary within transaction
    await this.db.transaction().execute(async (trx) => {
      const existingVote = await trx
        .selectFrom('cluster_vote')
        .select(['vote'])
        .where('userId', '=', userId)
        .where('clusterId', '=', clusterId)
        .executeTakeFirst();

      await trx
        .insertInto('cluster_vote')
        .values({
          userId,
          clusterId,
          vote,
          votedAt,
        })
        .onConflict((oc) =>
          oc.columns(['userId', 'clusterId']).doUpdateSet({
            vote,
            votedAt,
          }),
        )
        .execute();

      let summary = await trx
        .selectFrom('cluster_vote_summary')
        .select(['support', 'oppose', 'neutral'])
        .where('clusterId', '=', clusterId)
        .executeTakeFirst();
      if (!summary) {
        summary = { support: 0, oppose: 0, neutral: 0 };
        await trx
          .insertInto('cluster_vote_summary')
          .values({
            clusterId,
            support: 0,
            oppose: 0,
            neutral: 0,
            updatedAt: votedAt,
          })
          .execute();
      }

      const prevVote = existingVote?.vote;
      const voteDelta = { support: 0, oppose: 0, neutral: 0 };

      if (prevVote !== undefined) {
        if (prevVote === VoteType.SUPPORT) voteDelta.support -= 1;
        if (prevVote === VoteType.OPPOSE) voteDelta.oppose -= 1;
        if (prevVote === VoteType.NEUTRAL) voteDelta.neutral -= 1;
      }

      if (vote === VoteType.SUPPORT) voteDelta.support += 1;
      if (vote === VoteType.OPPOSE) voteDelta.oppose += 1;
      if (vote === VoteType.NEUTRAL) voteDelta.neutral += 1;

      await trx
        .updateTable('cluster_vote_summary')
        .set({
          support: summary.support + voteDelta.support,
          oppose: summary.oppose + voteDelta.oppose,
          neutral: summary.neutral + voteDelta.neutral,
          updatedAt: votedAt,
        })
        .where('clusterId', '=', clusterId)
        .execute();
    });

    // STEP 5: Calculate statistics AFTER TRANSACTION
    const [byStance, byIdentity] = await Promise.all([
      this.db
        .selectFrom('cluster_vote')
        .innerJoin('user', 'cluster_vote.userId', 'user.id')
        .select([
          'user.politicalStance',
          'cluster_vote.vote',
          this.db.fn.count<number>('cluster_vote.vote').as('count'),
        ])
        .where('cluster_vote.clusterId', '=', clusterId)
        .groupBy(['user.politicalStance', 'cluster_vote.vote'])
        .execute(),

      this.db
        .selectFrom('cluster_vote')
        .innerJoin('user', 'cluster_vote.userId', 'user.id')
        .select([
          'user.identity',
          'cluster_vote.vote',
          this.db.fn.count<number>('cluster_vote.vote').as('count'),
        ])
        .where('cluster_vote.clusterId', '=', clusterId)
        .groupBy(['user.identity', 'cluster_vote.vote'])
        .execute(),
    ]);

    console.log('byStance:', byStance);
    console.log('byIdentity:', byIdentity);

    const {
      stanceStats,
      stanceStatsPercent,
      identityStats,
      identityStatsPercent,
      summary,
      voteCompositionByStance,
      stanceCompositionByVote,
      overallVoteDistributionByStance,
      voteCompositionByIdentity,
      identityCompositionByVote,
      overallVoteDistributionByIdentity,
    } = await this.getVoteResults({ clusterId: clusterId });

    return {
      ...summary,
      voteDistributionByPoliticalStance: {
        voteCompositionByStance,
        stanceCompositionByVote,
        overallVoteDistributionByStance,
      },
      voteDistributionByIdentity: {
        voteCompositionByIdentity,
        identityCompositionByVote,
        overallVoteDistributionByIdentity,
      },
      stanceStats,
      stanceStatsPercent,
      identityStats,
      identityStatsPercent,
    };
  }

  async getMediaInfo({ mediaId, userId }: { mediaId: string; userId: string }) {
    // Step 1: Basic media info
    const mediaInfo = await this.db
      .selectFrom('news_media')
      .select([
        'news_media.id as mediaId',
        'news_media.name as mediaName',
        'news_media.chinese_name as mediaChineseName',
        'news_media.imageUrl',
        'news_media.political_standing',
      ])
      .where('news_media.id', '=', mediaId)
      .executeTakeFirst();

    if (!mediaInfo) {
      throw new Error('Media not found');
    }

    // Step 2: Get all articles from this media
    const mediaArticles = await this.db
      .selectFrom('news')
      .select([
        'news.id',
        'news.url',
        'news.reporting_style',
        'news.journalistic_merits',
        'news.journalistic_demerits',
      ])
      .where('news.media_name', '=', mediaInfo.mediaName as MediaNameEnum)
      .where('news.clusterId', 'is not', null)
      .as('media_articles');

    // Step 3–5: Tag extraction
    const styleTags = await this.db
      .selectFrom(mediaArticles)
      .select([
        sql.literal("'style'").as('type'),
        sql<string>`jsonb_array_elements_text(to_jsonb(${sql.ref(
          'reporting_style',
        )}))`.as('tag'),
        sql<number>`COUNT(*)`.as('tag_occurrences'),
      ])
      .where('reporting_style', 'is not', null)
      .groupBy(
        sql`jsonb_array_elements_text(to_jsonb(${sql.ref('reporting_style')}))`,
      )
      .orderBy('tag_occurrences')
      .as('style_tags');

    const meritTags = await this.db
      .selectFrom(mediaArticles)
      .select([
        sql.literal("'merit'").as('type'),
        sql<string>`jsonb_object_keys(${sql.ref('journalistic_merits')})`.as(
          'tag',
        ),
        sql<number>`COUNT(*)`.as('tag_occurrences'),
      ])
      .where('journalistic_merits', 'is not', null)
      .groupBy(sql`jsonb_object_keys(${sql.ref('journalistic_merits')})`)
      .orderBy('tag_occurrences')
      .as('merit_tags');

    const demeritTags = await this.db
      .selectFrom(mediaArticles)
      .select([
        sql.literal("'demerit'").as('type'),
        sql<string>`jsonb_object_keys(${sql.ref('journalistic_demerits')})`.as(
          'tag',
        ),
        sql<number>`COUNT(*)`.as('tag_occurrences'),
      ])
      .where('journalistic_demerits', 'is not', null)
      .groupBy(sql`jsonb_object_keys(${sql.ref('journalistic_demerits')})`)
      .orderBy('tag_occurrences')
      .as('demerit_tags');

    // Step 6: Total articles
    const totalArticles = await this.db
      .selectFrom(mediaArticles)
      .select([sql<number>`COUNT(*)`.as('total')])
      .as('total_articles');

    // Step 7: Cross join with stats
    const styleStatsQuery = await this.db
      .selectFrom([styleTags, totalArticles])
      .select([
        'style_tags.type',
        'style_tags.tag',
        'style_tags.tag_occurrences',
        'total_articles.total',
        sql<number>`ROUND(100.0 * style_tags.tag_occurrences / total_articles.total, 2)`.as(
          'percentage',
        ),
      ]);

    const meritStatsQuery = await this.db
      .selectFrom([meritTags, totalArticles])
      .select([
        'merit_tags.type',
        'merit_tags.tag',
        'merit_tags.tag_occurrences',
        'total_articles.total',
        sql<number>`ROUND(100.0 * merit_tags.tag_occurrences / total_articles.total, 2)`.as(
          'percentage',
        ),
      ])
      .where(
        sql<number>`ROUND(100.0 * merit_tags.tag_occurrences / total_articles.total, 2)`,
        '>=',
        50,
      );

    const demeritStatsQuery = await this.db
      .selectFrom([demeritTags, totalArticles])
      .select([
        'demerit_tags.type',
        'demerit_tags.tag',
        'demerit_tags.tag_occurrences',
        'total_articles.total',
        sql<number>`ROUND(100.0 * demerit_tags.tag_occurrences / total_articles.total, 2)`.as(
          'percentage',
        ),
      ])
      .where(
        sql<number>`ROUND(100.0 * demerit_tags.tag_occurrences / total_articles.total, 2)`,
        '>=',
        50,
      );

    const [styleStats, meritStats, demeritStats] = await Promise.all([
      styleStatsQuery.execute(),
      meritStatsQuery.execute(),
      demeritStatsQuery.execute(),
    ]);

    // Step 8: Top liked and read articles in this media
    const mostLikedArticles = await this.db
      .selectFrom('news')
      .select([
        'id',
        'title',
        'clusterId',
        'num_of_likes',
        'num_of_dislikes',
        'url',
      ])
      .where('news.media_name', '=', mediaInfo.mediaName as MediaNameEnum)
      .where('clusterId', 'is not', null)
      .orderBy('num_of_likes', 'desc')
      .limit(5)
      .execute();

    const topClickedArticles = await this.db
      .selectFrom('news')
      .leftJoin('user_article_read', 'news.id', 'user_article_read.newsId')
      .select([
        'news.id',
        'news.title',
        'news.clusterId',
        'news.url',
        sql<number>`COUNT(user_article_read.id)`.as('readCount'),
      ])
      .where('news.media_name', '=', mediaInfo.mediaName as MediaNameEnum)
      .where('news.clusterId', 'is not', null)
      .groupBy(['news.id', 'news.title'])
      .orderBy('readCount', 'desc')
      .limit(5)
      .execute();

    const articleIds = [
      ...mostLikedArticles.map((a) => a.id),
      ...topClickedArticles.map((a) => a.id),
    ];

    // Step 9: Reactions + questions if any
    const [
      newsReactions,
      trueFalseNotGivenQuestions,
      misguidingTechniquesQuestions,
    ] =
      articleIds.length > 0
        ? await Promise.all([
            this.db
              .selectFrom('news_reaction')
              .selectAll()
              .where((eb) =>
                eb.and([
                  eb('userId', '=', userId),
                  eb('news_reaction.newsId', 'in', articleIds),
                ]),
              )
              .execute(),
            this.db
              .selectFrom('news_questions')
              .leftJoin('user_answer', (join) =>
                join
                  .onRef('user_answer.questionId', '=', 'news_questions.id')
                  .on('user_answer.userId', '=', userId),
              )
              .selectAll('news_questions')
              .select([
                sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
                'user_answer.selectedOption',
                'news_questions.id as id',
              ])
              .where((eb) =>
                eb.and([
                  eb('news_questions.newsId', 'in', articleIds),
                  eb(
                    'news_questions.type',
                    '=',
                    'TRUE_FALSE_NOT_GIVEN_QUESTION',
                  ),
                ]),
              )
              .execute(),
            this.db
              .selectFrom('news_questions')
              .leftJoin('user_answer', (join) =>
                join
                  .onRef('user_answer.questionId', '=', 'news_questions.id')
                  .on('user_answer.userId', '=', userId),
              )
              .selectAll()
              .select([
                sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
                'user_answer.selectedOption',
                'news_questions.id as id',
              ])
              .where((eb) =>
                eb.and([
                  eb('news_questions.newsId', 'in', articleIds),
                  eb(
                    'news_questions.type',
                    '=',
                    'MISGUIDING_TECHNIQUES_QUESTION',
                  ),
                ]),
              )
              .execute(),
          ])
        : [[], [], []];

    // Step 10: Final return
    return {
      media: {
        id: mediaInfo.mediaId,
        name: mediaInfo.mediaName,
        chineseName: mediaInfo.mediaChineseName,
        imageUrl: mediaInfo.imageUrl,
        political_standing: mediaInfo.political_standing,
      },
      styleStats,
      meritStats,
      demeritStats,
      mostLikedArticles,
      topClickedArticles,
      newsReactions,
      trueFalseNotGivenQuestions,
      misguidingTechniquesQuestions,
    };
  }

  async getAuthorInfo({
    authorId,
    userId,
  }: {
    authorId: string;
    userId: string;
  }) {
    // Step 1: Get author + media info
    const authorInfo = await this.db
      .selectFrom('author')
      .innerJoin(
        'author_to_news_media',
        'author.id',
        'author_to_news_media.authorId',
      )
      .innerJoin(
        'news_media',
        'news_media.id',
        'author_to_news_media.newsMediaId',
      )
      .leftJoin('user_to_author', (join) =>
        join
          .onRef('user_to_author.authorId', '=', 'author.id')
          .on('user_to_author.userId', '=', userId),
      )
      .select([
        'author.id as authorId',
        'author.name as authorName',
        'news_media.name as mediaName',
        'news_media.chinese_name as mediaChineseName',
        sql<boolean>`user_to_author.id is not null`.as('isFollowed'),
      ])
      .distinctOn(['news_media.name', 'news_media.chinese_name'])
      .where('author.id', '=', authorId)
      .execute();
    // Step 2: Author articles subquery
    const authorArticles = await this.db
      .selectFrom('news')
      .innerJoin('news_author', 'news.id', 'news_author.newsId')
      .select([
        'news.id',
        'news.url',
        'news.reporting_style',
        'news.journalistic_merits',
        'news.journalistic_demerits',
      ])
      .where('news_author.authorId', '=', authorId)
      .where('news.clusterId', 'is not', null)
      .as('author_articles');

    // Step 3: reporting_style tags
    const styleTags = await this.db
      .selectFrom(authorArticles)
      .select([
        sql.literal("'style'").as('type'),
        sql<string>`jsonb_array_elements_text(to_jsonb(${sql.ref('reporting_style')}))`.as(
          'tag',
        ),
        sql<number>`COUNT(*)`.as('tag_occurrences'),
      ])
      .where('reporting_style', 'is not', null)
      .groupBy(
        sql`jsonb_array_elements_text(to_jsonb(${sql.ref('reporting_style')}))`,
      )
      .orderBy('tag_occurrences')
      .as('style_tags');

    // Step 4: journalistic_merits tags
    const meritTags = await this.db
      .selectFrom(authorArticles)
      .select([
        sql.literal("'merit'").as('type'),
        sql<string>`jsonb_object_keys(${sql.ref('journalistic_merits')})`.as(
          'tag',
        ),
        sql<number>`COUNT(*)`.as('tag_occurrences'),
      ])
      .where('journalistic_merits', 'is not', null)
      .groupBy(sql`jsonb_object_keys(${sql.ref('journalistic_merits')})`)
      .orderBy('tag_occurrences')
      .as('merit_tags');

    // Step 5: journalistic_demerits tags
    const demeritTags = await this.db
      .selectFrom(authorArticles)
      .select([
        sql.literal("'demerit'").as('type'),
        sql<string>`jsonb_object_keys(${sql.ref('journalistic_demerits')})`.as(
          'tag',
        ),
        sql<number>`COUNT(*)`.as('tag_occurrences'),
      ])
      .where('journalistic_demerits', 'is not', null)
      .groupBy(sql`jsonb_object_keys(${sql.ref('journalistic_demerits')})`)
      .orderBy('tag_occurrences')
      .as('demerit_tags');

    // Step 6: total articles
    const totalArticles = await this.db
      .selectFrom(authorArticles)
      .select([sql<number>`COUNT(*)`.as('total')])
      .as('total_articles');

    // Step 7: Final queries (cross joins)
    const styleStatsQuery = await this.db
      .selectFrom([styleTags, totalArticles])
      .select([
        'style_tags.type',
        'style_tags.tag',
        'style_tags.tag_occurrences',
        'total_articles.total',
        sql<number>`ROUND(100.0 * style_tags.tag_occurrences / total_articles.total, 2)`.as(
          'percentage',
        ),
      ]);

    const meritStatsQuery = await this.db
      .selectFrom([meritTags, totalArticles])
      .select([
        'merit_tags.type',
        'merit_tags.tag',
        'merit_tags.tag_occurrences',
        'total_articles.total',
        sql<number>`ROUND(100.0 * merit_tags.tag_occurrences / total_articles.total, 2)`.as(
          'percentage',
        ),
      ])
      .where(
        sql<number>`ROUND(100.0 * merit_tags.tag_occurrences / total_articles.total, 2)`,
        '>=',
        50,
      );

    const demeritStatsQuery = await this.db
      .selectFrom([demeritTags, totalArticles])
      .select([
        'demerit_tags.type',
        'demerit_tags.tag',
        'demerit_tags.tag_occurrences',
        'total_articles.total',
        sql<number>`ROUND(100.0 * demerit_tags.tag_occurrences / total_articles.total, 2)`.as(
          'percentage',
        ),
      ])
      .where(
        sql<number>`ROUND(100.0 * demerit_tags.tag_occurrences / total_articles.total, 2)`,
        '>=',
        50,
      );

    // Step 8: Execute in parallel
    const [styleStats, meritStats, demeritStats] = await Promise.all([
      styleStatsQuery.execute(),
      meritStatsQuery.execute(),
      demeritStatsQuery.execute(),
    ]);

    // Step 9: First liked articles
    const mostLikedArticles = await this.db
      .selectFrom('news_reaction')
      .innerJoin('news', 'news.id', 'news_reaction.newsId')
      .innerJoin('news_author', 'news.id', 'news_author.newsId')
      .select([
        'news.id',
        'news.title',
        'news.clusterId',
        'news.num_of_likes',
        'news.num_of_dislikes',
        'news.url',
        'news_reaction.createdAt',
      ])
      .where((eb) =>
        eb.and([
          eb('news_author.authorId', '=', authorId),
          eb('news.clusterId', 'is not', null),
        ]),
      )
      .where('news_reaction.type', '=', 'LIKE')
      .orderBy('news_reaction.createdAt', 'asc')
      .limit(5)
      .execute();

    // Step 10: Most clicked articles
    const topClickedArticles = await this.db
      .selectFrom('news')
      .innerJoin('news_author', 'news.id', 'news_author.newsId')
      .leftJoin('user_article_read', 'news.id', 'user_article_read.newsId')
      .select([
        'news.id',
        'news.title',
        'news.clusterId',
        'news.num_of_likes',
        'news.num_of_dislikes',
        'news.url',
        sql<number>`COUNT(user_article_read.id)`.as('readCount'),
      ])
      .where((eb) =>
        eb.and([
          eb('news_author.authorId', '=', authorId),
          eb('news.clusterId', 'is not', null),
        ]),
      )
      .groupBy(['news.id', 'news.title'])
      .orderBy('readCount', 'desc')
      .limit(5)
      .execute();
    const mostLikedArticleIds = mostLikedArticles.map((article) => article.id);
    const topClickedArticleIds = topClickedArticles.map(
      (article) => article.id,
    );
    const newsIds = [...mostLikedArticleIds, ...topClickedArticleIds];

    if (newsIds.length === 0) {
      return {
        author: {
          id: authorId,
          name: authorInfo[0]?.authorName ?? null,
          media: authorInfo.map((row) => row.mediaChineseName),
          isFollowed: authorInfo[0].isFollowed,
        },
        styleStats,
        meritStats,
        demeritStats,
        mostLikedArticles: [],
        topClickedArticles: [],
        newsReactions: [],
        trueFalseNotGivenQuestions: [],
        misguidingTechniquesQuestions: [],
      };
    }
    // Step 11: Get news reactions
    const newsReactions = await this.db
      .selectFrom('news_reaction')
      .selectAll()
      .where((eb) =>
        eb.and([
          eb('userId', '=', userId),
          eb('news_reaction.newsId', 'in', newsIds),
        ]),
      )
      .execute();

    // Step 12: Get trueFalseNotGivenQuestions
    const trueFalseNotGivenQuestions = await this.db
      .selectFrom('news_questions')
      .leftJoin('user_answer', (join) =>
        join
          .onRef('user_answer.questionId', '=', 'news_questions.id')
          .on('user_answer.userId', '=', userId),
      )
      .selectAll('news_questions')
      .select([
        sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
        'user_answer.selectedOption',
        'news_questions.id as id',
      ])
      .where((eb) =>
        eb.and([
          eb('news_questions.newsId', 'in', newsIds),
          eb('news_questions.type', '=', 'TRUE_FALSE_NOT_GIVEN_QUESTION'),
        ]),
      )
      .execute();
    console.log('trueFalseNotGivenQuestions:', trueFalseNotGivenQuestions);

    // Step 13: Get misguidingTechniquesQuestions
    const misguidingTechniquesQuestions = await this.db
      .selectFrom('news_questions')
      .leftJoin('user_answer', (join) =>
        join
          .onRef('user_answer.questionId', '=', 'news_questions.id')
          .on('user_answer.userId', '=', userId),
      )
      .selectAll()
      .select([
        sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
        'user_answer.selectedOption',
        'news_questions.id as id',
      ])
      .where((eb) =>
        eb.and([
          eb('news_questions.newsId', 'in', newsIds),
          eb('news_questions.type', '=', 'MISGUIDING_TECHNIQUES_QUESTION'),
        ]),
      )
      .execute();

    // Combine all results
    console.log('authorInfo:', authorInfo);
    return {
      author: {
        id: authorId,
        name: authorInfo[0]?.authorName ?? null,
        media: authorInfo.map((row) => row.mediaChineseName),
        isFollowed: authorInfo[0].isFollowed,
      },
      styleStats,
      meritStats,
      demeritStats,
      mostLikedArticles,
      topClickedArticles,
      newsReactions,
      trueFalseNotGivenQuestions,
      misguidingTechniquesQuestions,
    };
  }

  async search({ input, userId }: { input: string; userId: string }) {
    const clusters = await getClusters(this.db, userId)
      .where((eb) =>
        eb.or([
          eb('cluster.cluster_summary', 'like', `%${input}%`),
          eb('cluster.cluster_name', 'like', `%${input}`),
          eb('news.refined_title', 'like', `%${input}`),
          eb('news.title', 'like', `%${input}`),
        ]),
      )
      .orderBy('news_count', 'desc')
      .orderBy('cluster.latest_published', 'desc')
      .limit(30)
      .execute();

    const authors = await this.db
      .selectFrom('author')
      .innerJoin(
        'author_to_news_media',
        'author.id',
        'author_to_news_media.authorId',
      )
      .innerJoin(
        'news_media',
        'news_media.id',
        'author_to_news_media.newsMediaId',
      )
      .select([
        'author.id as id',
        'author.name as name',
        sql`array_agg(DISTINCT news_media.chinese_name)`.as('media'),
      ])
      .where('author.name', 'like', `%${input}%`)
      .groupBy(['author.id', 'author.name'])
      .limit(30)
      .execute();

    const newsMedia = await this.db
      .selectFrom('news_media')
      .selectAll()
      .where((eb) =>
        eb.or([
          eb('news_media.name', 'like', `%${input}%`),
          eb('news_media.chinese_name', 'like', `%${input}%`),
        ]),
      )
      .limit(30)
      .execute();

    return {
      clusters,
      authors,
      newsMedia,
    };
  }
  async checkIfCrossAnalysisAlreadyHasBeenDone({
    userId,
    dto,
  }: {
    userId: string;
    dto: { ids: string[] };
  }) {
    const result = await this.db
      .selectFrom('cross_analysis')
      .leftJoin('news as newsA', 'newsA.id', 'cross_analysis.articleAId')
      .leftJoin('news as newsB', 'newsB.id', 'cross_analysis.articleBId')
      .leftJoin('cluster', 'cluster.id', 'newsA.clusterId')
      .where((eb) =>
        eb.and([
          eb('newsA.id', '=', dto.ids[0]),
          eb('newsB.id', '=', dto.ids[1]),
        ]),
      )
      .selectAll()
      .select([
        'cross_analysis.id as id',
        'newsA.id as newsAId',
        'newsB.id as newsBId',
        'cluster.id as clusterId',
      ])
      .select('cross_analysis.url as cross_analysis_url')
      .executeTakeFirst();
    console.log('result:', result);
    return {
      alreadyAnalysed:
        result?.articleAId != undefined && result?.articleBId != undefined,
      crossAnalysis: result,
    };
  }

  async insertCrossAnalysisRequest({
    articleIds,
    content,
    userId,
    publicUrl,
  }: {
    articleIds: string[];
    content: string;
    userId: string;
    publicUrl: string;
  }) {
    await this.db
      .insertInto('cross_analysis')
      .values({
        articleAId: articleIds[0],
        articleBId: articleIds[1],
        analysisResult: content,
        requestedById: userId,
        requestedAt: Math.floor(Date.now() / 1000),
        url: publicUrl,
      })
      .execute();
  }

  async getSingleCrossAnalysisReport({
    crossAnalaysisId,
  }: {
    crossAnalaysisId: string;
  }) {
    return await this.db
      .selectFrom('cross_analysis')
      .leftJoin('news as newsA', 'newsA.id', 'cross_analysis.articleAId')
      .leftJoin('news_media as newsMediaA', (join) =>
        join.on(
          sql`${sql.ref('newsMediaA.name')} = ${sql.ref('newsA.media_name')}::text`,
        ),
      )
      .leftJoin('news as newsB', 'newsB.id', 'cross_analysis.articleBId')
      .leftJoin('news_media as newsMediaB', (join) =>
        join.on(
          sql`${sql.ref('newsMediaB.name')} = ${sql.ref('newsB.media_name')}::text`,
        ),
      )
      .leftJoin('cluster', 'cluster.id', 'newsA.clusterId')
      .where('cross_analysis.id', '=', crossAnalaysisId)
      .select([
        'cross_analysis.id as id',
        'cross_analysis.url',
        'newsA.media_name as newsA_media_name',
        'newsA.title as newsA_title',
        'newsA.authors as newsA_authors',
        'newsMediaA.political_standing as newsA_political_standing',
        'newsB.media_name as newsB_media_name',
        'newsB.title as newsB_title',
        'newsB.authors as newsB_authors',
        'newsMediaB.political_standing as newsB_political_standing',
        'cluster.cluster_name as cluster_name',
      ])
      .executeTakeFirst();
  }

  async getCrossAnalysisReports({
    userId,
    offset,
  }: {
    userId: string;
    offset: number;
  }) {
    return await this.db
      .selectFrom('cross_analysis')
      .leftJoin('news as newsA', 'newsA.id', 'cross_analysis.articleAId')
      .leftJoin('news_media as newsMediaA', (join) =>
        join.on(
          sql`${sql.ref('newsMediaA.name')} = ${sql.ref('newsA.media_name')}::text`,
        ),
      )
      .leftJoin('news as newsB', 'newsB.id', 'cross_analysis.articleBId')
      .leftJoin('news_media as newsMediaB', (join) =>
        join.on(
          sql`${sql.ref('newsMediaB.name')} = ${sql.ref('newsB.media_name')}::text`,
        ),
      )
      .leftJoin('cluster', 'cluster.id', 'newsA.clusterId')
      .where('cross_analysis.requestedById', '=', userId)
      .select([
        'cross_analysis.id as id',
        'cross_analysis.url',
        'newsA.media_name as newsA_media_name',
        'newsA.title as newsA_title',
        'newsA.authors as newsA_authors',
        'newsMediaA.political_standing as newsA_political_standing',
        'newsB.media_name as newsB_media_name',
        'newsB.title as newsB_title',
        'newsB.authors as newsB_authors',
        'newsMediaB.political_standing as newsB_political_standing',
        'cluster.cluster_name as cluster_name',
      ])
      .orderBy('cross_analysis.requestedAt', 'desc')
      .offset(offset)
      .limit(15)
      .execute();
  }

  async like({ userId, dto }: { userId: string; dto: DislikeArticleDto }) {
    const { newsId } = dto;

    const news = await this.db.transaction().execute(async (trx) => {
      const existing = await trx
        .selectFrom('news_reaction')
        .select(['type'])
        .where('userId', '=', userId)
        .where('newsId', '=', newsId)
        .executeTakeFirst();

      const unixTimestamp = timeUtil.getUnixTimestamp();

      if (!existing) {
        // No reaction yet → add LIKE
        await trx
          .insertInto('news_reaction')
          .values({
            userId: userId,
            newsId: newsId,
            type: 'LIKE',
            createdAt: unixTimestamp,
          })
          .execute();

        return await trx
          .updateTable('news')
          .set((eb) => ({
            num_of_likes: eb('num_of_likes', '+', 1),
          }))
          .where('id', '=', newsId)
          .returningAll()
          .executeTakeFirst();
      }

      if (existing.type === 'LIKE') {
        // Already liked → unlike
        await trx
          .deleteFrom('news_reaction')
          .where('userId', '=', userId)
          .where('newsId', '=', newsId)
          .execute();

        return await trx
          .updateTable('news')
          .set((eb) => ({
            num_of_likes: eb('num_of_likes', '-', 1),
          }))
          .where('id', '=', newsId)
          .returningAll()
          .executeTakeFirst();
      }

      // Was DISLIKE → switch to LIKE
      await trx
        .updateTable('news_reaction')
        .set({ type: 'LIKE', createdAt: unixTimestamp })
        .where('userId', '=', userId)
        .where('newsId', '=', newsId)
        .execute();

      return await trx
        .updateTable('news')
        .set((eb) => ({
          num_of_dislikes: eb('num_of_dislikes', '-', 1),
          num_of_likes: eb('num_of_likes', '+', 1),
        }))
        .where('id', '=', newsId)
        .returningAll()
        .executeTakeFirst();
    });

    const reaction = await this.db
      .selectFrom('news_reaction')
      .select('type')
      .where('userId', '=', userId)
      .where('newsId', '=', newsId)
      .executeTakeFirst();

    return { ...news, reaction: reaction?.type ?? null };
  }

  async dislike({ userId, dto }: { userId: string; dto: DislikeArticleDto }) {
    const { newsId } = dto;

    const news = await this.db.transaction().execute(async (trx) => {
      const existing = await trx
        .selectFrom('news_reaction')
        .select(['type'])
        .where('userId', '=', userId)
        .where('newsId', '=', newsId)
        .executeTakeFirst();

      const unixTimestamp = timeUtil.getUnixTimestamp();

      if (!existing) {
        // No reaction yet → add DISLIKE
        await trx
          .insertInto('news_reaction')
          .values({
            userId: userId,
            newsId: newsId,
            type: 'DISLIKE',
            createdAt: unixTimestamp,
          })
          .execute();

        return await trx
          .updateTable('news')
          .set((eb) => ({
            num_of_dislikes: eb('num_of_dislikes', '+', 1),
          }))
          .where('id', '=', newsId)
          .returningAll()
          .executeTakeFirst();
      }

      if (existing.type === 'DISLIKE') {
        // Already disliked → remove reaction
        await trx
          .deleteFrom('news_reaction')
          .where('userId', '=', userId)
          .where('newsId', '=', newsId)
          .execute();

        return await trx
          .updateTable('news')
          .set((eb) => ({
            num_of_dislikes: eb('num_of_dislikes', '-', 1),
          }))
          .where('id', '=', newsId)
          .returningAll()
          .executeTakeFirst();
      }

      // Was LIKE → switch to DISLIKE
      await trx
        .updateTable('news_reaction')
        .set({ type: 'DISLIKE', createdAt: unixTimestamp })
        .where('userId', '=', userId)
        .where('newsId', '=', newsId)
        .execute();

      return await trx
        .updateTable('news')
        .set((eb) => ({
          num_of_likes: eb('num_of_likes', '-', 1),
          num_of_dislikes: eb('num_of_dislikes', '+', 1),
        }))
        .where('id', '=', newsId)
        .returningAll()
        .executeTakeFirst();
    });
    const reaction = await this.db
      .selectFrom('news_reaction')
      .select('type')
      .where('userId', '=', userId)
      .where('newsId', '=', newsId)
      .executeTakeFirst();

    return { ...news, reaction: reaction?.type ?? null };
  }

  async unlockCluster({
    userId,
    clusterId,
    newsId,
  }: {
    userId: string;
    clusterId: string;
    newsId?: string;
  }) {
    const user = await this.db
      .selectFrom('user')
      .selectAll()
      .where('id', '=', userId)
      .executeTakeFirst();
    if (!user) {
      throw new HttpException(
        'Cannot find the user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const numberOfBrains = user?.num_of_brains;
    if (numberOfBrains < 4) {
      return { unlocked: false };
    }
    if (numberOfBrains >= 4) {
      return await this.db.transaction().execute(async (trx) => {
        await trx
          .updateTable('user')
          .set((eb) => ({ num_of_brains: eb('num_of_brains', '-', 4) }))
          .where('id', '=', userId)
          .execute();
        await trx
          .updateTable('user_achievement')
          .set((eb) => ({
            max_num: eb('max_num', '+', 1),
            cumulative_num: eb('cumulative_num', '+', 1),
          }))
          .where((eb) =>
            eb.and([
              eb('user_achievement.userId', '=', user.id),
              eb('user_achievement.achievementId', '=', 9),
            ]),
          )
          .execute();
        await trx
          .insertInto('free_user_to_unlocked_cluster')
          .values({ clusterId: clusterId, userId: userId })
          .returningAll()
          .executeTakeFirst();
        console.log('newsId:', newsId);
        return { unlocked: true, clusterId, newsId };
      });
    }
  }

  async toggleFollowJournalist({
    authorId,
    userId,
  }: {
    authorId: string;
    userId: string;
  }) {
    // Check if the user already follows this author
    const existingFollow = await this.db
      .selectFrom('user_to_author')
      .select(['id'])
      .where('userId', '=', userId)
      .where('authorId', '=', authorId)
      .executeTakeFirst();

    console.log('existingFollow:', existingFollow);
    if (existingFollow) {
      // Unfollow
      await this.db
        .deleteFrom('user_to_author')
        .where('id', '=', existingFollow.id)
        .execute();

      return { followed: false };
    } else {
      // Follow
      await this.db
        .insertInto('user_to_author')
        .values({
          id: crypto.randomUUID(),
          userId: userId,
          authorId: authorId,
          followedAt: timeUtil.getUnixTimestamp(),
        })
        .execute();

      return { followed: true };
    }
  }

  async getAllArticlesForOneNewsOutletWithOneParticularTagForAuthor({
    userId,
    authorId,
    tag,
    tagType,
    offset,
    // "reporting_style"|"journalistic_merits"|"journalistic_demerits"
  }: {
    userId: string;
    authorId: string;
    tag: string;
    tagType: string;
    offset: number;
  }) {
    // Step 1: Get media name by ID
    const author = await this.db
      .selectFrom('author')
      .select(['name'])
      .where('id', '=', authorId)
      .executeTakeFirst();

    if (!author)
      throw new HttpException(
        'author not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    if (!tag || typeof tag !== 'string' || tag.trim() === '') {
      throw new HttpException('Invalid tag', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const name = author.name;
    console.log('name:', name);
    console.log('tag:', tag);
    // Step 2: Query articles with the tag in reporting_style
    const news = await this.db
      .selectFrom('news')
      .leftJoin('cluster', 'cluster.id', 'news.clusterId')
      .leftJoin(
        'free_user_to_unlocked_cluster',
        'free_user_to_unlocked_cluster.clusterId',
        'cluster.id',
      )
      .selectAll()
      .select('news.id as id')
      .select(
        'free_user_to_unlocked_cluster.id as free_user_to_unlocked_cluster_id',
      )
      .select('cluster.id as clusterId')
      .select(
        sql<boolean>`free_user_to_unlocked_cluster.id is not null`.as(
          'unlocked',
        ),
      )
      .where(sql<boolean>`${sql.lit(name)} = ANY(${sql.ref('news.authors')})`)
      .where((eb) => {
        if (
          tagType === 'reporting_style' ||
          tagType === 'reporting_intention'
        ) {
          // For String[] columns
          return eb(tagType as any, '@>', sql`ARRAY[${tag}]::text[]`);
        } else if (
          tagType === 'journalistic_merits' ||
          tagType === 'journalistic_demerits'
        ) {
          // For JSONB object columns
          return sql<boolean>`${sql.ref(tagType)} ? ${tag}`;
        } else {
          throw new HttpException(
            `Unsupported tagType: ${tagType}`,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      })
      .where('news.clusterId', 'is not', null)
      .orderBy('news.published_at', 'desc')
      .limit(30)
      .offset(offset)
      .execute();
    console.log('news:', news);
    const newsIds = news.map((article) => article.id);

    if (newsIds.length === 0) {
      return {
        news: [],
        newsReactions: [],
        trueFalseNotGivenQuestions: [],
        misguidingTechniquesQuestions: [],
      };
    }
    const newsReactions = await this.db
      .selectFrom('news_reaction')
      .selectAll()
      .where((eb) =>
        eb.and([
          eb('userId', '=', userId),
          eb('news_reaction.newsId', 'in', newsIds),
        ]),
      )
      .execute();

    const trueFalseNotGivenQuestions = await this.db
      .selectFrom('news_questions')
      .leftJoin('user_answer', (join) =>
        join
          .onRef('user_answer.questionId', '=', 'news_questions.id')
          .on('user_answer.userId', '=', userId),
      )
      .selectAll()
      .select([
        sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
        'user_answer.selectedOption',
        'news_questions.id as id',
      ])
      .where((eb) =>
        eb.and([
          eb('news_questions.newsId', 'in', newsIds),
          eb('news_questions.type', '=', 'TRUE_FALSE_NOT_GIVEN_QUESTION'),
        ]),
      )
      .execute();
    const misguidingTechniquesQuestions = await this.db
      .selectFrom('news_questions')
      .leftJoin('user_answer', (join) =>
        join
          .onRef('user_answer.questionId', '=', 'news_questions.id')
          .on('user_answer.userId', '=', userId),
      )
      .selectAll()
      .select([
        sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
        'user_answer.selectedOption',
        'news_questions.id as id',
      ])
      .where((eb) =>
        eb.and([
          eb('news_questions.newsId', 'in', newsIds),
          eb('news_questions.type', '=', 'MISGUIDING_TECHNIQUES_QUESTION'),
        ]),
      )
      .execute();

    return {
      news,
      newsReactions,
      trueFalseNotGivenQuestions,
      misguidingTechniquesQuestions,
    };
  }

  async getAllArticlesForOneNewsOutletWithOneParticularTagForMedia({
    userId,
    mediaId,
    tag,
    tagType,
    offset,
    // "reporting_style"|"journalistic_merits"|"journalistic_demerits"
  }: {
    userId: string;
    mediaId: string;
    tag: string;
    tagType: string;
    offset: number;
  }) {
    // Step 1: Get media name by ID
    const media = await this.db
      .selectFrom('news_media')
      .select(['name'])
      .where('id', '=', mediaId)
      .executeTakeFirst();

    if (!media)
      throw new HttpException(
        'Media not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    if (!tag || typeof tag !== 'string' || tag.trim() === '') {
      throw new HttpException('Invalid tag', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const mediaName = media.name;
    console.log('mediaName:', mediaName);
    console.log('tag:', tag);
    // Step 2: Query articles with the tag in reporting_style
    const news = await this.db
      .selectFrom('news')
      .leftJoin('cluster', 'cluster.id', 'news.clusterId')
      .leftJoin(
        'free_user_to_unlocked_cluster',
        'free_user_to_unlocked_cluster.clusterId',
        'cluster.id',
      )
      .selectAll()
      .select('news.id as id')
      .distinctOn('news.id')
      .select(
        'free_user_to_unlocked_cluster.id as free_user_to_unlocked_cluster_id',
      )
      .select('cluster.id as clusterId')
      .select(
        sql<boolean>`free_user_to_unlocked_cluster.id is not null`.as(
          'unlocked',
        ),
      )
      .where('news.media_name', '=', mediaName as any) // MediaNameEnum
      .where((eb) => {
        if (
          tagType === 'reporting_style' ||
          tagType === 'reporting_intention'
        ) {
          // For String[] columns
          return eb(tagType as any, '@>', sql`ARRAY[${tag}]::text[]`);
        } else if (
          tagType === 'journalistic_merits' ||
          tagType === 'journalistic_demerits'
        ) {
          // For JSONB object columns
          return sql<boolean>`${sql.ref(tagType)} ? ${tag}`;
        } else {
          throw new HttpException(
            `Unsupported tagType: ${tagType}`,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      })
      .where('news.clusterId', 'is not', null)
      .orderBy('news.published_at', 'desc')
      .orderBy('news.id')
      .limit(30)
      .offset(offset)
      .execute();
    console.log('news:', news);
    const newsIds = news.map((article) => article.id);

    if (newsIds.length === 0) {
      return {
        news: [],
        newsReactions: [],
        trueFalseNotGivenQuestions: [],
        misguidingTechniquesQuestions: [],
      };
    }
    const newsReactions = await this.db
      .selectFrom('news_reaction')
      .selectAll()
      .where((eb) =>
        eb.and([
          eb('userId', '=', userId),
          eb('news_reaction.newsId', 'in', newsIds),
        ]),
      )
      .execute();

    const trueFalseNotGivenQuestions = await this.db
      .selectFrom('news_questions')
      .leftJoin('user_answer', (join) =>
        join
          .onRef('user_answer.questionId', '=', 'news_questions.id')
          .on('user_answer.userId', '=', userId),
      )
      .selectAll()
      .select([
        sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
        'user_answer.selectedOption',
        'news_questions.id as id',
      ])
      .where((eb) =>
        eb.and([
          eb('news_questions.newsId', 'in', newsIds),
          eb('news_questions.type', '=', 'TRUE_FALSE_NOT_GIVEN_QUESTION'),
        ]),
      )
      .execute();
    const misguidingTechniquesQuestions = await this.db
      .selectFrom('news_questions')
      .leftJoin('user_answer', (join) =>
        join
          .onRef('user_answer.questionId', '=', 'news_questions.id')
          .on('user_answer.userId', '=', userId),
      )
      .selectAll()
      .select([
        sql<boolean>`user_answer.id IS NOT NULL`.as('answered'),
        'user_answer.selectedOption',
        'news_questions.id as id',
      ])
      .where((eb) =>
        eb.and([
          eb('news_questions.newsId', 'in', newsIds),
          eb('news_questions.type', '=', 'MISGUIDING_TECHNIQUES_QUESTION'),
        ]),
      )
      .execute();
    console.log('news:', news);
    return {
      news,
      newsReactions,
      trueFalseNotGivenQuestions,
      misguidingTechniquesQuestions,
    };
  }

  async addUserReadSpecificNewsArticle({
    userId,
    newsId,
  }: {
    userId: string;
    newsId: string;
  }) {
    await this.db
      .insertInto('user_article_read')
      .values({
        userId: userId,
        newsId: newsId,
      })
      .onConflict((oc) =>
        oc
          .columns(['userId', 'newsId']) // composite unique constraint
          .doNothing(),
      )
      .execute();
  }
}
