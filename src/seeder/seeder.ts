import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeder.module';
import { AchievementSeeder } from './achievement.seeder';
import { MissionSeeder } from './mission.seeder';
import { TitleSeeder } from './title.seeder';
import { NewsMediaSeeder } from './newsMedia.seeder';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(SeederModule);
  const achievementSeeder = app.get(AchievementSeeder);
  const missionSeeder = app.get(MissionSeeder);
  const titleSeeder = app.get(TitleSeeder);
  const newsMediaSeeder = app.get(NewsMediaSeeder);
  await achievementSeeder.seed();
  await missionSeeder.seed();
  await titleSeeder.seed();
  await newsMediaSeeder.seed();
  await app.close();
}

bootstrap();
