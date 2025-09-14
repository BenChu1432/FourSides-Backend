-- CreateTable
CREATE TABLE "public"."user_to_author" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "authorId" UUID NOT NULL,
    "followedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_to_author_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_to_author_userId_authorId_key" ON "public"."user_to_author"("userId", "authorId");

-- AddForeignKey
ALTER TABLE "public"."user_to_author" ADD CONSTRAINT "user_to_author_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_to_author" ADD CONSTRAINT "user_to_author_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
