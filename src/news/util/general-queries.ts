import { Kysely, sql } from 'kysely';
import getClustersUtil from './getClustersUtil';
import { DB } from 'src/kysely/types';
import { jsonArrayFrom, jsonObjectFrom } from 'kysely/helpers/postgres';

export function getClusters(db: Kysely<DB>, userId) {
  const news_media = getClustersUtil.getNewsMedia(db);

  const media_general_camp_breakdown =
    getClustersUtil.getMediaGeneralCampBreakdown(db);

  const media_specific_camp_breakdown =
    getClustersUtil.getMediaSpecificCampBreakdown(db);

  const flattenedImages = getClustersUtil.getMediaImages(db);

  return db
    .selectFrom('cluster')
    .leftJoin(
      'cluster_vote_summary',
      'cluster_vote_summary.clusterId',
      'cluster.id',
    )
    .leftJoin('news', 'news.clusterId', 'cluster.id')
    .leftJoin('news_media', (join) =>
      join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
    )
    .leftJoin(
      'free_user_to_unlocked_cluster',
      'free_user_to_unlocked_cluster.clusterId',
      'cluster.id',
    )
    .select([
      'cluster.id',
      'cluster.cluster_name',
      'cluster.cluster_summary',
      'cluster.cluster_question',
      'cluster.main_topic',
      'cluster.places_in_concern',
      'cluster.secondary_topic',
      'cluster.latest_published',
      'cluster_vote_summary.support',
      'cluster_vote_summary.oppose',
      'cluster_vote_summary.neutral',
    ])
    .select((eb) =>
      eb
        .case()
        .when('free_user_to_unlocked_cluster.id', 'is not', null)
        .then(true)
        .else(false)
        .end()
        .as('unlocked'),
    )
    .select((eb) => [jsonArrayFrom(news_media).as('news_media')])
    .select((eb) => [
      eb.fn.count<number>(sql`distinct "news_media"."id"`).as('media_count'),
    ])
    .select((eb) => [eb.fn.count<number>('news.id').as('news_count')])
    .select((eb) => [
      jsonObjectFrom(media_general_camp_breakdown).as(
        'media_general_camp_breakdown',
      ),
    ])
    .select((eb) => [
      jsonObjectFrom(media_specific_camp_breakdown).as(
        'media_specific_camp_breakdown',
      ),
    ])
    .select((eb) => [flattenedImages.as('images')])
    .groupBy([
      'cluster.id',
      'cluster.cluster_name',
      'cluster.cluster_summary',
      'cluster.cluster_question',
      'cluster.main_topic',
      'cluster.places_in_concern',
      'cluster.secondary_topic',
      'cluster.latest_published',
      'cluster_vote_summary.support',
      'cluster_vote_summary.oppose',
      'cluster_vote_summary.neutral',
      'free_user_to_unlocked_cluster.id',
    ]);
}
