import { Module } from '@nestjs/common';
import { AchievementSeeder } from './achievement.seeder';
import { MissionSeeder } from './mission.seeder';
import { KyselyModule } from 'src/kysely/kysely.module';
import { TitleSeeder } from './title.seeder';
import { NewsMediaSeeder } from './newsMedia.seeder';

@Module({
  imports: [KyselyModule],
  providers: [AchievementSeeder, MissionSeeder, TitleSeeder, NewsMediaSeeder],
})
export class SeederModule {}
