-- CreateTable
CREATE TABLE "public"."cross_analysis" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "articleAId" UUID NOT NULL,
    "articleBId" UUID NOT NULL,
    "analysisResult" TEXT NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "requestedById" UUID,

    CONSTRAINT "cross_analysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cross_analysis_articleAId_idx" ON "public"."cross_analysis"("articleAId");

-- CreateIndex
CREATE INDEX "cross_analysis_articleBId_idx" ON "public"."cross_analysis"("articleBId");

-- CreateIndex
CREATE INDEX "cross_analysis_requestedById_idx" ON "public"."cross_analysis"("requestedById");

-- CreateIndex
CREATE UNIQUE INDEX "cross_analysis_articleAId_articleBId_key" ON "public"."cross_analysis"("articleAId", "articleBId");

-- AddForeignKey
ALTER TABLE "public"."cross_analysis" ADD CONSTRAINT "cross_analysis_articleAId_fkey" FOREIGN KEY ("articleAId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cross_analysis" ADD CONSTRAINT "cross_analysis_articleBId_fkey" FOREIGN KEY ("articleBId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cross_analysis" ADD CONSTRAINT "cross_analysis_requestedById_fkey" FOREIGN KEY ("requestedById") REFERENCES "public"."user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
