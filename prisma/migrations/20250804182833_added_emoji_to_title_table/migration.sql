/*
  Warnings:

  - Added the required column `emoji` to the `title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."title" ADD COLUMN     "emoji" TEXT NOT NULL;
