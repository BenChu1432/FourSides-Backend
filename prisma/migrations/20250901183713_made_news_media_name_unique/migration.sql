/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `news_media` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "news_media_name_key" ON "public"."news_media"("name");
