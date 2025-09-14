-- AlterTable
ALTER TABLE "public"."news" ADD COLUMN     "journalistic_demerits_json" JSONB,
ADD COLUMN     "journalistic_merits_json" JSONB,
ADD COLUMN     "reporting_intention" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "reporting_style" TEXT[] DEFAULT ARRAY[]::TEXT[];
