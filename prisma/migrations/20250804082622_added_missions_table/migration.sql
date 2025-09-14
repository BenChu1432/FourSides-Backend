-- CreateEnum
CREATE TYPE "public"."MissionType" AS ENUM ('DAILY', 'ONE_TIME', 'INFINITE');

-- CreateTable
CREATE TABLE "public"."Mission" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "type" "public"."MissionType" NOT NULL,
    "reward" INTEGER NOT NULL DEFAULT 0,
    "requirement" INTEGER NOT NULL DEFAULT 1,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserMission" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "missionId" UUID NOT NULL,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),
    "finishedAt" INTEGER NOT NULL,
    "updatedAt" INTEGER NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "UserMission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserMission_userId_key" ON "public"."UserMission"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserMission_missionId_key" ON "public"."UserMission"("missionId");

-- CreateIndex
CREATE UNIQUE INDEX "UserMission_userId_missionId_key" ON "public"."UserMission"("userId", "missionId");

-- AddForeignKey
ALTER TABLE "public"."UserMission" ADD CONSTRAINT "UserMission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserMission" ADD CONSTRAINT "UserMission_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "public"."Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
