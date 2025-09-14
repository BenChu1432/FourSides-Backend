/*
  Warnings:

  - You are about to drop the `userTitle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."userTitle" DROP CONSTRAINT "userTitle_titleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."userTitle" DROP CONSTRAINT "userTitle_userId_fkey";

-- DropTable
DROP TABLE "public"."userTitle";

-- CreateTable
CREATE TABLE "public"."user_title" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "titleId" INTEGER NOT NULL,

    CONSTRAINT "user_title_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_title_userId_titleId_key" ON "public"."user_title"("userId", "titleId");

-- AddForeignKey
ALTER TABLE "public"."user_title" ADD CONSTRAINT "user_title_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_title" ADD CONSTRAINT "user_title_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "public"."title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
