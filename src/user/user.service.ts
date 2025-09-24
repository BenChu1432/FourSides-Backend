import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  RegisterDto,
  UpdateMembershipSettings,
  UpdatePushNotificationTokenDto,
  UpdateUserExtraInfoDto,
} from './user.dto';
import { Insertable, Kysely } from 'kysely';
import {
  AuthProvider,
  DB,
  Identity,
  InterestingRegionOrCountry,
  InterestingTopic,
  PoliticalStance,
  User,
  UserAuth,
} from '../kysely/types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { KyselyService } from 'src/kysely/kysely.service';
import timeUntils from '../../utils/timeUtil';

@Injectable()
export class UserService {
  constructor(private readonly kyselyService: KyselyService) {}
  private get db() {
    return this.kyselyService.connection;
  }

  async findByEmail(email: string) {
    return this.db
      .selectFrom('user')
      .leftJoin('user_auth', 'user_auth.userId', 'user.id')
      .leftJoin(
        'user_app_setting_preference',
        'user_app_setting_preference.userId',
        'user.id',
      )
      .selectAll()
      .select('user.id as id')
      .select('user_auth.id as authId')
      .where('email', '=', email)
      .executeTakeFirst();
  }

  async findByProviderId(providerId: string) {
    const user = await this.db
      .selectFrom('user')
      .leftJoin('user_auth', 'user_auth.userId', 'user.id')
      .leftJoin(
        'user_app_setting_preference',
        'user_app_setting_preference.userId',
        'user.id',
      )
      .selectAll()
      .select('user.id as id')
      .select('user_auth.id as authId')
      .where('providerId', '=', providerId)
      .executeTakeFirst();

    return user;
  }

  async checkIfEmailAuth(email: string) {
    const user = await this.db
      .selectFrom('user')
      .leftJoin('user_auth', 'user_auth.userId', 'user.id')
      .selectAll()
      .select('user.id as id')
      .select('user_auth.id as authId')
      .where('email', '=', email)
      .executeTakeFirst();
    return user?.authProvider === AuthProvider.EMAIL;
  }

  async findTokenByEmail(email: string) {
    const user = await this.db
      .selectFrom('user')
      .leftJoin('user_auth', 'user_auth.userId', 'user.id')
      .selectAll()
      .select('user.id as id')
      .select('user_auth.id as authId')
      .where('email', '=', email)
      .executeTakeFirst();
    return user?.verificationToken;
  }

  async makeEmailVerified(email: string) {
    const updated = await this.db
      .updateTable('user_auth')
      .set({ emailVerified: true })
      .where('email', '=', email)
      .returning(['emailVerified']) // ✅ Return updated value
      .executeTakeFirst();

    return updated?.emailVerified;
  }

  async updatePushNotificationToken({
    userId,
    dto,
  }: {
    userId: string;
    dto: UpdatePushNotificationTokenDto;
  }) {
    console.log('dto.token:', dto.token);
    await this.db
      .updateTable('user_app_setting_preference')
      .set({ pushNotificationToken: dto.token })
      .where('userId', '=', userId)
      .executeTakeFirst();

    return;
  }

  async findIfEmailVerified(email: string) {
    const user = await this.db
      .selectFrom('user')
      .leftJoin('user_auth', 'user_auth.userId', 'user.id')
      .selectAll()
      .select('user.id as id')
      .select('user_auth.id as authId')
      .where('email', '=', email)
      .executeTakeFirst();
    return user?.emailVerified;
  }

  async updateRefreshToken({
    userId,
    authId,
    refreshToken,
  }: {
    userId: string;
    authId: string;
    refreshToken: string;
  }) {
    await this.db
      .updateTable('user_auth')
      .set({ refreshToken })
      .where('id', '=', authId)
      .execute();
    return await this.db
      .selectFrom('user')
      .leftJoin('user_auth', 'user_auth.userId', 'user.id')
      .selectAll()
      .select('user.id as id')
      .select('user_auth.id as authId')
      .where('user.id', '=', userId)
      .executeTakeFirst();
  }

  async create({
    email,
    password,
    authProvider,
    providerId,
    verificationToken,
    displayName,
    emailVerified,
    avatarUrl,
  }: {
    email?: string;
    password?: string;
    authProvider: AuthProvider;
    providerId?: string;
    verificationToken?: string;
    displayName?: string;
    emailVerified?: boolean;
    avatarUrl?: string;
  }) {
    const unixTimestamp = timeUntils.getUnixTimestamp();

    const result = await this.db.transaction().execute(async (trx) => {
      // Step 1: Insert user
      const insertedUser = await trx
        .insertInto('user')
        .values({
          displayName: displayName ?? null,
          createdAt: unixTimestamp,
          updatedAt: unixTimestamp,
          topicsInterestedIn: [],
          regionsInterestedIn: [],
          avatarUrl: avatarUrl ?? null,
        })
        .returningAll()
        .executeTakeFirstOrThrow();

      if (!insertedUser) {
        throw new HttpException(
          'Failed to insert user',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      console.log('insertedUser:', insertedUser);

      // Step 2: Insert user settings preference
      const settingsPreferenceToInsert = await trx
        .insertInto('user_app_setting_preference')
        .values({
          userId: insertedUser.id,
        })
        .execute();
      console.log('settingsPreferenceToInsert:', settingsPreferenceToInsert);
      if (!settingsPreferenceToInsert) {
        throw new HttpException(
          'Failed to insert setting preferences',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      // Step 3: Fetch user with joined preference
      const user = await trx
        .selectFrom('user')
        .leftJoin(
          'user_app_setting_preference',
          'user_app_setting_preference.userId',
          'user.id',
        )
        .selectAll()
        .select('user.id as id')
        .where('user.id', '=', insertedUser.id)
        .executeTakeFirst();

      if (!user) {
        throw new HttpException(
          'Failed to create user',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      // Step 4: Insert auth
      const userAuth = await trx
        .insertInto('user_auth')
        .values({
          userId: user.id,
          email: email ?? null,
          password: password ?? null,
          authProvider: authProvider || AuthProvider.EMAIL,
          providerId: providerId ?? null,
          emailVerified: emailVerified ?? false,
          verificationToken: verificationToken ?? null,
        })
        .returningAll()
        .executeTakeFirst();

      if (!userAuth) {
        throw new HttpException(
          'Failed to create user authentication credentials',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      // Step 5: Insert missions
      const missions = await trx.selectFrom('mission').selectAll().execute();
      if (!missions || missions.length === 0) {
        throw new HttpException(
          'No missions found to assign to user',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      const userMissionsToInsert = missions.map((mission) => ({
        userId: user.id,
        missionId: mission.id,
        progress: 0,
        completed: false,
        updatedAt: unixTimestamp,
        createdAt: unixTimestamp,
      }));

      if (userMissionsToInsert.length > 0) {
        await trx
          .insertInto('user_mission')
          .values(userMissionsToInsert)
          .execute();
      }

      // Step 6: Insert achievements
      const achievements = await trx
        .selectFrom('achievement')
        .selectAll()
        .execute();
      const userAchievementToInsert = achievements.map((achievement) => ({
        userId: user.id,
        cumulative_num: 0,
        max_num: 0,
        achievementId: achievement.id,
      }));

      if (userAchievementToInsert.length > 0) {
        await trx
          .insertInto('user_achievement')
          .values(userAchievementToInsert)
          .execute();
      }

      // Step 7: Inserting titles
      const titles = await trx
        .selectFrom('title')
        .select(['id', 'type'])
        .distinctOn('type')
        .execute();
      const timestamp = timeUntils.getUnixTimestamp();
      const userTitleProgressToInsert = titles.map((t) => ({
        userId: user.id,
        type: t.type,
        titleId: t.id,
        progress: 0,
        completed: false,
        createdAt: timestamp,
        updatedAt: timestamp,
      }));

      console.log('userTitleProgressToInsert:', userTitleProgressToInsert);
      if (userTitleProgressToInsert.length > 0) {
        await trx
          .insertInto('user_title_progress')
          .values(userTitleProgressToInsert)
          .execute();
      }

      // Final result to return from transaction
      return {
        ...user,
        ...userAuth,
        // ...userTitles,
        id: user.id,
        authId: userAuth.id,
      };
    });

    // Outside the transaction
    return result;
  }

  async updateUserExtraInfo({
    id,
    dto,
  }: {
    id: string;
    dto: UpdateUserExtraInfoDto;
  }) {
    console.log('dto:', dto);
    const result = await this.db
      .updateTable('user')
      .set({
        displayName: dto.name,
        topicsInterestedIn: dto.topics,
        regionsInterestedIn: dto.regions,
        politicalStance: dto.politicalStance,
        identity: dto.identity,
        onboardingNeeded: false,
      })
      .where('id', '=', id)
      .execute();
    console.log('result:', result);
    const updatedUser = await this.db
      .selectFrom('user')
      .select([
        'topicsInterestedIn',
        'regionsInterestedIn',
        'politicalStance',
        'identity',
        'onboardingNeeded',
      ])
      .where('id', '=', id)
      .executeTakeFirst();
    console.log('Updated user extra info:', updatedUser);
    return updatedUser;
  }

  async updateUserFavTopics({
    id,
    dto,
  }: {
    id: string;
    dto: { topics: InterestingTopic[] };
  }) {
    await this.db
      .updateTable('user')
      .set({
        topicsInterestedIn: dto.topics,
      })
      .where('id', '=', id)
      .execute();

    const updatedUser = await this.db
      .selectFrom('user')
      .select('topicsInterestedIn')
      .where('id', '=', id)
      .executeTakeFirst();

    return updatedUser;
  }

  async updateUserFavRegions({
    id,
    dto,
  }: {
    id: string;
    dto: { regionsInterestedIn: InterestingRegionOrCountry[] };
  }) {
    console.log('Updating user regions with ID:', id, 'and DTO:', dto);
    return await this.db
      .updateTable('user')
      .set({
        regionsInterestedIn: dto.regionsInterestedIn,
      })
      .where('id', '=', id)
      .returning('regionsInterestedIn')
      .executeTakeFirst();
  }

  async updateUserIdentity({
    id,
    dto,
  }: {
    id: string;
    dto: { identity: Identity };
  }) {
    await this.db
      .updateTable('user')
      .set({
        identity: dto.identity,
      })
      .where('id', '=', id)
      .execute();

    const updatedUser = await this.db
      .selectFrom('user')
      .select(['identity'])
      .where('id', '=', id)
      .executeTakeFirst();

    return updatedUser;
  }

  async updateUserPoliticalStance({
    id,
    dto,
  }: {
    id: string;
    dto: { politicalStance: PoliticalStance };
  }) {
    await this.db
      .updateTable('user')
      .set({
        politicalStance: dto.politicalStance,
      })
      .where('id', '=', id)
      .execute();

    const updatedUser = await this.db
      .selectFrom('user')
      .select(['politicalStance'])
      .where('id', '=', id)
      .executeTakeFirst();

    return updatedUser;
  }

  async updateUserTitle({ id, dto }: { id: string; dto: { titleId: number } }) {
    const title = await this.db
      .selectFrom('title')
      .select(['title.name', 'title.emoji'])
      .where('title.id', '=', dto.titleId)
      .executeTakeFirst();
    const chosenTitle = title?.emoji
      ? Array.from(title?.emoji)[0] + title?.name
      : '' + title?.name;

    await this.db
      .updateTable('user')
      .set({
        chosenTitle: chosenTitle,
      })
      .where('id', '=', id)
      .execute();

    const updatedUser = await this.db
      .selectFrom('user')
      .select(['displayName', 'chosenTitle'])
      .where('id', '=', id)
      .executeTakeFirst();

    return updatedUser;
  }

  async updateUserName({ id, dto }: { id: string; dto: { name: string } }) {
    await this.db
      .updateTable('user')
      .set({
        displayName: dto.name,
      })
      .where('id', '=', id)
      .execute();

    const updatedUser = await this.db
      .selectFrom('user')
      .select(['displayName'])
      .where('id', '=', id)
      .executeTakeFirst();

    return updatedUser;
  }

  async updateGameOn({ id, gameMode }: { id: string; gameMode: boolean }) {
    await this.db
      .updateTable('user_app_setting_preference')
      .set({ gameMode })
      .where('userId', '=', id)
      .execute();

    const updatedUser = await this.db
      .selectFrom('user_app_setting_preference')
      .select(['gameMode'])
      .where('userId', '=', id)
      .executeTakeFirst();

    return updatedUser;
  }

  async updateCanSendNotification({
    id,
    canSendNotification,
  }: {
    id: string;
    canSendNotification: boolean;
  }) {
    await this.db
      .updateTable('user_app_setting_preference')
      .set({
        canSendNotification,
      })
      .where('userId', '=', id)
      .execute();

    const updatedUser = await this.db
      .selectFrom('user_app_setting_preference')
      .select(['canSendNotification'])
      .where('userId', '=', id)
      .executeTakeFirst();

    return updatedUser;
  }

  async updateMembershipSettings({
    id,
    dto,
  }: {
    id: string;
    dto: UpdateMembershipSettings;
  }) {
    await this.db
      .updateTable('user_app_setting_preference')
      .set({
        seeReportingMerits: dto.seeReportingMerits,
        seeMisguidingTechniques: dto.seeMisguidingTechniques,
        seeReportingStyle: dto.seeReportingStyle,
        seeReportingIntention: dto.seeReportingIntention,
        removeSensationalHeadlines: dto.removeSensationalHeadlines,
        removeCopyPasteArticles: dto.removeCopyPasteArticles,
      })
      .where('userId', '=', id)
      .execute();

    const updatedSettings = await this.db
      .selectFrom('user_app_setting_preference')
      .select([
        'seeReportingMerits',
        'seeMisguidingTechniques',
        'seeReportingStyle',
        'seeReportingIntention',
        'removeSensationalHeadlines',
        'removeCopyPasteArticles',
      ])
      .where('userId', '=', id)
      .executeTakeFirst();

    return updatedSettings;
  }

  async updateProfilePic({ userId, url }: { userId: string; url: string }) {
    return await this.db
      .updateTable('user')
      .set({ avatarUrl: url })
      .where('id', '=', userId)
      .execute();
  }

  async getNumOfBrains({ userId }: { userId: string }) {
    return await this.db
      .selectFrom('user')
      .select('num_of_brains')
      .where('id', '=', userId)
      .executeTakeFirst();
  }

  async deductNumOfBrains({ userId }: { userId: string }) {
    return await this.db
      .updateTable('user')
      .set((eb) => ({ num_of_brains: eb('num_of_brains', '-', 4) }))
      .where('id', '=', userId)
      .execute();
  }

  async postStartAppSession({ userId }: { userId: string }) {
    return await this.db
      .insertInto('user_app_session')
      .values({
        userId: userId,
        startTime: timeUntils.getUnixTimestamp(),
      })
      .returningAll()
      .executeTakeFirst();
  }

  async updateEndAppSession({ userId }: { userId: string }) {
    return await this.db
      .updateTable('user_app_session')
      .set({
        endTime: timeUntils.getUnixTimestamp(),
      })
      .where('user_app_session.userId', '=', userId)
      .returningAll()
      .executeTakeFirst();
  }

  async getLastAppSession(userId: string) {
    const db = this.db; // assuming your Kysely instance is in `this.db`

    const lastSession = await db
      .selectFrom('user_app_session')
      .select(['id', 'startTime', 'endTime', 'userId'])
      .where('userId', '=', userId)
      .orderBy('startTime', 'desc')
      .limit(1)
      .executeTakeFirst();

    return lastSession ?? null;
  }
}
