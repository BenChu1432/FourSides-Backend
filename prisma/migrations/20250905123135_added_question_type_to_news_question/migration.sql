-- CreateEnum
CREATE TYPE "public"."QuestionType" AS ENUM ('TRUE_FALSE_NOT_GIVEN_QUESTION', 'MISGUIDING_TECHNIQUES_QUESTION');

-- AlterTable
ALTER TABLE "public"."news_questions" ADD COLUMN     "type" "public"."QuestionType" NOT NULL DEFAULT 'TRUE_FALSE_NOT_GIVEN_QUESTION';
