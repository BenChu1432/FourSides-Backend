/*
  Warnings:

  - The primary key for the `news_author` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."news_author" DROP CONSTRAINT "news_author_pkey",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "news_author_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "public"."news_media" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "news_media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."author_to_news_media" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "authorId" UUID NOT NULL,
    "newsMediaId" UUID NOT NULL,

    CONSTRAINT "author_to_news_media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_AuthorToNewsMedia" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_AuthorToNewsMedia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AuthorToNewsMedia_B_index" ON "public"."_AuthorToNewsMedia"("B");

-- AddForeignKey
ALTER TABLE "public"."author_to_news_media" ADD CONSTRAINT "author_to_news_media_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."author_to_news_media" ADD CONSTRAINT "author_to_news_media_newsMediaId_fkey" FOREIGN KEY ("newsMediaId") REFERENCES "public"."news_media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_AuthorToNewsMedia" ADD CONSTRAINT "_AuthorToNewsMedia_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_AuthorToNewsMedia" ADD CONSTRAINT "_AuthorToNewsMedia_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."news_media"("id") ON DELETE CASCADE ON UPDATE CASCADE;
