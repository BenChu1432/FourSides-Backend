-- AlterTable
ALTER TABLE "public"."scrape_failures" ADD COLUMN     "jobId" INTEGER;

-- CreateTable
CREATE TABLE "public"."scrape_jobs" (
    "id" SERIAL NOT NULL,
    "machine_id" TEXT NOT NULL,
    "start_time" INTEGER NOT NULL,
    "news_media" "public"."MediaNameEnum" NOT NULL,
    "end_time" INTEGER,

    CONSTRAINT "scrape_jobs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."scrape_failures" ADD CONSTRAINT "scrape_failures_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."scrape_jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
