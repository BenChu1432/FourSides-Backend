-- AlterTable
ALTER TABLE "public"."news" ADD COLUMN     "num_of_dislikes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "num_of_likes" INTEGER NOT NULL DEFAULT 0;
