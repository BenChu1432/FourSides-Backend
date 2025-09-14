-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."MediaNameEnum" ADD VALUE 'TFCNews';
ALTER TYPE "public"."MediaNameEnum" ADD VALUE 'FactcheckLab';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."OriginEnum" ADD VALUE 'MyGoPenNews';
ALTER TYPE "public"."OriginEnum" ADD VALUE 'TFCNews';
ALTER TYPE "public"."OriginEnum" ADD VALUE 'FactcheckLab';
