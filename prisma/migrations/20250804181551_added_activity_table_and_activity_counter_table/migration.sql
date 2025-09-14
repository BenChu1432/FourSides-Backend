/*
  Warnings:

  - Added the required column `goal` to the `title` table without a default value. This is not possible if the table is not empty.
  - Added the required column `progress` to the `user_title` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ActivityType" AS ENUM ('LOGIN', 'LOGOUT', 'ONLINE', 'OFFLINE', 'SUBSCRIBE', 'CHANGE_PROFILE_PIC', 'CHANGE_PROFILE_NAME', 'CHANGE_TOPICS_INTERESTED_IN', 'CHANGE_REGIONS_INTERESTED_IN', 'CHANGE_IDENTITY', 'CHANGE_POLITICAL_STANCE', 'COMMENT', 'REPLY', 'LIKE_NEWS', 'LIKE_COMMENT', 'DISLIKE_NEWS', 'DISLIKE_COMMENT', 'COMMUNITY_VOTE', 'ANSWER_TRUTH_QUESTIONS_CORRECTLY', 'ANSWER_TRUTH_QUESTIONS_WRONG', 'ANSWER_NEWS_MISGUIDANCE_QUESTIONS_CORRECTLY', 'ANSWER_NEWS_MISGUIDANCE_QUESTIONS_WRONG', 'USE_CROSS_NEWS_ARTICLE_ANALYSIS_FUNCTION', 'REEXAMINE_MISINFORMATION', 'FOLLOW_JOURNALIST', 'UNFOLLOW_JOURNALIST', 'CLAIM_REWARD', 'READ_AI_LABEL_REPORT', 'USE_BRAINS');

-- AlterTable
ALTER TABLE "public"."title" ADD COLUMN     "goal" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."user_title" ADD COLUMN     "progress" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."user_activity" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "type" "public"."ActivityType" NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "user_activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_activity_counter" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "type" "public"."ActivityType" NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" INTEGER NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "user_activity_counter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "user_activity_userId_type_idx" ON "public"."user_activity"("userId", "type");

-- CreateIndex
CREATE INDEX "user_activity_counter_userId_idx" ON "public"."user_activity_counter"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_activity_counter_userId_type_key" ON "public"."user_activity_counter"("userId", "type");

-- AddForeignKey
ALTER TABLE "public"."user_activity" ADD CONSTRAINT "user_activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_activity_counter" ADD CONSTRAINT "user_activity_counter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
