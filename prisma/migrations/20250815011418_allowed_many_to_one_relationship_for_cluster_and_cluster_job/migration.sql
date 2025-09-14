/*
  Warnings:

  - Added the required column `clusteringJobId` to the `cluster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."cluster" ADD COLUMN     "clusteringJobId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."cluster" ADD CONSTRAINT "cluster_clusteringJobId_fkey" FOREIGN KEY ("clusteringJobId") REFERENCES "public"."clustering_jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
