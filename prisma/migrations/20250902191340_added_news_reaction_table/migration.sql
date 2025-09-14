-- CreateTable
CREATE TABLE "public"."NewsReaction" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "newsId" UUID NOT NULL,
    "type" "public"."ReactionType" NOT NULL,
    "createdAt" BIGINT NOT NULL,

    CONSTRAINT "NewsReaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."NewsReaction" ADD CONSTRAINT "NewsReaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."NewsReaction" ADD CONSTRAINT "NewsReaction_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
