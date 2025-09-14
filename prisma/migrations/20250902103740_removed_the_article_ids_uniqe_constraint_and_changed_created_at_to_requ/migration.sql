/*
  Warnings:

  - You are about to drop the column `createdAt` on the `cross_analysis` table. All the data in the column will be lost.
  - Added the required column `requestedAt` to the `cross_analysis` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."cross_analysis_articleAId_articleBId_key";

-- AlterTable
ALTER TABLE "public"."cross_analysis" DROP COLUMN "createdAt",
ADD COLUMN     "requestedAt" INTEGER NOT NULL;
