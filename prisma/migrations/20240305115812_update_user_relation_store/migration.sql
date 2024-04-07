/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `resetPasswordRequest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ownerId]` on the table `store` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `userVerificationRequest` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "store" ADD COLUMN     "ownerId" VARCHAR(36) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "resetPasswordRequest_userId_key" ON "resetPasswordRequest"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "store_ownerId_key" ON "store"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "userVerificationRequest_userId_key" ON "userVerificationRequest"("userId");

-- AddForeignKey
ALTER TABLE "resetPasswordRequest" ADD CONSTRAINT "resetPasswordRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userVerificationRequest" ADD CONSTRAINT "userVerificationRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store" ADD CONSTRAINT "store_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
