-- CreateEnum
CREATE TYPE "public"."CommentType" AS ENUM ('COMMENT', 'REPLY_TO_COMMENT', 'REPLY_TO_REPLY');

-- AlterTable
ALTER TABLE "public"."comment" ADD COLUMN     "type" "public"."CommentType" NOT NULL DEFAULT 'COMMENT';
