import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { validate as isUUID } from 'uuid';

export class UploadAnswerDto {
  @IsNotEmpty()
  @IsString()
  clusterId: string;

  @IsNotEmpty()
  @IsString()
  newsQuestionId: string;

  @IsNotEmpty()
  @IsString()
  selected: string;
}

export class ReapRewardsDto {
  @IsNotEmpty()
  @IsString()
  userMissionId: string;
}
