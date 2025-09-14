/*
  Warnings:

  - Added the required column `clusterId` to the `user_answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."user_answer" ADD COLUMN     "clusterId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."user_answer" ADD CONSTRAINT "user_answer_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "public"."cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
