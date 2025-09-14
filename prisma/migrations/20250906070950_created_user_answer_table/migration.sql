-- CreateTable
CREATE TABLE "public"."user_answer" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "questionId" UUID NOT NULL,
    "selectedOption" TEXT NOT NULL,
    "answeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_answer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_answer_userId_questionId_key" ON "public"."user_answer"("userId", "questionId");

-- AddForeignKey
ALTER TABLE "public"."user_answer" ADD CONSTRAINT "user_answer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_answer" ADD CONSTRAINT "user_answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "public"."news_questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
