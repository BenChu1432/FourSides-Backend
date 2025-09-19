/*
  Warnings:

  - Added the required column `type` to the `user_title_progress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."user_title_progress" ADD COLUMN     "type" "public"."TitleType" NOT NULL;
