-- CreateEnum
CREATE TYPE "public"."EntityLabelEnum" AS ENUM ('PERSON', 'ORG', 'GPE', 'LOC');

-- CreateTable
CREATE TABLE "public"."news_entities" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "entity" TEXT NOT NULL,
    "label" "public"."EntityLabelEnum" NOT NULL,
    "newsId" UUID NOT NULL,

    CONSTRAINT "news_entities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "news_entities_entity_idx" ON "public"."news_entities"("entity");

-- CreateIndex
CREATE UNIQUE INDEX "news_entities_entity_newsId_key" ON "public"."news_entities"("entity", "newsId");

-- AddForeignKey
ALTER TABLE "public"."news_entities" ADD CONSTRAINT "news_entities_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
