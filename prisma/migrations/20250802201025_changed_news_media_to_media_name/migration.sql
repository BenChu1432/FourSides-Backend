/*
  Warnings:

  - You are about to drop the column `news_media` on the `scrape_jobs` table. All the data in the column will be lost.
  - Added the required column `media_name` to the `scrape_jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."scrape_jobs" DROP COLUMN "news_media",
ADD COLUMN     "media_name" "public"."MediaNameEnum" NOT NULL;
