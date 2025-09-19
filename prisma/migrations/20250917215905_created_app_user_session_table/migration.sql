-- CreateTable
CREATE TABLE "public"."user_app_session" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER,

    CONSTRAINT "user_app_session_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."user_app_session" ADD CONSTRAINT "user_app_session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
