// src/seeder/mission.seeder.ts
import { Injectable } from '@nestjs/common';
import { KyselyService } from 'src/kysely/kysely.service';

@Injectable()
export class NewsMediaSeeder {
  constructor(private readonly kyselyService: KyselyService) {}

  private get db() {
    return this.kyselyService.connection;
  }

  async seed() {
    const newsMedia = [
      {
        name: 'UnitedDailyNews',
        chinese_name: '聯合報',
        imageUrl:
          'https://yt3.googleusercontent.com/ytc/AIdro_mE1Tt3ZNfDFs2GvceKBD6_K1PZZj_xnULo4WtX_YX4-ZI=s900-c-k-c0x00ffffff-no-rj',
        political_standing: 0.225,
      },
      {
        name: 'LibertyTimesNet',
        chinese_name: '自由時報',
        imageUrl: 'https://cache.ltn.com.tw/images/rwd_ltnlogo.png',
        political_standing: 0.95,
      },
      {
        name: 'ChinaTimes',
        chinese_name: '中時新聞網',
        imageUrl:
          'https://yt3.googleusercontent.com/p2KDr9412K0jrHajCKPr6UBIzXoMmNocqjiRIdAFgSeOmpZ5VDH2I_Bn25R7jRV2ZEjlIBLwNw=s900-c-k-c0x00ffffff-no-rj',
        political_standing: 0.05,
      },
      {
        name: 'CNA',
        chinese_name: '中央社',
        imageUrl: 'https://feedx.net/wp-content/uploads/2018/01/cna.jpg',
        political_standing: 0.725,
      },
      {
        name: 'PTSNews',
        chinese_name: '公視新聞',
        imageUrl:
          'https://yt3.googleusercontent.com/ytc/AIdro_ms3o2HJnVOnEZSceyQygn7y_lsRZn1S91CJIUthdizIg=s900-c-k-c0x00ffffff-no-rj',
        political_standing: 0.925,
      },
      {
        name: 'CTEE',
        chinese_name: '工商時報',
        imageUrl:
          'https://images.ctee.com.tw/newsphoto/2023-05-08/1024/20230508700017.png',
        political_standing: 0.45,
      },
      {
        name: 'MyPeopleVol',
        chinese_name: '民眾新聞網',
        imageUrl:
          'https://www.mypeoplevol.com/wp-content/uploads/2024/12/logo_mypeople_red.png',
        political_standing: 0.275,
      },
      {
        name: 'TaiwanTimes',
        chinese_name: '台灣時報',
        imageUrl: 'https://www.taiwantimes.com.tw/assets/logo.png',
        political_standing: 0.875,
      },
      {
        name: 'ChinaDailyNews',
        chinese_name: '中華新聞雲',
        imageUrl:
          'https://d1j71ui15yt4f9.cloudfront.net/wp-content/uploads/2024/11/23011305/%E4%B8%AD%E8%8F%AF%E6%96%B0%E8%81%9E%E9%9B%B2%E5%88%8A%E9%A0%AD-600x264-1.png',
        political_standing: 0.2,
      },
      {
        name: 'SETN',
        chinese_name: '三立新聞網',
        imageUrl:
          'https://yt3.googleusercontent.com/1y7X5unwYlGtY3DSlgKq1z9qLjMZlW7eWwyfl4HdFC7jnbbDRQnIZWAreFcSsw-L6HN_X8gDnA=s900-c-k-c0x00ffffff-no-rj',
        political_standing: 0.9,
      },
      {
        name: 'NextAppleNews',
        chinese_name: '壹蘋新聞網',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdQsmoPGuckElL11LQCD_cbWncjhmSZCkRA&s',
        political_standing: 0.975,
      },
      {
        name: 'MirrorMedia',
        chinese_name: '鏡週刊',
        imageUrl:
          'https://newbloommag.net/wp-content/uploads/2022/04/194878754_3169461186607065_70327457564378026_n.png',
        political_standing: 0.475,
      },
      {
        name: 'NowNews',
        chinese_name: '今日新聞',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZ21x6Po3diWOpu351wAMuBHxcfV1NPoT7w&s',
        political_standing: 0.5,
      },
      {
        name: 'StormMedia',
        chinese_name: '風傳媒',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqtZF0sZqPBb-v4hCuCquOptTlo3lYUJNmw&s',
        political_standing: 0.65,
      },
      {
        name: 'TVBS',
        chinese_name: 'TVBS新聞',
        imageUrl:
          'https://yt3.googleusercontent.com/IrPD-qWFtgEr0kplk7RvA5HWJz3BLzg8mBMh9bz2lNvRSE_YgCErB7dheHcQohExnC_VCdCKnA=s900-c-k-c0x00ffffff-no-rj',
        political_standing: 0.15,
      },
      {
        name: 'EBCNews',
        chinese_name: '東森新聞',
        imageUrl: 'https://yt.ebc.net.tw/images/ebcnews.jpg',
        political_standing: 0.225,
      },
      {
        name: 'ETtoday',
        chinese_name: '東森ETtoday新聞雲',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/zh/thumb/e/e3/ETToady_logo.svg/800px-ETToady_logo.svg.png',
        political_standing: 0.5,
      },
      {
        name: 'NewTalk',
        chinese_name: '新頭殼',
        imageUrl:
          'https://play-lh.googleusercontent.com/T5_Nf782JwGtXid9GVgxKq2L7ToXCW0TdrhdZg6rcehSNRiI8Jv_GM5VHi5TYMnVZAI',
        political_standing: 0.95,
      },
      {
        name: 'FTV',
        chinese_name: '民視新聞',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuLueKGPGMSzQqxtpYX6V8Pr9u6JT1oVd-w&s',
        political_standing: 0.2,
      },
      {
        name: 'TaiwanNews',
        chinese_name: '台灣好報',
        imageUrl:
          'https://cdn.newstaiwan.net/q:i/r:0/wp:1/w:1/u:https://newstaiwan.net/wp-content/uploads/2023/03/%E5%8F%B0%E7%81%A3%E5%A5%BD%E5%A0%B1-%E7%B6%B2%E9%A0%81LOGO%E5%B7%A6%E4%B8%8A.png',
        political_standing: 0.5,
      },
      {
        name: 'CTWant',
        chinese_name: 'CTWANT',
        imageUrl:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/b9/d2/07/b9d2077b-5e45-8505-1b28-3eb053f5f154/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.jpeg/1200x600wa.png',
        political_standing: 0.1,
      },
      {
        name: 'TSSDNews',
        chinese_name: '台灣新生社',
        imageUrl:
          'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/author/photo/550.jpg',
        political_standing: 0.8,
      },
      {
        name: 'CTS',
        chinese_name: '華視新聞',
        imageUrl: 'https://www.cts.com.tw/images/2018cts/cts-logo.png',
        political_standing: 0.5,
      },
      {
        name: 'TaroNews',
        chinese_name: '芋傳媒',
        imageUrl:
          'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/28377891_181277129160229_342051676489777152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=pbWK-_Qa3wsQ7kNvwH6sPx6&_nc_oc=AdlVI26xxIlghEpRPpxCoHzcBue_LyvVADvDNq6KRbED9bY4pDKFN75LccW_1UALEcE&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=2zFoUpon75oA7PGG8rLvww&oh=00_AfZ2BNh_qdgvCdQt6agDjUtbkfknhJCX17YCu_j7vabEEA&oe=68FBDB42',
        political_standing: 0.975,
      },
      {
        name: 'YahooNews',
        chinese_name: 'Yahoo奇摩新聞',
        imageUrl:
          'https://www.graphicdesignforum.com/uploads/default/d29994f7196e90161f7f520700f9b00a973327ad',
        political_standing: 0.5,
      },
      {
        name: 'VOC',
        chinese_name: '美國之音',
        imageUrl:
          'https://www.voachinese.com/Content/responsive/VOA/zh-CN/img/logo.svg',
        political_standing: 0.875,
      },
      {
        name: 'DeutscheWelle',
        chinese_name: '德國之聲',
        imageUrl:
          'https://pbs.twimg.com/profile_images/1822957904644739072/BXonw0wU_400x400.jpg',
        political_standing: 0.9,
      },
      {
        name: 'ChineseBBC',
        chinese_name: 'BBC中文網',
        imageUrl:
          'https://yt3.googleusercontent.com/zfLDpMaOaNOsNdaIESj8ekuIjlX6fkpXsytTufvpy_y3U9OzBA9MQ25p5XYXMvN9-Y-KhMvCMKs=s900-c-k-c0x00ffffff-no-rj',
        political_standing: 1.0,
      },
      {
        name: 'CTINews',
        chinese_name: '中天新聞',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/zh/4/48/CTI_News_Logo.jpg',
        political_standing: 0.0,
      },
      {
        name: 'TTV',
        chinese_name: '台視新聞',
        imageUrl:
          'https://yt3.googleusercontent.com/nYcBIWeEgUq36rLMufMxEegW7SFzoQODGY6BVD5PNJ9nDeggnONyxcPMYcECCIcYQHfguFSHvg=s900-c-k-c0x00ffffff-no-rj',
        political_standing: 0.925,
      },
      {
        name: 'ChineseNewYorkTimes',
        chinese_name: '紐約時報中文網',
        imageUrl:
          'https://play-lh.googleusercontent.com/5XC7xTfpkqUnCu76kbQFCGoUpT7mNUFezBMJ6irojZX__EbBaTWwKFrd5ON4LQ2PBw',
        political_standing: 0.9,
      },
      {
        name: 'FactcheckLab',
        chinese_name: '事實查核實驗室',
        imageUrl:
          'https://www-cdn.factchecklab.org/2020/06/Light-White-Horizontal-twitter.png',
        political_standing: 0.5,
      },
      {
        name: 'TFCNews',
        chinese_name: '台灣事實查核中心',
        imageUrl:
          'https://tfc-taiwan.org.tw/wp-content/uploads/original/files/upload/node/field_blog_images/LOGO-02_2.png',
        political_standing: 0.5,
      },
      {
        name: 'MyGoPenNews',
        chinese_name: 'MyGoPen',
        imageUrl:
          'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/352782430_197593689454227_2182200236924088794_n.jpg?...',
        political_standing: 0.5,
      },
    ];

    for (const outlet of newsMedia) {
      await this.db
        .insertInto('news_media')
        .values(outlet)
        .onConflict((oc) =>
          oc.column('name').doUpdateSet({
            chinese_name: (eb) => eb.ref('excluded.chinese_name'),
            imageUrl: (eb) => eb.ref('excluded.imageUrl'),
            political_standing: (eb) => eb.ref('excluded.political_standing'),
          }),
        )
        .execute();
    }

    console.log('✅ News media seeded.');
  }
}
