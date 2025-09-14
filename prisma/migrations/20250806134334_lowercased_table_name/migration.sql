/*
  Warnings:

  - You are about to drop the `UserArticleRead` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."UserArticleRead" DROP CONSTRAINT "UserArticleRead_newsId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserArticleRead" DROP CONSTRAINT "UserArticleRead_userId_fkey";

-- DropTable
DROP TABLE "public"."UserArticleRead";

-- CreateTable
CREATE TABLE "public"."user_article_read" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "newsId" UUID NOT NULL,

    CONSTRAINT "user_article_read_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."user_article_read" ADD CONSTRAINT "user_article_read_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_article_read" ADD CONSTRAINT "user_article_read_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
