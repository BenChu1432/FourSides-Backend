/*
  Warnings:

  - You are about to drop the `achievements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `missions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_achievements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_missions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."user_achievements" DROP CONSTRAINT "user_achievements_achievementId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_achievements" DROP CONSTRAINT "user_achievements_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_missions" DROP CONSTRAINT "user_missions_missionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_missions" DROP CONSTRAINT "user_missions_userId_fkey";

-- DropTable
DROP TABLE "public"."achievements";

-- DropTable
DROP TABLE "public"."missions";

-- DropTable
DROP TABLE "public"."user_achievements";

-- DropTable
DROP TABLE "public"."user_missions";

-- CreateTable
CREATE TABLE "public"."mission" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "public"."MissionType" NOT NULL,
    "reward" INTEGER NOT NULL DEFAULT 0,
    "requirement" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_mission" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "missionId" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "finishedAt" INTEGER,
    "updatedAt" INTEGER NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "user_mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."title" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,

    CONSTRAINT "title_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."userTitle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "titleId" INTEGER NOT NULL,

    CONSTRAINT "userTitle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."achievement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "unknown" INTEGER NOT NULL DEFAULT 0,
    "bronze" INTEGER NOT NULL DEFAULT 1,
    "silver" INTEGER NOT NULL,
    "gold" INTEGER NOT NULL,
    "platinum" INTEGER NOT NULL,
    "diamond" INTEGER NOT NULL,

    CONSTRAINT "achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_achievement" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "achievementId" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL,

    CONSTRAINT "user_achievement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_mission_userId_missionId_key" ON "public"."user_mission"("userId", "missionId");

-- CreateIndex
CREATE UNIQUE INDEX "userTitle_userId_titleId_key" ON "public"."userTitle"("userId", "titleId");

-- CreateIndex
CREATE UNIQUE INDEX "user_achievement_userId_achievementId_key" ON "public"."user_achievement"("userId", "achievementId");

-- AddForeignKey
ALTER TABLE "public"."user_mission" ADD CONSTRAINT "user_mission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_mission" ADD CONSTRAINT "user_mission_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "public"."mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."userTitle" ADD CONSTRAINT "userTitle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."userTitle" ADD CONSTRAINT "userTitle_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "public"."title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_achievement" ADD CONSTRAINT "user_achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_achievement" ADD CONSTRAINT "user_achievement_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "public"."achievement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
