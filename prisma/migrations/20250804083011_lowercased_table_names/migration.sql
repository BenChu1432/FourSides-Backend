/*
  Warnings:

  - You are about to drop the `Mission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserMission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."UserMission" DROP CONSTRAINT "UserMission_missionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserMission" DROP CONSTRAINT "UserMission_userId_fkey";

-- DropTable
DROP TABLE "public"."Mission";

-- DropTable
DROP TABLE "public"."UserMission";

-- CreateTable
CREATE TABLE "public"."missions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "type" "public"."MissionType" NOT NULL,
    "reward" INTEGER NOT NULL DEFAULT 0,
    "requirement" INTEGER NOT NULL DEFAULT 1,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "missions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_missions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "missionId" UUID NOT NULL,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "finishedAt" INTEGER NOT NULL,
    "updatedAt" INTEGER NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "user_missions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_missions_userId_key" ON "public"."user_missions"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_missions_missionId_key" ON "public"."user_missions"("missionId");

-- CreateIndex
CREATE UNIQUE INDEX "user_missions_userId_missionId_key" ON "public"."user_missions"("userId", "missionId");

-- AddForeignKey
ALTER TABLE "public"."user_missions" ADD CONSTRAINT "user_missions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_missions" ADD CONSTRAINT "user_missions_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "public"."missions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
