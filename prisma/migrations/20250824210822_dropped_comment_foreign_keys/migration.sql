/*
  Warnings:

  - The primary key for the `comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clusterId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `comment` table. All the data in the column will be lost.
  - The `id` column on the `comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "public"."comment" DROP CONSTRAINT "comment_clusterId_fkey";

-- DropForeignKey
ALTER TABLE "public"."comment" DROP CONSTRAINT "comment_parentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."comment" DROP CONSTRAINT "comment_userId_fkey";

-- AlterTable
ALTER TABLE "public"."comment" DROP CONSTRAINT "comment_pkey",
DROP COLUMN "clusterId",
DROP COLUMN "parentId",
DROP COLUMN "userId",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "comment_pkey" PRIMARY KEY ("id");
