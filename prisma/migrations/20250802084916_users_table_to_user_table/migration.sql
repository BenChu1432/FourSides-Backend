/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."user_auth" DROP CONSTRAINT "user_auth_userId_fkey";

-- DropTable
DROP TABLE "public"."users";

-- CreateTable
CREATE TABLE "public"."user" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "displayName" TEXT,
    "avatarUrl" TEXT,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "onboardingNeeded" BOOLEAN NOT NULL DEFAULT true,
    "role" "public"."Role" NOT NULL DEFAULT 'FREE_USER',
    "createdAt" INTEGER NOT NULL,
    "updatedAt" INTEGER NOT NULL,
    "canSendNotification" BOOLEAN NOT NULL DEFAULT false,
    "gameMode" BOOLEAN NOT NULL DEFAULT true,
    "seeReportingMerits" BOOLEAN NOT NULL DEFAULT false,
    "seeMisguidingTechniques" BOOLEAN NOT NULL DEFAULT false,
    "seeReportingStyle" BOOLEAN NOT NULL DEFAULT false,
    "seeReportingIntention" BOOLEAN NOT NULL DEFAULT false,
    "removeSensationalHeadlines" BOOLEAN NOT NULL DEFAULT false,
    "removeCopyPasteArticles" BOOLEAN NOT NULL DEFAULT false,
    "topicsInterestedIn" "public"."InterestingTopic"[],
    "regionsInterestedIn" "public"."InterestingRegionOrCountry"[],
    "politicalStance" "public"."PoliticalStance",
    "identity" "public"."Identity",

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."user_auth" ADD CONSTRAINT "user_auth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
