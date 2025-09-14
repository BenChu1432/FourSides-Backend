/*
  Warnings:

  - Changed the type of `answeredAt` on the `user_answer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."user_answer" DROP COLUMN "answeredAt",
ADD COLUMN     "answeredAt" INTEGER NOT NULL;
