-- CreateEnum
CREATE TYPE "public"."ReactionType" AS ENUM ('LIKE', 'DISLIKE');

-- CreateTable
CREATE TABLE "public"."comment_reaction" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "commentId" UUID NOT NULL,
    "type" "public"."ReactionType" NOT NULL,
    "createdAt" INTEGER NOT NULL,

    CONSTRAINT "comment_reaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "comment_reaction_commentId_type_idx" ON "public"."comment_reaction"("commentId", "type");

-- CreateIndex
CREATE INDEX "comment_reaction_userId_type_idx" ON "public"."comment_reaction"("userId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "comment_reaction_userId_commentId_key" ON "public"."comment_reaction"("userId", "commentId");

-- AddForeignKey
ALTER TABLE "public"."comment_reaction" ADD CONSTRAINT "comment_reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comment_reaction" ADD CONSTRAINT "comment_reaction_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "public"."comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
