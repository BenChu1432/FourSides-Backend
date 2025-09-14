/*
  Warnings:

  - Added the required column `condition` to the `title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."title" ADD COLUMN     "condition" TEXT NOT NULL;
