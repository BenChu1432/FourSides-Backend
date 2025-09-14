-- CreateEnum
CREATE TYPE "public"."ClusteringErrorTypeEnum" AS ENUM ('SUMMARY_JSON_FORMATTING', 'ATTACHMENT_FAILURE', 'OTHERS');

-- CreateTable
CREATE TABLE "public"."clustering_failures" (
    "id" SERIAL NOT NULL,
    "failure_type" "public"."ClusteringErrorTypeEnum" NOT NULL,
    "detail" TEXT,
    "timestamp" INTEGER NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "jobId" INTEGER,

    CONSTRAINT "clustering_failures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."clustering_jobs" (
    "id" SERIAL NOT NULL,
    "start_time" INTEGER NOT NULL,
    "end_time" INTEGER,

    CONSTRAINT "clustering_jobs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."clustering_failures" ADD CONSTRAINT "clustering_failures_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "public"."clustering_jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
