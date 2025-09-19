/*
  Warnings:

  - You are about to drop the `UserTitleProgress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."UserTitleProgress" DROP CONSTRAINT "UserTitleProgress_titleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserTitleProgress" DROP CONSTRAINT "UserTitleProgress_userId_fkey";

-- DropTable
DROP TABLE "public"."UserTitleProgress";

-- CreateTable
CREATE TABLE "public"."user_title_progress" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "titleId" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" INTEGER NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_title_progress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_title_progress_userId_titleId_key" ON "public"."user_title_progress"("userId", "titleId");

-- AddForeignKey
ALTER TABLE "public"."user_title_progress" ADD CONSTRAINT "user_title_progress_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "public"."title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_title_progress" ADD CONSTRAINT "user_title_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
