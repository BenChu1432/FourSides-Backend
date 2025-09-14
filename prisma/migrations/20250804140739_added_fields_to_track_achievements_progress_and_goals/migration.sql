/*
  Warnings:

  - Added the required column `bronze` to the `achievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diamond` to the `achievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gold` to the `achievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platinum` to the `achievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `silver` to the `achievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `progress` to the `user_achievements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."achievements" ADD COLUMN     "bronze" INTEGER NOT NULL,
ADD COLUMN     "diamond" INTEGER NOT NULL,
ADD COLUMN     "gold" INTEGER NOT NULL,
ADD COLUMN     "platinum" INTEGER NOT NULL,
ADD COLUMN     "silver" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."user_achievements" ADD COLUMN     "progress" INTEGER NOT NULL;
