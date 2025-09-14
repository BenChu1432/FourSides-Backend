import { Body, Controller, Patch, Post } from '@nestjs/common';
import { LogScrapeFailureDto, LogStartScrapeJobDto } from './logging.dto';
import { LoggingService } from './logging.service';

@Controller('logs')
export class LoggingController {
  constructor(private readonly loggingService: LoggingService) {}
  @Post('')
  async test(@Body() dto: LogStartScrapeJobDto) {
    return 'The system is up and running';
  }

  @Post('create/scrape-job')
  async logScrapeJob(@Body() dto: LogStartScrapeJobDto) {
    return await this.loggingService.logStartScrapeJob(dto);
  }

  @Patch('update/finished-scrape-job')
  async updateScrapeJobFinished(@Body() dto: LogStartScrapeJobDto) {
    return await this.loggingService.logStartScrapeJob(dto);
  }

  @Post('create/scrape-failure')
  async logScrapeFailure(@Body() dto: LogScrapeFailureDto) {
    return await this.loggingService.logScrapeFailure(dto);
  }
}
