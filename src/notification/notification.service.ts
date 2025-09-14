import { Injectable, Logger } from '@nestjs/common';
import { Kysely } from 'kysely';
import { Expo, ExpoPushMessage } from 'expo-server-sdk';
import { v4 as uuidv4 } from 'uuid';
import { KyselyService } from 'src/kysely/kysely.service';

@Injectable()
export class NotificationService {
  private readonly expo = new Expo();
  private readonly logger = new Logger(NotificationService.name);

  constructor(private readonly kyselyService: KyselyService) {}
  private get db() {
    return this.kyselyService.connection;
  }

  async getNotifications({
    userId,
    offset,
  }: {
    userId: string;
    offset: number;
  }) {
    return await this.db
      .selectFrom('notification')
      .leftJoin('user as sender', 'sender.id', 'notification.senderId')
      .select([
        'notification.id',
        'notification.imageUrl',
        'notification.createdAt',
        'notification.isRead',
        'notification.newsId',
        'notification.commentId',
        'notification.senderId',
        'notification.content',
        'notification.crossAnalysisId',
        'notification.type',
        'sender.displayName',
        'sender.avatarUrl',
      ])
      .where('notification.userId', '=', userId)
      .orderBy('notification.createdAt', 'desc')
      .offset(offset)
      .limit(15)
      .execute();
  }

  async sendAndStoreNotification(params: {
    recipientId: string;
    senderId?: string;
    type:
      | 'RECOMMENDATION'
      | 'COMMENT_REPLY'
      | 'MISINFORMATION_ALERT'
      | 'COMMENT_LIKED'
      | 'COMMENT_DISLIKED'
      | 'CROSS_ARTICLES_ANALYSIS';
    title: string;
    content: string;
    imageUrl?: string;
    newsId?: string;
    commentId?: string;
    clusterId?: string;
    crossAnalysisId?: string;
    data?: any;
  }): Promise<void> {
    const {
      recipientId,
      senderId,
      type,
      title,
      content,
      imageUrl,
      newsId,
      commentId,
      clusterId,
      crossAnalysisId,
      data,
    } = params;
    console.log('params:', params);
    const createdAt = Math.floor(Date.now() / 1000);

    // 1. Get token
    const userSettings = await this.db
      .selectFrom('user_app_setting_preference')
      .select(['user_app_setting_preference.pushNotificationToken'])
      .where('user_app_setting_preference.userId', '=', recipientId)
      .executeTakeFirst();
    const token = userSettings?.pushNotificationToken;
    this.logger.debug(`Token for user ${recipientId}: ${token}`);
    if (token && Expo.isExpoPushToken(token)) {
      const message: ExpoPushMessage = {
        to: token,
        sound: 'default',
        title: title ?? '通知',
        body: content,
        data,
      };
      console.log('trying to send a push notification!');
      try {
        const tickets = await this.expo.sendPushNotificationsAsync([message]);
        const ticket = tickets[0];

        if (ticket.status === 'error') {
          this.logger.error(`Expo error: ${ticket.message}`);
        } else {
          this.logger.log(`Push sent: ${JSON.stringify(ticket)}`);
        }
      } catch (err) {
        this.logger.error(`Failed to send push`, err);
      }
    } else {
      this.logger.warn(`No valid token for user ${recipientId}, skipping push`);
    }

    // 2. Insert into DB
    await this.db
      .insertInto('notification')
      .values({
        userId: recipientId,
        senderId: senderId ?? null,
        type,
        title,
        content,
        imageUrl: imageUrl ?? null,
        newsId: newsId ?? null,
        commentId: commentId ?? null,
        clusterId: clusterId ?? null,
        crossAnalysisId: crossAnalysisId ?? null,
        createdAt: createdAt,
        isRead: false,
      })
      .execute();
  }
}
