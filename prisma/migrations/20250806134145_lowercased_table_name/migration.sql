/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."news_author" DROP CONSTRAINT "news_author_authorId_fkey";

-- DropTable
DROP TABLE "public"."Author";

-- CreateTable
CREATE TABLE "public"."author" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."news_author" ADD CONSTRAINT "news_author_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
