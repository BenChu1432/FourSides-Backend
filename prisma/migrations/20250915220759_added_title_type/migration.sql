/*
  Warnings:

  - Added the required column `type` to the `title` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `user_title` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TitleType" AS ENUM ('LOGIN_TOTAL', 'LOGIN_STREAK', 'SUBSCRIPTION', 'CLICK_ARTICLE_TOTAL', 'COMMENT_TOTAL', 'COMMENT_REPLY_TOTAL', 'COMMENT_LIKE_TOTAL', 'COMMENT_DISLIKE_TOTAL', 'PROFILE_CHANGE_TOTAL', 'CLICKBAIT_CLICK_TOTAL', 'AI_ANALYSIS_TOTAL', 'NIGHT_LOGIN_TOTAL', 'AVATAR_CHANGE_TOTAL', 'NEWS_LIKE_TOTAL', 'NEWS_DISLIKE_TOTAL', 'NEWS_SHARE_TOTAL', 'NEWS_VOTE_TOTAL', 'JOURNALIST_FOLLOW_TOTAL', 'SEARCH_TOTAL', 'DRAFT_ABANDON', 'QUICK_EXIT');

-- AlterTable
ALTER TABLE "public"."title" ADD COLUMN     "type" "public"."TitleType" NOT NULL;

-- AlterTable
ALTER TABLE "public"."user_title" ADD COLUMN     "type" "public"."TitleType" NOT NULL;
