import { Injectable } from '@nestjs/common';
import { KyselyService } from 'src/kysely/kysely.service';
import {
  LogFinishedScrapeJobDto,
  LogScrapeFailureDto,
  LogStartScrapeJobDto,
} from './logging.dto';
import timeUtils from '../../utils/timeUtil';

@Injectable()
export class LoggingService {
  constructor(private readonly kyselyService: KyselyService) {}

  private get db() {
    return this.kyselyService.connection;
  }

  async logStartScrapeJob(data: LogStartScrapeJobDto) {
    return await this.db
      .insertInto('scrape_jobs')
      .values({
        ...data,
      })
      .returningAll()
      .executeTakeFirst();
  }

  async updateScrapeJobFinished(data: LogFinishedScrapeJobDto) {
    return await this.db
      .updateTable('scrape_jobs')
      .set({
        end_time: data.end_time,
      })
      .where('id', '=', data.job_id)
      .returningAll()
      .executeTakeFirst();
  }

  async logScrapeFailure(data: LogScrapeFailureDto) {
    return await this.db
      .insertInto('scrape_failures')
      .values({
        ...data,
        timestamp: timeUtils.getUnixTimestamp(),
      })
      .returningAll()
      .executeTakeFirst();
  }
}
