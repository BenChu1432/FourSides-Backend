-- CreateTable
CREATE TABLE "public"."UserTitleProgress" (
    "id" SERIAL NOT NULL,
    "userId" UUID NOT NULL,
    "titleId" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" INTEGER NOT NULL,
    "createdAt" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserTitleProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTitleProgress_userId_titleId_key" ON "public"."UserTitleProgress"("userId", "titleId");

-- AddForeignKey
ALTER TABLE "public"."UserTitleProgress" ADD CONSTRAINT "UserTitleProgress_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "public"."title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserTitleProgress" ADD CONSTRAINT "UserTitleProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
