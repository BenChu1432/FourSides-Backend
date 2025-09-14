-- CreateTable
CREATE TABLE "public"."Author" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."news_author" (
    "newsId" UUID NOT NULL,
    "authorId" UUID NOT NULL,

    CONSTRAINT "news_author_pkey" PRIMARY KEY ("newsId","authorId")
);

-- AddForeignKey
ALTER TABLE "public"."news_author" ADD CONSTRAINT "news_author_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."news_author" ADD CONSTRAINT "news_author_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
