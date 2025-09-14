/*
  Warnings:

  - You are about to drop the column `reason` on the `scrape_failures` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."scrape_failures" DROP COLUMN "reason",
ADD COLUMN     "detail" TEXT;
