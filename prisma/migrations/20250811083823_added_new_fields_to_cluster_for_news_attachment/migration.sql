-- DropIndex
DROP INDEX "public"."cluster_cluster_name_key";

-- DropIndex
DROP INDEX "public"."cluster_cluster_summary_key";

-- AlterTable
ALTER TABLE "public"."cluster" ADD COLUMN     "article_count" INTEGER,
ADD COLUMN     "centroid_embedding" vector,
ADD COLUMN     "latest_published" INTEGER,
ADD COLUMN     "top_entities" JSONB;
