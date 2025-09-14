-- CreateTable
CREATE TABLE "public"."comment" (
    "id" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "clusterId" UUID NOT NULL,
    "text" TEXT NOT NULL,
    "like_num" INTEGER NOT NULL DEFAULT 0,
    "dislike_num" INTEGER NOT NULL DEFAULT 0,
    "created_at" INTEGER NOT NULL,
    "reply_count" INTEGER NOT NULL DEFAULT 0,
    "parentId" TEXT,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "public"."cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
