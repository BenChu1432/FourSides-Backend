-- AlterTable
ALTER TABLE "public"."cluster" ADD COLUMN     "ambiguous" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "main_topic" TEXT,
ADD COLUMN     "main_topic_score" DOUBLE PRECISION,
ADD COLUMN     "secondary_topic" TEXT,
ADD COLUMN     "secondary_topic_score" DOUBLE PRECISION,
ADD COLUMN     "topic_candidates" JSONB;
