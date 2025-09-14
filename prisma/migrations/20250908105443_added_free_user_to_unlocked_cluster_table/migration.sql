-- CreateTable
CREATE TABLE "public"."free_user_to_unlocked_cluster" (
    "id" UUID NOT NULL,
    "clusterId" UUID NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "free_user_to_unlocked_cluster_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."free_user_to_unlocked_cluster" ADD CONSTRAINT "free_user_to_unlocked_cluster_clusterId_fkey" FOREIGN KEY ("clusterId") REFERENCES "public"."cluster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."free_user_to_unlocked_cluster" ADD CONSTRAINT "free_user_to_unlocked_cluster_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
