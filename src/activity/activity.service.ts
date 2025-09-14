import { Injectable } from '@nestjs/common';
import { GameService } from 'src/game/game.service';
import { KyselyService } from 'src/kysely/kysely.service';
import { ActivityType } from 'src/kysely/types';
import timeUtil from 'utils/timeUtil';

// activity/activity.service.ts
@Injectable()
export class ActivityService {
  constructor(
    private readonly kyselyService: KyselyService,
    private readonly gameService: GameService,
  ) {}
  private get db() {
    return this.kyselyService.connection;
  }

  async getLastLoginActivity(
    userId: string,
  ): Promise<{ createdAt: number } | null> {
    const result = await this.db
      .selectFrom('user_activity')
      .select(['createdAt'])
      .where('userId', '=', userId)
      .where('type', '=', 'LOGIN' as ActivityType)
      .orderBy('createdAt', 'desc')
      .limit(1)
      .executeTakeFirst();
    return result ?? null;
  }

  async logActivity(userId: string, type: ActivityType) {
    const timestamp = timeUtil.getUnixTimestamp();

    await this.db.transaction().execute(async (trx) => {
      // Insert activity
      await trx
        .insertInto('user_activity')
        .values({ userId, type, createdAt: timestamp })
        .execute();

      // Update counter
      const existing = await trx
        .selectFrom('user_activity_counter')
        .selectAll()
        .where('userId', '=', userId)
        .where('type', '=', type)
        .executeTakeFirst();

      if (existing) {
        await trx
          .updateTable('user_activity_counter')
          .set({
            count: existing.count + 1,
            updatedAt: timestamp,
          })
          .where('id', '=', existing.id)
          .execute();
      } else {
        await trx
          .insertInto('user_activity_counter')
          .values({
            userId,
            type,
            count: 1,
            createdAt: timestamp,
            updatedAt: timestamp,
          })
          .execute();
      }
    });
  }
}
