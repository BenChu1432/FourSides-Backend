import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { VoteType } from 'src/kysely/types';

export class VoteNewsDto {
  @IsNotEmpty()
  vote: VoteType;

  @IsNotEmpty()
  clusterId: string;
}

export class SearchDto {
  @IsNotEmpty()
  input: VoteType;
}

export class GetAuthorInfoDto {
  @IsNotEmpty()
  authorId: string;
}

export class UnlockClusterDto {
  @IsNotEmpty()
  clusterId: string;

  @IsOptional()
  @IsString()
  newsId: string;
}

export class FollowJournalistDto {
  @IsNotEmpty()
  authorId: string;
}

export class GetTagBasedArticlesForMediaDto {
  @IsNotEmpty()
  @IsString()
  tag: string;

  @IsNotEmpty()
  @IsString()
  tagType: string;
  // reporting_style, journalistic_merits, journalistic_demerits

  @IsNotEmpty()
  @IsString()
  mediaId: string;

  @IsNotEmpty()
  @IsNumber()
  offset: number;
}

export class GetTagBasedArticlesForAuthorDto {
  @IsNotEmpty()
  @IsString()
  tag: string;

  @IsNotEmpty()
  @IsString()
  tagType: string;
  // reporting_style, journalistic_merits, journalistic_demerits

  @IsNotEmpty()
  @IsString()
  authorId: string;

  @IsNotEmpty()
  @IsNumber()
  offset: number;
}

export class PostCrossAnalysisRequestDto {
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @IsString({ each: true })
  ids: string[];
}

export class LikeArticleDto {
  @IsNotEmpty()
  @IsString()
  newsId: string;
}

export class DislikeArticleDto {
  @IsNotEmpty()
  @IsString()
  newsId: string;
}

export class PostAddUserReadSpecificNewsArticleDto {
  @IsNotEmpty()
  @IsString()
  newsId: string;
}
