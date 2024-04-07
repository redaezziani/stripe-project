/*
  Warnings:

  - You are about to drop the `Store_Pub` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Store_Pub";

-- CreateTable
CREATE TABLE "store_pub" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Store_Pub_pkey" PRIMARY KEY ("id")
);
