/*
  Warnings:

  - You are about to drop the `news_vote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `news_vote_summary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."news_vote" DROP CONSTRAINT "news_vote_newsId_fkey";

-- DropForeignKey
ALTER TABLE "public"."news_vote" DROP CONSTRAINT "news_vote_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."news_vote_summary" DROP CONSTRAINT "news_vote_summary_newsId_fkey";

-- DropTable
DROP TABLE "public"."news_vote";

-- DropTable
DROP TABLE "public"."news_vote_summary";

-- CreateTable
CREATE TABLE "public"."cluster_vote" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "clusterId" UUID NOT NULL,
    "vote" "public"."VoteType" NOT NULL,
    "votedAt" INTEGER NOT NULL,

    CONSTRAINT "cluster_vote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cluster_vote_summary" (
    "clusterId" UUID NOT NULL,
    "support" INTEGER NOT NULL DEFAULT 0,
    "oppose" INTEGER NOT NULL DEFAULT 0,
    "neutral" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" INTEGER NOT NULL,

    CONSTRAINT "cluster_vote_summary_pkey" PRIMARY KEY ("clusterId")
);

-- CreateIndex
CREATE INDEX "cluster_vote_clusterId_idx" ON "public"."cluster_vote"("clusterId");

-- CreateIndex
CREATE INDEX "cluster_vote_userId_idx" ON "public"."cluster_vote"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "cluster_vote_userId_clusterId_key" ON "public"."cluster_vote"("userId", "clusterId");

-- AddForeignKey
ALTER TABLE "public"."cluster_vote" ADD CONSTRAINT "cluster_vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cluster_vote" ADD CONSTRAINT "cluster_vote_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "public"."cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cluster_vote_summary" ADD CONSTRAINT "cluster_vote_summary_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "public"."cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
