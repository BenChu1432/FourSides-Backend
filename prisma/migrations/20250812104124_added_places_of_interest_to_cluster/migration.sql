-- CreateEnum
CREATE TYPE "public"."PlaceSourceEnum" AS ENUM ('ENTITIES', 'MEDIA_NAME', 'DEFAULT_TAIWAN_IF_LOCAL');

-- AlterTable
ALTER TABLE "public"."cluster" ADD COLUMN     "place_confidence" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "place_in_concern" "public"."InterestingRegionOrCountry",
ADD COLUMN     "place_source" "public"."PlaceSourceEnum",
ADD COLUMN     "top_places" JSONB;
