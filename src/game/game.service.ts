import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { sql } from 'kysely';
import { KyselyService } from 'src/kysely/kysely.service';
import timeUtil from 'utils/timeUtil';
import { UploadAnswerDto } from './game.dto';

@Injectable()
export class GameService {
  constructor(private readonly kyselyService: KyselyService) {}
  private get db() {
    return this.kyselyService.connection;
  }
  async getMissions(userId: string) {
    return await this.db
      .selectFrom('user_mission')
      .leftJoin('mission', 'mission.id', 'user_mission.missionId')
      .selectAll()
      .select('mission.id as missionId')
      .select('user_mission.id as id')
      .where((eb) =>
        eb.and([
          eb('userId', '=', userId),
          eb('user_mission.completed', '=', false),
        ]),
      )
      .execute();
  }

  async getAchievements(userId: string) {
    return await this.db
      .selectFrom('user_achievement')
      .leftJoin(
        'achievement',
        'achievement.id',
        'user_achievement.achievementId',
      )
      .selectAll()
      .select('achievement.id as achievementId')
      .select('user_achievement.id as userAchievementId')
      .where('userId', '=', userId)
      .execute();
  }

  async getTitles(userId: string) {
    // Step 1: Total users
    const _totalUsers = await this.db
      .selectFrom('user')
      .select((eb) => eb.fn.countAll().as('users_count'))
      .executeTakeFirst();

    const totalUsers = Number(_totalUsers?.users_count);

    // Step 2: Subquery to get percentage of users per titleId
    const titleStats = this.db
      .selectFrom('user_title')
      .select([
        'titleId',
        sql<number>`(ROUND(COUNT(*) * 100.0 / ${totalUsers},2))`.as(
          'percentage_of_users',
        ),
      ])
      .groupBy('titleId')
      .as('title_stats');

    // Step 3: Main query to get all user_title rows for this user, with percentage
    const userTitleData = await this.db
      .selectFrom('user_title')
      .leftJoin('title', 'title.id', 'user_title.titleId')
      .leftJoin(titleStats, 'user_title.titleId', 'title_stats.titleId')
      .select((eb) => [
        'user_title.id',
        'user_title.userId',
        'emoji',
        'condition',
        'explanation',
        'createdAt',
        'title.name',
        'title_stats.percentage_of_users as percentage',
      ])
      .where('user_title.userId', '=', userId)
      .execute();
    return userTitleData;
  }

  async updateDailyLoginStreakProgress({
    userId,
    missionTitle,
  }: {
    userId: string;
    missionTitle: string;
  }) {
    await this.db.transaction().execute(async (trx) => {
      const userMission = await trx
        .selectFrom('user_mission')
        .leftJoin('mission', 'mission.id', 'user_mission.missionId')
        .selectAll()
        .select([
          'user_mission.id as id',
          'user_mission.updatedAt as updatedAt',
          'user_mission.progress as progress',
          'mission.id as missionId',
        ])
        .where((eb) =>
          eb.and([
            eb('userId', '=', userId),
            eb('mission.title', '=', missionTitle),
          ]),
        )
        .executeTakeFirst();

      if (!userMission) {
        throw new HttpException(
          'userMission cannot be found',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      const now = timeUtil.getUnixTimestamp();
      const lastUpdated = userMission.updatedAt;

      const isNewDay = timeUtil.isNewDayAfterFinishedAt(lastUpdated);
      const missedDay = timeUtil.isDaySkipped(lastUpdated);

      if (isNewDay) {
        const newProgress = missedDay ? 1 : userMission.progress + 1;

        await trx
          .updateTable('user_mission')
          .set({
            progress: newProgress,
            updatedAt: now,
          })
          .where('id', '=', userMission.id)
          .returningAll()
          .execute();
      }
    });
  }

  async updateDailyMissionProgress({
    userId,
    missionTitle,
  }: {
    userId: string;
    missionTitle: string;
  }) {
    await this.db.transaction().execute(async (trx) => {
      const userMission = await trx
        .selectFrom('user_mission')
        .leftJoin('mission', 'mission.id', 'user_mission.missionId')
        .selectAll()
        .select(['user_mission.id as id', 'mission.id as missionId'])
        .where((eb) =>
          eb.and([
            eb('userId', '=', userId),
            eb('mission.title', '=', missionTitle),
          ]),
        )
        .executeTakeFirst();
      console.log('Hi!');
      console.log('userMission:', userMission);
      if (
        userMission &&
        timeUtil.isNewDayAfterFinishedAt(userMission?.updatedAt)
      ) {
        console.log('Hello?');
        await trx
          .updateTable('user_mission')
          .set({
            progress: userMission.progress + 1,
            updatedAt: timeUtil.getUnixTimestamp(),
          })
          .where('id', '=', userMission.id)
          .returningAll()
          .execute();
      }
    });
  }

  async updateInfiniteMissionProgress({
    userId,
    missionTitle,
  }: {
    userId: string;
    missionTitle: string;
  }) {
    await this.db.transaction().execute(async (trx) => {
      const userMission = await trx
        .selectFrom('user_mission')
        .leftJoin('mission', 'mission.id', 'user_mission.missionId')
        .selectAll()
        .select(['user_mission.id as id', 'mission.id as missionId'])
        .where((eb) =>
          eb.and([
            eb('userId', '=', userId),
            eb('mission.title', '=', missionTitle),
          ]),
        )
        .executeTakeFirst();
      if (userMission) {
        await trx
          .updateTable('user_mission')
          .set({
            progress: userMission.progress + 1,
            updatedAt: timeUtil.getUnixTimestamp(),
          })
          .where('id', '=', userMission.id)
          .returningAll()
          .execute();
      }
    });
  }

  async updateOneOffMissionProgress({
    userId,
    missionTitle,
  }: {
    userId: string;
    missionTitle: string;
  }) {
    await this.db.transaction().execute(async (trx) => {
      const userMission = await trx
        .selectFrom('user_mission')
        .leftJoin('mission', 'mission.id', 'user_mission.missionId')
        .selectAll()
        .select(['user_mission.id as id', 'mission.id as missionId'])
        .where((eb) =>
          eb.and([
            eb('userId', '=', userId),
            eb('mission.title', '=', missionTitle),
          ]),
        )
        .executeTakeFirst();
      if (userMission) {
        await trx
          .updateTable('user_mission')
          .set({
            progress: userMission.progress + 1,
            updatedAt: timeUtil.getUnixTimestamp(),
          })
          .where('id', '=', userMission.id)
          .returningAll()
          .execute();
      }
    });
  }

  async uploadAnswer({
    userId,
    dto,
  }: {
    userId: string;
    dto: UploadAnswerDto;
  }) {
    await this.db
      .insertInto('user_answer')
      .values({
        questionId: dto.newsQuestionId,
        userId: userId,
        clusterId: dto.clusterId,
        selectedOption: dto.selected,
        answeredAt: timeUtil.getUnixTimestamp(),
      })
      .execute();
    const result = await this.db
      .selectFrom('news_questions')
      .selectAll()
      .where('id', '=', dto.newsQuestionId)
      .executeTakeFirst();
    const answer = result?.answer;
    return answer === dto.selected;
  }

  async updateAchievementProgress({
    userId,
    achievementId,
  }: {
    userId: string;
    achievementId: number;
  }) {
    await this.db
      .updateTable('user_achievement')
      .set((eb) => ({
        cumulative_num: eb('cumulative_num', '+', 1),
        max_num: eb('max_num', '+', 1),
      }))
      .where((eb) =>
        eb.and([
          eb('userId', '=', userId),
          eb('user_achievement.achievementId', '=', achievementId),
        ]),
      )
      .returningAll()
      .executeTakeFirst();
    const achievemnt = await this.db
      .selectFrom('user_achievement')
      .leftJoin(
        'achievement',
        'achievement.id',
        'user_achievement.achievementId',
      )
      .selectAll()
      .where((eb) =>
        eb.and([
          eb('userId', '=', userId),
          eb('user_achievement.achievementId', '=', achievementId),
        ]),
      )
      .executeTakeFirst();
    if (
      achievemnt?.cumulative_num === achievemnt?.bronze &&
      achievemnt?.cumulative_num === achievemnt?.silver &&
      achievemnt?.cumulative_num === achievemnt?.gold &&
      achievemnt?.cumulative_num === achievemnt?.diamond &&
      achievemnt?.cumulative_num === achievemnt?.platinum
    ) {
      return true;
    }
    return false;
  }

  async updateLoginStreakAchievementProgress({
    userId,
    achievementId,
  }: {
    userId: string;
    achievementId: number;
  }) {
    return await this.db.transaction().execute(async (trx) => {
      const userAchievement = await trx
        .selectFrom('user_achievement')
        .selectAll()
        .where((eb) =>
          eb.and([
            eb('user_achievement.achievementId', '=', achievementId),
            eb('user_achievement.userId', '=', userId),
          ]),
        )
        .executeTakeFirst();
      if (!userAchievement) {
        throw new HttpException(
          'userAchievement cannot be found',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const now = timeUtil.getUnixTimestamp();
      const lastUpdated = userAchievement.updatedAt;

      if (!lastUpdated) {
        await trx
          .updateTable('user_achievement')
          .set({
            cumulative_num: 1,
            max_num: 1,
            updatedAt: now,
          })
          .where((eb) =>
            eb.and([
              eb('user_achievement.achievementId', '=', achievementId),
              eb('userId', '=', userId),
            ]),
          )
          .returningAll()
          .execute();
        return;
      }
      const isNewDay = timeUtil.isNewDayAfterFinishedAt(lastUpdated);
      const missedDay = timeUtil.isDaySkipped(lastUpdated);

      if (isNewDay) {
        const cumulative_num = missedDay
          ? 1
          : userAchievement.cumulative_num + 1;
        const max_num = Math.max(userAchievement.max_num, cumulative_num);
        await trx
          .updateTable('user_achievement')
          .set({
            cumulative_num: cumulative_num,
            max_num: max_num,
            updatedAt: now,
          })
          .where((eb) =>
            eb.and([
              eb('user_achievement.achievementId', '=', achievementId),
              eb('user_achievement.userId', '=', userId),
            ]),
          )
          .returningAll()
          .execute();
      }
    });
  }

  async reapRewards({
    userId,
    userMissionId,
  }: {
    userId: string;
    userMissionId: string;
  }) {
    return await this.db.transaction().execute(async (trx) => {
      const userMission = await trx
        .selectFrom('user_mission')
        .leftJoin('mission', 'mission.id', 'user_mission.missionId')
        .select([
          'user_mission.id as userMissionId',
          'user_mission.progress',
          'user_mission.completed',
          'mission.reward',
          'mission.requirement',
          'mission.type',
        ])
        .where('user_mission.id', '=', userMissionId)
        .executeTakeFirst();
      if (!userMission) {
        throw new HttpException(
          'userMission does not exist',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const requirement = userMission?.requirement;
      const progress = userMission?.progress;
      if (!requirement) {
        throw new HttpException(
          'userMission.requirement does not exist',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      if (progress < requirement) {
        return {
          reward: 0,
        };
      }
      if (progress >= requirement) {
        const completed = userMission.type === 'ONE_TIME' ? true : false;
        await trx
          .updateTable('user_mission')
          .set({ progress: progress - requirement, completed: completed })
          .where('user_mission.id', '=', userMissionId)
          .execute();
        await trx
          .updateTable('user')
          .set((eb) => ({
            num_of_brains: eb('num_of_brains', '+', userMission.reward),
          }))
          .where('user.id', '=', userId)
          .execute();
      }
    });
  }

  async updateReadPoliticallyDifferentArticlesMissionAndAchievement({
    userId,
    clusterId,
    userQuestionId,
  }: {
    userId: string;
    clusterId: string;
    userQuestionId: string;
  }) {
    const db = this.db; // assuming `this.db` is a Kysely instance

    // Step 1: Get all political_standing values for the user's answers in the same cluster
    const standings = await db
      .selectFrom('user_answer')
      .innerJoin(
        'news_questions',
        'news_questions.id',
        'user_answer.questionId',
      )
      .innerJoin('news', 'news.id', 'news_questions.newsId')
      .innerJoin('news_media', (join) =>
        join.on(sql`news_media.name`, '=', sql`news.media_name::text`),
      )
      .select(['news_media.political_standing'])
      .where('user_answer.userId', '=', userId)
      .where('user_answer.clusterId', '=', clusterId)
      .execute();

    // Step 2: Map to political camps
    const camps = new Set<string>();
    for (const row of standings) {
      const standing = row.political_standing;
      if (standing === null || standing === undefined) continue;

      if (standing < 0.4) {
        camps.add('blue');
      } else if (standing >= 0.4 && standing <= 0.6) {
        camps.add('grey');
      } else if (standing > 0.6) {
        camps.add('green');
      }
    }
    console.log('camps:', camps);

    // Step 3: Determine if user has read from >= 2 different camps
    const hasReadFromDifferentCamps = camps.size >= 2;
    // 👇 You can now use this boolean to update a mission or achievement
    console.log('hasReadFromDifferentCamps:', hasReadFromDifferentCamps);

    if (hasReadFromDifferentCamps) {
      await this.db
        .updateTable('user_mission')
        .set((eb) => ({
          progress: eb('progress', '+', 1),
        }))
        .where((eb) =>
          eb.and([
            eb('user_mission.userId', '=', userId),
            eb('user_mission.missionId', '=', 10),
          ]),
        )
        .execute();

      await this.db
        .updateTable('user_achievement')
        .set((eb) => ({
          cumulative_num: eb('cumulative_num', '+', 1),
          max_num: eb('max_num', '+', 1),
        }))
        .where((eb) =>
          eb.and([
            eb('user_achievement.userId', '=', userId),
            eb('user_achievement.achievementId', '=', 3),
          ]),
        )
        .execute();
    }
  }
}
