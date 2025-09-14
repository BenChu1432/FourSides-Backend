/*
  Warnings:

  - You are about to drop the `_AuthorToNewsMedia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_AuthorToNewsMedia" DROP CONSTRAINT "_AuthorToNewsMedia_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_AuthorToNewsMedia" DROP CONSTRAINT "_AuthorToNewsMedia_B_fkey";

-- DropTable
DROP TABLE "public"."_AuthorToNewsMedia";
