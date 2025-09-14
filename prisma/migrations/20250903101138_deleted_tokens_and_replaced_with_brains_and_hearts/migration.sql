/*
  Warnings:

  - You are about to drop the column `tokens` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."user" DROP COLUMN "tokens",
ADD COLUMN     "num_of_brain" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "num_of_hearts" INTEGER NOT NULL DEFAULT 0;
