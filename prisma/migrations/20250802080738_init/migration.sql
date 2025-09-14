-- CreateEnum
CREATE TYPE "public"."AuthProvider" AS ENUM ('EMAIL', 'GOOGLE', 'APPLE');

-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('OWNER', 'FREE_USER', 'PAID_USER', 'BETA_TESTER');

-- CreateEnum
CREATE TYPE "public"."ErrorTypeEnum" AS ENUM ('UNMAPPED_MEDIA', 'PARSING_FAILURE', 'PARSING_ERROR', 'ZERO_URLS_FETCHED', 'OTHERS');

-- CreateEnum
CREATE TYPE "public"."InterestingTopic" AS ENUM ('國際', '財經', '科技', '教育', '社會', '文化', '環境', '娛樂', '健康', '軍隊', '運動', '觀點');

-- CreateEnum
CREATE TYPE "public"."InterestingRegionOrCountry" AS ENUM ('台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市', '基隆市', '新竹市', '嘉義市', '宜蘭縣', '花蓮縣', '台東縣', '南投縣', '彰化縣', '雲林縣', '屏東縣', '苗栗縣', '新竹縣', '嘉義縣', '澎湖縣', '金門縣', '連江縣', '香港', '中國', '美國', '加沙', '以色列', '烏克蘭', '歐盟', '日本', '韓國');

-- CreateEnum
CREATE TYPE "public"."Identity" AS ENUM ('台北人', '新北人', '桃園人', '台中人', '台南人', '高雄人', '基隆人', '新竹人', '嘉義人', '宜蘭人', '花蓮人', '台東人', '南投人', '彰化人', '雲林人', '屏東人', '苗栗人', '澎湖人', '金門人', '連江人', '其他');

-- CreateEnum
CREATE TYPE "public"."PoliticalStance" AS ENUM ('深綠', '淺綠', '中立', '淺藍', '深藍');

-- CreateEnum
CREATE TYPE "public"."MediaNameEnum" AS ENUM ('CTS', 'TSSDNews', 'CTWant', 'TaiwanNews', 'TTV', 'CTINews', 'HongKongFreePress', 'MingPaoNews', 'SingTaoDaily', 'SCMP', 'ChineseNewYorkTimes', 'DeutscheWelle', 'HKFreePress', 'WenWeiPo', 'OrientalDailyNews', 'TaKungPao', 'HK01', 'InitiumMedia', 'YahooNews', 'HKCD', 'TheEpochTimes', 'NowTV', 'ChineseBBC', 'VOC', 'HKCourtNews', 'ICable', 'HKGovernmentNews', 'OrangeNews', 'TheStandard', 'HKEJ', 'HKET', 'RTHK', 'TheWitness', 'InMediaHK', 'PeopleDaily', 'XinhuaNewsAgency', 'GlobalTimes', 'CCTV', 'UnitedDailyNews', 'LibertyTimesNet', 'ChinaTimes', 'CNA', 'PTSNews', 'CTEE', 'MyPeopleVol', 'TaiwanTimes', 'ChinaDailyNews', 'SETN', 'NextAppleNews', 'MirrorMedia', 'NowNews', 'StormMedia', 'TVBS', 'EBCNews', 'ETtoday', 'NewTalk', 'FTV');

-- CreateEnum
CREATE TYPE "public"."OriginEnum" AS ENUM ('native', 'CTS', 'TSSDNews', 'CTWant', 'TaiwanNews', 'TTV', 'CTINews', 'HongKongFreePress', 'MingPaoNews', 'SingTaoDaily', 'SCMP', 'ChineseNewYorkTimes', 'DeutscheWelle', 'HKFreePress', 'WenWeiPo', 'OrientalDailyNews', 'TaKungPao', 'HK01', 'InitiumMedia', 'YahooNews', 'HKCD', 'TheEpochTimes', 'NowTV', 'ChineseBBC', 'VOC', 'HKCourtNews', 'ICable', 'HKGovernmentNews', 'OrangeNews', 'TheStandard', 'HKEJ', 'HKET', 'RTHK', 'TheWitness', 'InMediaHK', 'PeopleDaily', 'XinhuaNewsAgency', 'GlobalTimes', 'CCTV', 'UnitedDailyNews', 'LibertyTimesNet', 'ChinaTimes', 'CNA', 'PTSNews', 'CTEE', 'MyPeopleVol', 'TaiwanTimes', 'ChinaDailyNews', 'SETN', 'NextAppleNews', 'MirrorMedia', 'NowNews', 'StormMedia', 'TVBS', 'EBCNews', 'ETtoday', 'NewTalk', 'FTV');

-- CreateTable
CREATE TABLE "public"."cluster" (
    "id" SERIAL NOT NULL,
    "cluster_name" TEXT,
    "cluster_summary" TEXT,
    "processed_at" INTEGER,

    CONSTRAINT "cluster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."news" (
    "id" SERIAL NOT NULL,
    "media_name" "public"."MediaNameEnum",
    "url" TEXT,
    "title" TEXT,
    "origin" "public"."OriginEnum",
    "content" TEXT,
    "content_en" TEXT,
    "published_at" INTEGER,
    "authors" TEXT[],
    "images" TEXT[],
    "clusterId" INTEGER,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "displayName" TEXT,
    "avatarUrl" TEXT,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "onboardingNeeded" BOOLEAN NOT NULL DEFAULT true,
    "role" "public"."Role" NOT NULL DEFAULT 'FREE_USER',
    "createdAt" INTEGER NOT NULL,
    "updatedAt" INTEGER NOT NULL,
    "canSendNotification" BOOLEAN NOT NULL DEFAULT false,
    "gameMode" BOOLEAN NOT NULL DEFAULT true,
    "seeReportingMerits" BOOLEAN NOT NULL DEFAULT false,
    "seeMisguidingTechniques" BOOLEAN NOT NULL DEFAULT false,
    "seeReportingStyle" BOOLEAN NOT NULL DEFAULT false,
    "seeReportingIntention" BOOLEAN NOT NULL DEFAULT false,
    "removeSensationalHeadlines" BOOLEAN NOT NULL DEFAULT false,
    "removeCopyPasteArticles" BOOLEAN NOT NULL DEFAULT false,
    "topicsInterestedIn" "public"."InterestingTopic"[],
    "regionsInterestedIn" "public"."InterestingRegionOrCountry"[],
    "politicalStance" "public"."PoliticalStance",
    "identity" "public"."Identity",

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_auth" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "authProvider" "public"."AuthProvider" NOT NULL DEFAULT 'EMAIL',
    "email" TEXT,
    "password" TEXT,
    "providerId" TEXT,
    "refreshToken" TEXT,
    "verificationToken" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_auth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."scrape_failures" (
    "id" SERIAL NOT NULL,
    "failure_type" "public"."ErrorTypeEnum" NOT NULL,
    "media_name" TEXT,
    "url" TEXT,
    "reason" TEXT,
    "timestamp" INTEGER NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "scrape_failures_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cluster_cluster_name_key" ON "public"."cluster"("cluster_name");

-- CreateIndex
CREATE UNIQUE INDEX "cluster_cluster_summary_key" ON "public"."cluster"("cluster_summary");

-- CreateIndex
CREATE UNIQUE INDEX "news_url_key" ON "public"."news"("url");

-- CreateIndex
CREATE INDEX "news_id_idx" ON "public"."news"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_userId_key" ON "public"."user_auth"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_email_key" ON "public"."user_auth"("email");

-- AddForeignKey
ALTER TABLE "public"."news" ADD CONSTRAINT "news_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "public"."cluster"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_auth" ADD CONSTRAINT "user_auth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
