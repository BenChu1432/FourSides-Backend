/*
  Warnings:

  - You are about to drop the column `canSendNotification` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `gameMode` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `removeCopyPasteArticles` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `removeSensationalHeadlines` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `seeMisguidingTechniques` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `seeReportingIntention` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `seeReportingMerits` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `seeReportingStyle` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "canSendNotification",
DROP COLUMN "gameMode",
DROP COLUMN "removeCopyPasteArticles",
DROP COLUMN "removeSensationalHeadlines",
DROP COLUMN "seeMisguidingTechniques",
DROP COLUMN "seeReportingIntention",
DROP COLUMN "seeReportingMerits",
DROP COLUMN "seeReportingStyle";

-- CreateTable
CREATE TABLE "public"."user_app_setting_preference" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "gameMode" BOOLEAN NOT NULL DEFAULT true,
    "canSendNotification" BOOLEAN NOT NULL DEFAULT false,
    "seeReportingMerits" BOOLEAN NOT NULL DEFAULT false,
    "seeMisguidingTechniques" BOOLEAN NOT NULL DEFAULT false,
    "seeReportingStyle" BOOLEAN NOT NULL DEFAULT false,
    "seeReportingIntention" BOOLEAN NOT NULL DEFAULT false,
    "removeSensationalHeadlines" BOOLEAN NOT NULL DEFAULT false,
    "removeCopyPasteArticles" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_app_setting_preference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_app_setting_preference_userId_key" ON "public"."user_app_setting_preference"("userId");

-- AddForeignKey
ALTER TABLE "public"."user_app_setting_preference" ADD CONSTRAINT "user_app_setting_preference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
