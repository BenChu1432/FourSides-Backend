/*
  Warnings:

  - You are about to drop the column `place_confidence` on the `cluster` table. All the data in the column will be lost.
  - You are about to drop the column `place_in_concern` on the `cluster` table. All the data in the column will be lost.
  - You are about to drop the column `place_source` on the `cluster` table. All the data in the column will be lost.
  - You are about to drop the column `top_places` on the `cluster` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."cluster" DROP COLUMN "place_confidence",
DROP COLUMN "place_in_concern",
DROP COLUMN "place_source",
DROP COLUMN "top_places",
ADD COLUMN     "places_in_concern" "public"."InterestingRegionOrCountry"[],
ADD COLUMN     "places_in_detail" JSONB;
