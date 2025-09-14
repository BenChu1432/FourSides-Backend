/*
  Warnings:

  - You are about to drop the column `created_at` on the `comment` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."comment" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" INTEGER NOT NULL;
