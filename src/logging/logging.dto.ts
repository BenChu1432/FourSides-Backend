import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { MediaNameEnum, ErrorTypeEnum } from 'src/kysely/types';

export class LogStartScrapeJobDto {
  @IsNotEmpty()
  media_name: MediaNameEnum;

  @IsNumber()
  @IsNotEmpty()
  start_time: number;

  @IsString()
  @IsNotEmpty()
  machine_id: string;
}

export class LogFinishedScrapeJobDto {
  @IsNotEmpty()
  @IsNumber()
  job_id: number;

  @IsNotEmpty()
  @IsNumber()
  end_time: number;
}

export class LogScrapeFailureDto {
  @IsString()
  @IsNotEmpty()
  detail: string;

  @IsString()
  @IsNotEmpty()
  failure_type: ErrorTypeEnum;

  @IsNotEmpty()
  media_name: MediaNameEnum;

  @IsOptional()
  url: string[];
}
