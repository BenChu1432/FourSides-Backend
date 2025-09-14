/*
  Warnings:

  - You are about to drop the column `num_of_brain` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "num_of_brain",
ADD COLUMN     "num_of_brains" INTEGER NOT NULL DEFAULT 0;
