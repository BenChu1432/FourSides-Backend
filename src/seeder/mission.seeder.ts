// src/seeder/mission.seeder.ts
import { Injectable } from '@nestjs/common';
import { KyselyService } from 'src/kysely/kysely.service';

@Injectable()
export class MissionSeeder {
  constructor(private readonly kyselyService: KyselyService) {}

  private get db() {
    return this.kyselyService.connection;
  }

  async seed() {
    const missions = [
      { title: '✍🏻 總登入日數', type: 'DAILY', reward: 1, requirement: 1 },
      { title: '📅 連續登入日數', type: 'DAILY', reward: 4, requirement: 4 },
      { title: '👍🏻 讚好新聞', type: 'DAILY', reward: 1, requirement: 1 },
      { title: '💬 留言', type: 'DAILY', reward: 1, requirement: 1 },
      { title: '🧍‍♂️ 跟蹤記者', type: 'ONE_TIME', reward: 1, requirement: 1 },
      { title: '❤️ 讚好留言', type: 'DAILY', reward: 1, requirement: 1 },
      {
        title: '🔍 重新審視過去的錯誤資訊',
        type: 'INFINITE',
        reward: 1,
        requirement: 1,
      },
      { title: '🗳️ 投票', type: 'DAILY', reward: 1, requirement: 1 },
      { title: '⭕ 是非題', type: 'INFINITE', reward: 1, requirement: 1 },
      {
        title: '📊 使用跨文章分析功能',
        type: 'ONE_TIME',
        reward: 1,
        requirement: 1,
      },
      {
        title: '📰 看兩篇政治立場不同、但報導相似的新聞',
        type: 'ONE_TIME',
        reward: 1,
        requirement: 1,
      },
      // Daily because there are already answers on the card
      { title: '🙌🏻 好壞題', type: 'DAILY', reward: 1, requirement: 1 },
      { title: '👎🏻 踢新聞', type: 'DAILY', reward: 1, requirement: 1 },
    ] as const;

    for (const mission of missions) {
      await this.db
        .insertInto('mission')
        .values(mission)
        .onConflict((oc) => oc.column('title').doNothing())
        .execute();
    }

    console.log('✅ Missions seeded.');
  }
}
