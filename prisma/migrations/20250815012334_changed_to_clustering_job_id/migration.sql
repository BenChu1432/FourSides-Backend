/*
  Warnings:

  - You are about to drop the column `clusteringJobId` on the `cluster` table. All the data in the column will be lost.
  - Added the required column `clustering_job_id` to the `cluster` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."cluster" DROP CONSTRAINT "cluster_clusteringJobId_fkey";

-- AlterTable
ALTER TABLE "public"."cluster" DROP COLUMN "clusteringJobId",
ADD COLUMN     "clustering_job_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."cluster" ADD CONSTRAINT "cluster_clustering_job_id_fkey" FOREIGN KEY ("clustering_job_id") REFERENCES "public"."clustering_jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
