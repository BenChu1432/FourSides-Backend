-- AlterEnum
ALTER TYPE "public"."ErrorTypeEnum" ADD VALUE 'LLM_ERROR';

-- AlterEnum
ALTER TYPE "public"."MediaNameEnum" ADD VALUE 'MyGoPenNews';

-- AlterTable
ALTER TABLE "public"."cluster" ADD COLUMN     "cluster_question" TEXT;
