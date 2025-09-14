/*
  Warnings:

  - You are about to drop the column `journalistic_demerits_json` on the `news` table. All the data in the column will be lost.
  - You are about to drop the column `journalistic_merits_json` on the `news` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."news" DROP COLUMN "journalistic_demerits_json",
DROP COLUMN "journalistic_merits_json",
ADD COLUMN     "journalistic_demerits" JSONB,
ADD COLUMN     "journalistic_merits" JSONB;
