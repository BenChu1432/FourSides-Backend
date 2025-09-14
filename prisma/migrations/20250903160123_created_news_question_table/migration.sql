-- CreateTable
CREATE TABLE "public"."news_questions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "question" TEXT NOT NULL,
    "options" JSONB NOT NULL,
    "answer" TEXT NOT NULL,
    "explanation" TEXT,
    "newsId" UUID NOT NULL,

    CONSTRAINT "news_questions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."news_questions" ADD CONSTRAINT "news_questions_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
