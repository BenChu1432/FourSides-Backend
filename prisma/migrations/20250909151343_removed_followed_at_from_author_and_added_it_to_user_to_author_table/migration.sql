/*
  Warnings:

  - You are about to drop the column `followedAt` on the `author` table. All the data in the column will be lost.
  - The `followedAt` column on the `user_to_author` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."author" DROP COLUMN "followedAt";

-- AlterTable
ALTER TABLE "public"."user_to_author" DROP COLUMN "followedAt",
ADD COLUMN     "followedAt" INTEGER;
