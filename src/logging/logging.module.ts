import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { KyselyService } from 'src/kysely/kysely.service';

@Module({
  controllers: [LoggingController],
  providers: [LoggingService, KyselyService],
})
export class LoggingModule {}
