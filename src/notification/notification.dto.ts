import { IsNotEmpty } from 'class-validator';
import { VoteType } from 'src/kysely/types';

export class NotificationDto {
  @IsNotEmpty()
  vote: VoteType;

  @IsNotEmpty()
  clusterId: string;
}
