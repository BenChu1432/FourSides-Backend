/*
  Warnings:

  - The values [TFCNews] on the enum `MediaNameEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."MediaNameEnum_new" AS ENUM ('CTS', 'TSSDNews', 'CTWant', 'TaiwanNews', 'TTV', 'CTINews', 'HongKongFreePress', 'MingPaoNews', 'SingTaoDaily', 'SCMP', 'ChineseNewYorkTimes', 'DeutscheWelle', 'HKFreePress', 'WenWeiPo', 'OrientalDailyNews', 'TaKungPao', 'HK01', 'InitiumMedia', 'YahooNews', 'HKCD', 'TheEpochTimes', 'NowTV', 'ChineseBBC', 'VOC', 'HKCourtNews', 'ICable', 'HKGovernmentNews', 'OrangeNews', 'TheStandard', 'HKEJ', 'HKET', 'RTHK', 'TheWitness', 'InMediaHK', 'PeopleDaily', 'XinhuaNewsAgency', 'GlobalTimes', 'CCTV', 'UnitedDailyNews', 'LibertyTimesNet', 'ChinaTimes', 'CNA', 'PTSNews', 'CTEE', 'MyPeopleVol', 'TaiwanTimes', 'ChinaDailyNews', 'SETN', 'NextAppleNews', 'MirrorMedia', 'NowNews', 'StormMedia', 'TVBS', 'EBCNews', 'ETtoday', 'NewTalk', 'FTV');
ALTER TABLE "public"."news" ALTER COLUMN "media_name" TYPE "public"."MediaNameEnum_new" USING ("media_name"::text::"public"."MediaNameEnum_new");
ALTER TABLE "public"."scrape_jobs" ALTER COLUMN "media_name" TYPE "public"."MediaNameEnum_new" USING ("media_name"::text::"public"."MediaNameEnum_new");
ALTER TYPE "public"."MediaNameEnum" RENAME TO "MediaNameEnum_old";
ALTER TYPE "public"."MediaNameEnum_new" RENAME TO "MediaNameEnum";
DROP TYPE "public"."MediaNameEnum_old";
COMMIT;
