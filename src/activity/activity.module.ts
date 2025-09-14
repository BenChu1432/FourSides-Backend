import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { KyselyService } from 'src/kysely/kysely.service';
import { GameService } from 'src/game/game.service';

@Module({
  providers: [ActivityService, KyselyService, GameService],
  exports: [ActivityService],
})
export class ActivityModule {}
