/*
  Warnings:

  - The primary key for the `cluster` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `clusterId` column on the `news` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `id` on the `cluster` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."news" DROP CONSTRAINT "news_clusterId_fkey";

-- AlterTable
ALTER TABLE "public"."cluster" DROP CONSTRAINT "cluster_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "cluster_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."news" DROP COLUMN "clusterId",
ADD COLUMN     "clusterId" UUID;

-- AddForeignKey
ALTER TABLE "public"."news" ADD CONSTRAINT "news_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "public"."cluster"("id") ON DELETE SET NULL ON UPDATE CASCADE;
