/*
  Warnings:

  - Added the required column `createdAt` to the `user_title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."user_title" ADD COLUMN     "createdAt" INTEGER NOT NULL;
