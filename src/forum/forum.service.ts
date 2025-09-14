import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { KyselyService } from 'src/kysely/kysely.service';
import {
  CommentDto,
  DislikeCommentDto,
  LikeCommentDto,
  ReplyDto,
} from './forum.dto';
import timeUtil from 'utils/timeUtil';
import { sql } from 'kysely';
import { jsonObjectFrom } from 'kysely/helpers/postgres';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class ForumService {
  constructor(
    private readonly kyselyService: KyselyService,
    private readonly notificationService: NotificationService,
  ) {}
  private get db() {
    return this.kyselyService.connection;
  }

  async getComments({
    userId,
    clusterId,
    offset = 0,
  }: {
    userId: string;
    clusterId: string;
    offset: number;
  }) {
    const comments = await this.db
      .selectFrom('comment')
      .leftJoin('user', 'user.id', 'comment.userId')
      .leftJoin('cluster_vote', (join) =>
        join
          .onRef('cluster_vote.userId', '=', 'user.id')
          .onRef('cluster_vote.clusterId', '=', 'comment.clusterId'),
      )
      .leftJoin('news_media', 'news_media.id', 'comment.taggedNewsMediaId')
      .select([
        'comment.id',
        'comment.userId',
        'comment.clusterId',
        'comment.likeNum',
        'comment.dislikeNum',
        'comment.parentId',
        'comment.replyCount',
        'comment.createdAt',
        'comment.text',
        'comment.type',
        'comment.taggedNewsMediaId',
        'user.avatarUrl',
        'user.displayName',
        'cluster_vote.vote',
        'news_media.chinese_name as newsMedia',
      ])
      .where((eb) =>
        eb.and([
          eb('comment.clusterId', '=', clusterId),
          eb('comment.parentId', 'is', null),
        ]),
      )
      .orderBy(['comment.likeNum desc', 'comment.createdAt desc'])
      .limit(10)
      .offset(offset)
      .execute();

    const replies = await this.db
      .selectFrom('comment as reply')
      .leftJoin('user as reply_user', 'reply_user.id', 'reply.userId')
      .leftJoin('comment as replyOfReply', 'replyOfReply.id', 'reply.replyTo')
      .leftJoin(
        'user as replierOfReply',
        'replierOfReply.id',
        'replyOfReply.userId',
      )
      .leftJoin('cluster_vote as reply_vote', (join) =>
        join
          .onRef('reply_vote.userId', '=', 'reply_user.id')
          .onRef('reply_vote.clusterId', '=', 'reply.clusterId'),
      )
      .select([
        'reply.id',
        'reply.userId',
        'reply.clusterId',
        'reply.likeNum',
        'reply.dislikeNum',
        'reply.parentId',
        'reply.createdAt',
        'reply.text',
        'reply.type',
        'reply_user.displayName',
        'reply_user.avatarUrl',
        'reply_vote.vote',
        'replierOfReply.id as recipientId',
        'replierOfReply.displayName as recipientName',
      ])
      .where((eb) =>
        eb.and([
          eb('reply.clusterId', '=', clusterId),
          eb('reply.parentId', 'is not', null),
        ]),
      )
      .orderBy(['reply.createdAt asc'])
      .execute();
    for (let i = 0; i < replies.length; i++) {
      console.log('replies:', JSON.stringify(replies[i]));
    }
    //   reactions
    const commentIds = comments.map((comment) => comment.id);
    const replyIds = replies.map((reply) => reply.id);
    const allCommentIds = commentIds.concat(replyIds);

    let reactions: {
      id: string;
      userId: string;
      commentId: string;
      type: 'LIKE' | 'DISLIKE';
      createdAt: number;
      parentId: string | null;
    }[] = [];

    if (allCommentIds.length > 0) {
      reactions = await this.db
        .selectFrom('comment_reaction')
        .leftJoin('comment', 'comment.id', 'comment_reaction.commentId')
        .select([
          'comment_reaction.id',
          'comment_reaction.userId',
          'comment_reaction.commentId',
          'comment_reaction.type',
          'comment_reaction.createdAt',
          'comment.parentId',
        ])
        .where('comment_reaction.commentId', 'in', allCommentIds)
        .execute();
    }

    return {
      comments,
      replies,
      commentReactions: reactions,
    };
  }

  async comment({ userId, dto }: { userId: string; dto: CommentDto }) {
    console.log('comment!');
    const unixTimestamp = timeUtil.getUnixTimestamp();
    return await this.db.transaction().execute(async (trx) => {
      // Step 1: Insert a comment
      const comment = await trx
        .insertInto('comment')
        .values({
          userId: userId,
          clusterId: dto.clusterId,
          text: dto.text.trim(),
          taggedNewsMediaId: dto.chosenNewsMediaId,
          createdAt: unixTimestamp,
        })
        .returningAll()
        .executeTakeFirst();

      if (!comment) {
        throw new HttpException(
          'Cannot insert a comment',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      return trx
        .selectFrom('comment')
        .leftJoin('user', 'user.id', 'comment.userId')
        .leftJoin('cluster_vote', (join) =>
          join
            .onRef('cluster_vote.userId', '=', 'user.id')
            .onRef('cluster_vote.clusterId', '=', 'comment.clusterId'),
        )
        .leftJoin('news_media', 'news_media.id', 'comment.taggedNewsMediaId')
        .select([
          'comment.id',
          'comment.userId',
          'comment.clusterId',
          'comment.likeNum',
          'comment.dislikeNum',
          'comment.parentId',
          'comment.replyCount',
          'comment.createdAt',
          'comment.text',
          'user.avatarUrl',
          'user.displayName',
          'cluster_vote.vote',
          'news_media.chinese_name as newsMedia',
        ])
        .select((eb) =>
          this.db
            .selectFrom('comment')
            .leftJoin(
              'news_media',
              'news_media.id',
              'comment.taggedNewsMediaId',
            )
            .select('news_media.chinese_name')
            .where('comment.id', '=', comment?.id)
            .as('news_media'),
        )
        .where('comment.id', '=', comment?.id)
        .executeTakeFirst();
    });
  }

  async reply({ userId, dto }: { userId: string; dto: ReplyDto }) {
    console.log('reply!');
    const { parentId, clusterId, replyIdToReplyTo, text } = dto;
    const unixTimestamp = timeUtil.getUnixTimestamp();
    const response = await this.db.transaction().execute(async (trx) => {
      const reply = await trx
        .insertInto('comment')
        .values({
          text: text.trim(),
          userId: userId,
          parentId: parentId,
          clusterId: clusterId,
          replyTo: replyIdToReplyTo,
          createdAt: unixTimestamp,
          type: dto.type,
        })
        .returningAll()
        .executeTakeFirst();
      if (!reply) {
        throw new HttpException(
          'Reply is undefined',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return await trx
        .selectFrom('comment')
        .leftJoin('cluster', 'cluster.id', 'comment.clusterId')
        .leftJoin('user', 'user.id', 'comment.userId')
        .leftJoin(
          'comment as replyOfReply',
          'replyOfReply.id',
          'comment.replyTo',
        )
        .leftJoin(
          'user as replierOfReply',
          'replierOfReply.id',
          'replyOfReply.userId',
        )
        .select([
          'cluster.cluster_name',
          'comment.id',
          'comment.likeNum',
          'comment.dislikeNum',
          'comment.createdAt',
          'comment.clusterId',
          'comment.parentId',
          'comment.replyCount',
          'comment.text',
          'comment.userId',
          'comment.type',
          'comment.replyTo',
          'user.displayName',
          'user.avatarUrl',
          'replierOfReply.id as recipientId',
          'replierOfReply.displayName as recipientName',
        ])
        .where('comment.id', '=', reply?.id)
        .executeTakeFirst();
    });
    // send notification
    if (
      response?.replyTo &&
      response?.recipientId &&
      response?.text &&
      response?.id &&
      response?.cluster_name &&
      response?.recipientId !== response.userId
    ) {
      const commentGettingRepliedTo = await this.db
        .selectFrom('comment')
        .select('comment.text')
        .where('comment.id', '=', response?.replyTo)
        .executeTakeFirst();

      await this.notificationService.sendAndStoreNotification({
        recipientId: response.recipientId,
        senderId: userId,
        type: 'COMMENT_REPLY',
        title: response.cluster_name,
        content: `@${response.displayName} 回應了你的評論: ${commentGettingRepliedTo?.text}`,
        commentId: response.id,
      });
    }

    return response;
  }

  async like({ userId, dto }: { userId: string; dto: LikeCommentDto }) {
    const { commentId } = dto;

    return await this.db.transaction().execute(async (trx) => {
      // 1) Fetch current reaction (if any)
      const existing = await trx
        .selectFrom('comment_reaction')
        .select(['type'])
        .where('userId', '=', userId)
        .where('commentId', '=', commentId)
        .executeTakeFirst();

      if (!existing) {
        // No reaction -> create LIKE, increment likeNum
        const unixTimestamp = timeUtil.getUnixTimestamp();
        await trx
          .insertInto('comment_reaction')
          .values({
            userId: userId,
            commentId: commentId,
            type: 'LIKE',
            createdAt: unixTimestamp,
          })
          .execute();
        const liker = await trx
          .selectFrom('user')
          .selectAll()
          .where('user.id', '=', userId)
          .executeTakeFirst();

        const likedComment = await trx
          .selectFrom('comment')
          .leftJoin('user as commenter', 'commenter.id', 'comment.userId')
          .leftJoin('cluster', 'cluster.id', 'comment.clusterId')
          .where('comment.id', '=', commentId)
          .select([
            'comment.id',
            'comment.text',
            'commenter.id as userId',
            'cluster.cluster_name',
          ])
          .executeTakeFirst();

        await trx
          .updateTable('comment')
          .set((eb) => ({
            likeNum: eb('likeNum', '+', 1),
          }))
          .where('id', '=', commentId)
          .execute();

        if (
          liker?.displayName &&
          likedComment?.cluster_name &&
          likedComment?.userId &&
          likedComment?.userId !== userId &&
          !existing
        ) {
          await this.notificationService.sendAndStoreNotification({
            recipientId: likedComment.userId,
            senderId: userId,
            type: 'COMMENT_LIKED',
            title: likedComment.cluster_name,
            content: `@${liker.displayName} 讚好了你的評論: ${likedComment.text}`,
            commentId: likedComment.id,
          });
        }

        return { status: 'liked', changed: true };
      }

      if (existing.type === 'LIKE') {
        // Already liked -> unlike (delete), decrement likeNum
        await trx
          .deleteFrom('comment_reaction')
          .where('userId', '=', userId)
          .where('commentId', '=', commentId)
          .execute();

        await trx
          .updateTable('comment')
          .set((eb) => ({
            likeNum: eb('likeNum', '-', 1),
          }))
          .where('id', '=', commentId)
          .execute();

        return { status: 'unliked', changed: true };
      }

      // existing.type === 'DISLIKE' -> switch to LIKE
      await trx
        .updateTable('comment_reaction')
        .set({ type: 'LIKE' })
        .where('userId', '=', userId)
        .where('commentId', '=', commentId)
        .execute();

      await trx
        .updateTable('comment')
        .set((eb) => ({
          dislikeNum: eb('dislikeNum', '-', 1),
          likeNum: eb('likeNum', '+', 1),
        }))
        .where('id', '=', commentId)
        .execute();

      return {
        status: 'liked',
        changed: true,
        switchedFrom: 'DISLIKE' as const,
      };
    });
  }

  async dislike({ userId, dto }: { userId: string; dto: DislikeCommentDto }) {
    const { commentId } = dto;

    return await this.db.transaction().execute(async (trx) => {
      const existing = await trx
        .selectFrom('comment_reaction')
        .select(['type'])
        .where('comment_reaction.userId', '=', userId)
        .where('commentId', '=', commentId)
        .executeTakeFirst();

      if (!existing) {
        const unixTimestamp = timeUtil.getUnixTimestamp();
        await trx
          .insertInto('comment_reaction')
          .values({
            userId: userId,
            commentId: commentId,
            type: 'DISLIKE',
            createdAt: unixTimestamp,
          })
          .execute();

        await trx
          .updateTable('comment')
          .set((eb) => ({
            dislikeNum: eb('dislikeNum', '+', 1),
          }))
          .where('id', '=', commentId)
          .execute();

        const dislikedComment = await trx
          .selectFrom('comment')
          .leftJoin('user as commenter', 'commenter.id', 'comment.userId')
          .leftJoin('cluster', 'cluster.id', 'comment.clusterId')
          .where('comment.id', '=', commentId)
          .select([
            'comment.id',
            'comment.text',
            'commenter.id as userId',
            'cluster.cluster_name',
          ])
          .executeTakeFirst();

        const disliker = await trx
          .selectFrom('user')
          .selectAll()
          .where('user.id', '=', userId)
          .executeTakeFirst();

        if (
          disliker?.displayName &&
          dislikedComment?.cluster_name &&
          dislikedComment?.userId &&
          dislikedComment?.userId !== userId &&
          !existing
        ) {
          await this.notificationService.sendAndStoreNotification({
            recipientId: dislikedComment.userId,
            senderId: userId,
            type: 'COMMENT_DISLIKED',
            title: dislikedComment.cluster_name,
            content: `@${disliker.displayName} 踩了你的評論: ${dislikedComment.text}`,
            commentId: dislikedComment.id,
          });
        }
        return { status: 'disliked', changed: true };
      }

      if (existing.type === 'DISLIKE') {
        await trx
          .deleteFrom('comment_reaction')
          .where('userId', '=', userId)
          .where('commentId', '=', commentId)
          .execute();

        await trx
          .updateTable('comment')
          .set((eb) => ({
            dislikeNum: eb('dislikeNum', '-', 1),
          }))
          .where('id', '=', commentId)
          .execute();

        return { status: 'undisliked', changed: true };
      }

      // Switch LIKE -> DISLIKE
      await trx
        .updateTable('comment_reaction')
        .set({ type: 'DISLIKE' })
        .where('userId', '=', userId)
        .where('commentId', '=', commentId)
        .execute();

      await trx
        .updateTable('comment')
        .set((eb) => ({
          likeNum: eb('likeNum', '-', 1),
          dislikeNum: eb('dislikeNum', '+', 1),
        }))
        .where('id', '=', commentId)
        .execute();

      return {
        status: 'disliked',
        changed: true,
        switchedFrom: 'LIKE' as const,
      };
    });
  }
}
