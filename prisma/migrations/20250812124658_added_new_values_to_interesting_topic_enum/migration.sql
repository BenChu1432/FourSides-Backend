-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."InterestingTopic" ADD VALUE '天氣';
ALTER TYPE "public"."InterestingTopic" ADD VALUE '公共衞生';
ALTER TYPE "public"."InterestingTopic" ADD VALUE '災害';
