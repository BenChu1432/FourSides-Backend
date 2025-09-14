-- CreateEnum
CREATE TYPE "public"."NotificationType" AS ENUM ('RECOMMENDATION', 'COMMENT_REPLY', 'MISINFORMATION_ALERT', 'COMMENT_LIKED', 'OTHER');

-- CreateTable
CREATE TABLE "public"."notification" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "senderId" UUID,
    "type" "public"."NotificationType" NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT,
    "content" TEXT,
    "imageUrl" TEXT,
    "newsId" UUID,
    "commentId" UUID,
    "clusterId" UUID,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "notification_userId_idx" ON "public"."notification"("userId");

-- CreateIndex
CREATE INDEX "notification_senderId_idx" ON "public"."notification"("senderId");

-- CreateIndex
CREATE INDEX "notification_type_idx" ON "public"."notification"("type");

-- AddForeignKey
ALTER TABLE "public"."notification" ADD CONSTRAINT "notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notification" ADD CONSTRAINT "notification_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "public"."user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notification" ADD CONSTRAINT "notification_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "public"."news"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notification" ADD CONSTRAINT "notification_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "public"."comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notification" ADD CONSTRAINT "notification_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "public"."cluster"("id") ON DELETE SET NULL ON UPDATE CASCADE;
