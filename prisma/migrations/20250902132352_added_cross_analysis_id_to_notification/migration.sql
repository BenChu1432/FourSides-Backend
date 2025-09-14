-- AlterTable
ALTER TABLE "public"."notification" ADD COLUMN     "crossAnalysisId" UUID;

-- AddForeignKey
ALTER TABLE "public"."notification" ADD CONSTRAINT "notification_crossAnalysisId_fkey" FOREIGN KEY ("crossAnalysisId") REFERENCES "public"."cross_analysis"("id") ON DELETE SET NULL ON UPDATE CASCADE;
