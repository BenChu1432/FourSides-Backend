/*
  Warnings:

  - Added the required column `condition_description` to the `title` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `condition` on the `title` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."title" ADD COLUMN     "condition_description" TEXT NOT NULL,
DROP COLUMN "condition",
ADD COLUMN     "condition" INTEGER NOT NULL;
