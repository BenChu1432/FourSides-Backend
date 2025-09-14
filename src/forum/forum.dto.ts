import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CommentType, VoteType } from 'src/kysely/types';

export class CommentDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  chosenNewsMediaId: string;

  @IsNotEmpty()
  @IsString()
  clusterId: string;
}

export class ReplyDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  parentId: string;

  @IsNotEmpty()
  @IsString()
  clusterId: string;

  @IsNotEmpty()
  type: CommentType;

  @IsNotEmpty()
  @IsString()
  replyIdToReplyTo: string;
}

export class LikeCommentDto {
  @IsNotEmpty()
  @IsString()
  commentId: string;
}

export class DislikeCommentDto {
  @IsNotEmpty()
  @IsString()
  commentId: string;
}
