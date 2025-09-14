import { Injectable } from '@nestjs/common';
import { KyselyService } from 'src/kysely/kysely.service';

@Injectable()
export class AchievementSeeder {
  constructor(private readonly kyselyService: KyselyService) {}
  private get db() {
    return this.kyselyService.connection;
  }

  async seed() {
    const achievements = [
      {
        name: '總登入日數',
        unknown: 0,
        bronze: 1,
        silver: 30,
        gold: 90,
        platinum: 180,
        diamond: 365,
      },
      {
        name: '連續登入日數',
        unknown: 0,
        bronze: 1,
        silver: 20,
        gold: 60,
        platinum: 150,
        diamond: 300,
      },
      {
        name: '閱讀不同立場文章',
        unknown: 0,
        bronze: 1,
        silver: 50,
        gold: 150,
        platinum: 250,
        diamond: 400,
      },
      {
        name: '參與社群投票',
        unknown: 0,
        bronze: 1,
        silver: 60,
        gold: 180,
        platinum: 300,
        diamond: 500,
      },
      {
        name: '正確回答Q&A',
        unknown: 0,
        bronze: 1,
        silver: 50,
        gold: 120,
        platinum: 250,
        diamond: 500,
      },
      {
        name: '留言數量',
        unknown: 0,
        bronze: 1,
        silver: 50,
        gold: 130,
        platinum: 250,
        diamond: 400,
      },
      {
        name: '跨文章分析',
        unknown: 0,
        bronze: 1,
        silver: 50,
        gold: 120,
        platinum: 250,
        diamond: 400,
      },
      {
        name: '審視過去錯誤資訊',
        unknown: 0,
        bronze: 1,
        silver: 20,
        gold: 50,
        platinum: 100,
        diamond: 200,
      },
      {
        name: '使用腦袋數量',
        unknown: 0,
        bronze: 1,
        silver: 60,
        gold: 150,
        platinum: 250,
        diamond: 400,
      },
    ];

    for (const achievement of achievements) {
      await this.db
        .insertInto('achievement')
        .values(achievement)
        .onConflict((oc) => oc.column('name').doNothing())
        .execute();
    }

    console.log('✅ Achievements seeded.');
  }
}
