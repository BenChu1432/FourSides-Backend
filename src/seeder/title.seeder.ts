// src/seeder/mission.seeder.ts
import { Injectable } from '@nestjs/common';
import { KyselyService } from 'src/kysely/kysely.service';

@Injectable()
export class TitleSeeder {
  constructor(private readonly kyselyService: KyselyService) {}

  private get db() {
    return this.kyselyService.connection;
  }

  async seed() {
    const titles = [
      {
        name: '打卡老司機',
        emoji: '🚕',
        explanation: '不是我想來，是身體自己打開App了。',
        condition: '連續登入10天',
      },
      {
        name: '打卡天尊',
        emoji: '📆👑',
        explanation: '連續登入30天，佛系打卡變成修行大業。',
        condition: '連續登入30天',
      },
      {
        name: '來都來了哥',
        emoji: '🧔‍♂️',
        explanation: '幾天沒見，路過行過不要錯過，看看不同立場新聞吧!',
        condition: '不間斷登入',
      },
      {
        name: '閃現離場',
        emoji: '⚡️',
        explanation: '來無影去無蹤，連AI都還沒反應過來你就下線了。',
        condition: '入屏後少於3秒內離開見方App',
      },
      {
        name: '只看不說不點不踩',
        emoji: '🕵️‍♂️',
        explanation: '你潛水的深度，讓深海魚都尊敬你。',
        condition: '觀看50篇文章，從未互動（留言/點讚/點踩）',
      },
      {
        name: '在線潛水王',
        emoji: '🧜‍♀️',
        explanation: '人在線，靈魂離線，靜靜觀察一切風起雲湧。',
        condition: '了解了超過200篇事件，卻沒有留言、點讚或點踩',
      },
      {
        name: '離線潛逃',
        emoji: '🚪',
        explanation: '悄悄退出聊天室，不帶走一片雲彩。',
        condition: '打了留言，卻沒有發送出去就離開了討論區區',
      },
      {
        name: '真愛的開端',
        emoji: '💞',
        explanation: '訂閱了？這就是真愛的開始。',
        condition: '第一次訂閱',
      },
      {
        name: '英雄轉生系統啟動',
        emoji: '👤',
        explanation: '頭像一換，人設重練，帥到連AI都認不出你。',
        condition: '更換一次頭像',
      },
      {
        name: '留言留到出圈',
        emoji: '💬',
        explanation: '一開口，留言區直接爆紅，還有人截圖傳長輩群組。',
        condition: '留言拿到50個讚',
      },
      {
        name: '讀到走火入魔',
        emoji: '📚🔥',
        explanation: '你今天到底看了幾篇？AI都開始替你擔心視力了。',
        condition: '一天內閱讀超過 50 篇文章',
      },
      {
        name: '嘴砲王',
        emoji: '🗣️💥',
        explanation: '留言數破百，場場嘴到高潮迭起。',
        condition: '發表100則留言',
      },
      {
        name: '引戰大師兄',
        emoji: '🔥🐉',
        explanation: '你的留言引爆戰火，AI都來不及滅火。',
        condition: '留言被點踩超過100次',
      },
      {
        name: '人設成精',
        emoji: '🧞‍♂️',
        explanation: '個人資料一改再改，連你自己都快認不出你自己了。',
        condition: '更改暱稱 + 頭像 + 立場 + 身分共超過5次',
      },
      {
        name: '標題黨剋星',
        emoji: '🧠🔍',
        explanation: '每篇都點進去看，標題再浮誇也騙不了你。',
        condition: '點進該類型新聞10篇以上',
      },
      {
        name: 'AI迷弟',
        emoji: '🤖❤️',
        explanation: '你點AI分析的次數，讓AI都臉紅了。',
        condition: '使用AI分析功能超過30次',
      },
      {
        name: '夜行者',
        emoji: '🌙🦇',
        explanation: '你半夜兩點在看新聞，AI都想請你早點睡。',
        condition: '凌晨1點～4點間登入10次以上',
      },
    ];

    for (const title of titles) {
      await this.db
        .insertInto('title')
        .values(title)
        .onConflict((oc) => oc.column('name').doNothing())
        .execute();
    }

    console.log('✅ Titles seeded.');
  }
}
