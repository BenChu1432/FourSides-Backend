/*
  Warnings:

  - The `url` column on the `scrape_failures` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."scrape_failures" DROP COLUMN "url",
ADD COLUMN     "url" TEXT[];
