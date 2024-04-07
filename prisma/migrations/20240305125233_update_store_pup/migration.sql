/*
  Warnings:

  - A unique constraint covering the columns `[storeId]` on the table `store_pub` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `storeId` to the `store_pub` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "store_pub" ADD COLUMN     "storeId" VARCHAR(36) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "store_pub_storeId_key" ON "store_pub"("storeId");

-- AddForeignKey
ALTER TABLE "store_pub" ADD CONSTRAINT "store_pub_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
