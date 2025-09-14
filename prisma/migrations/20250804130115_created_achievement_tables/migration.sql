/*
  Warnings:

  - The primary key for the `missions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `missions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `missionId` on the `user_missions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."user_missions" DROP CONSTRAINT "user_missions_missionId_fkey";

-- AlterTable
ALTER TABLE "public"."missions" DROP CONSTRAINT "missions_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "missions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."user_missions" DROP COLUMN "missionId",
ADD COLUMN     "missionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."achievements" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_achievements" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "achievementId" INTEGER NOT NULL,

    CONSTRAINT "user_achievements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_achievements_userId_achievementId_key" ON "public"."user_achievements"("userId", "achievementId");

-- CreateIndex
CREATE UNIQUE INDEX "user_missions_userId_missionId_key" ON "public"."user_missions"("userId", "missionId");

-- AddForeignKey
ALTER TABLE "public"."user_missions" ADD CONSTRAINT "user_missions_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "public"."missions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_achievements" ADD CONSTRAINT "user_achievements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_achievements" ADD CONSTRAINT "user_achievements_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "public"."achievements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
