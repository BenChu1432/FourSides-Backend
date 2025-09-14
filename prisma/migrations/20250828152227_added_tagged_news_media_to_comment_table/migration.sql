-- AlterTable
ALTER TABLE "public"."comment" ADD COLUMN     "taggedNewsMediaId" UUID;

-- AddForeignKey
ALTER TABLE "public"."comment" ADD CONSTRAINT "comment_taggedNewsMediaId_fkey" FOREIGN KEY ("taggedNewsMediaId") REFERENCES "public"."news_media"("id") ON DELETE SET NULL ON UPDATE CASCADE;
