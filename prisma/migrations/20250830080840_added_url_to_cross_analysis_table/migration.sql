/*
  Warnings:

  - Added the required column `url` to the `cross_analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."cross_analysis" ADD COLUMN     "url" TEXT NOT NULL;
