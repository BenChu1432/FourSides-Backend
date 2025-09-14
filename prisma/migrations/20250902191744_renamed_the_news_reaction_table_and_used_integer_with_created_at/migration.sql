/*
  Warnings:

  - You are about to drop the `NewsReaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."NewsReaction" DROP CONSTRAINT "NewsReaction_newsId_fkey";

-- DropForeignKey
ALTER TABLE "public"."NewsReaction" DROP CONSTRAINT "NewsReaction_userId_fkey";

-- DropTable
DROP TABLE "public"."NewsReaction";

-- CreateTable
CREATE TABLE "public"."news_reaction" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "newsId" UUID NOT NULL,
    "type" "public"."ReactionType" NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "news_reaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."news_reaction" ADD CONSTRAINT "news_reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."news_reaction" ADD CONSTRAINT "news_reaction_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
