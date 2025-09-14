/*
  Warnings:

  - The primary key for the `news` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `news` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."news" DROP CONSTRAINT "news_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "news_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "public"."UserArticleRead" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "newsId" UUID NOT NULL,

    CONSTRAINT "UserArticleRead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "news_id_idx" ON "public"."news"("id");

-- AddForeignKey
ALTER TABLE "public"."UserArticleRead" ADD CONSTRAINT "UserArticleRead_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserArticleRead" ADD CONSTRAINT "UserArticleRead_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
