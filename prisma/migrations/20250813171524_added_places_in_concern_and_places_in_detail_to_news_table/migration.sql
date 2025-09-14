-- AlterTable
ALTER TABLE "public"."news" ADD COLUMN     "places_in_concern" "public"."InterestingRegionOrCountry"[],
ADD COLUMN     "places_in_detail" JSONB;
