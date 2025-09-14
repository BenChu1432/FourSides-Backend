-- CreateEnum
CREATE TYPE "public"."VoteType" AS ENUM ('SUPPORT', 'OPPOSE', 'NEUTRAL');

-- CreateTable
CREATE TABLE "public"."news_vote" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "newsId" UUID NOT NULL,
    "vote" "public"."VoteType" NOT NULL,
    "votedAt" INTEGER NOT NULL,

    CONSTRAINT "news_vote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."news_vote_summary" (
    "newsId" UUID NOT NULL,
    "support" INTEGER NOT NULL DEFAULT 0,
    "oppose" INTEGER NOT NULL DEFAULT 0,
    "neutral" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" INTEGER NOT NULL,

    CONSTRAINT "news_vote_summary_pkey" PRIMARY KEY ("newsId")
);

-- CreateIndex
CREATE INDEX "news_vote_newsId_idx" ON "public"."news_vote"("newsId");

-- CreateIndex
CREATE INDEX "news_vote_userId_idx" ON "public"."news_vote"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "news_vote_userId_newsId_key" ON "public"."news_vote"("userId", "newsId");

-- AddForeignKey
ALTER TABLE "public"."news_vote" ADD CONSTRAINT "news_vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."news_vote" ADD CONSTRAINT "news_vote_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."news_vote_summary" ADD CONSTRAINT "news_vote_summary_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
