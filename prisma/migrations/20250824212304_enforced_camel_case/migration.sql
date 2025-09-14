/*
  Warnings:

  - You are about to drop the column `dislike_num` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `like_num` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `reply_count` on the `comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."comment" DROP COLUMN "dislike_num",
DROP COLUMN "like_num",
DROP COLUMN "reply_count",
ADD COLUMN     "dislikeNum" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "likeNum" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "replyCount" INTEGER NOT NULL DEFAULT 0;
