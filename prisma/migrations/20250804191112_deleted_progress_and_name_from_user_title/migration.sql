/*
  Warnings:

  - You are about to drop the column `name` on the `user_title` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `user_title` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."user_title" DROP COLUMN "name",
DROP COLUMN "progress";
