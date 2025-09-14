/*
  Warnings:

  - You are about to drop the `news_entities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."news_entities" DROP CONSTRAINT "news_entities_newsId_fkey";

-- DropTable
DROP TABLE "public"."news_entities";
