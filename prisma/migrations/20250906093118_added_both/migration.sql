/*
  Warnings:

  - You are about to drop the column `helper` on the `user_achievement` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `user_achievement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."user_achievement" DROP COLUMN "helper",
DROP COLUMN "progress",
ADD COLUMN     "cumulative_num" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "max_num" INTEGER NOT NULL DEFAULT 0;
