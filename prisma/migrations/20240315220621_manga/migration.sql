/*
  Warnings:

  - You are about to drop the `_orderToproduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `card` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `store` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `store_pub` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wishlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_orderToproduct" DROP CONSTRAINT "_orderToproduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_orderToproduct" DROP CONSTRAINT "_orderToproduct_B_fkey";

-- DropForeignKey
ALTER TABLE "card" DROP CONSTRAINT "card_productId_fkey";

-- DropForeignKey
ALTER TABLE "card" DROP CONSTRAINT "card_userId_fkey";

-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_productId_fkey";

-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_userId_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "store" DROP CONSTRAINT "store_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "store_pub" DROP CONSTRAINT "store_pub_storeId_fkey";

-- DropForeignKey
ALTER TABLE "wishlist" DROP CONSTRAINT "wishlist_productId_fkey";

-- DropForeignKey
ALTER TABLE "wishlist" DROP CONSTRAINT "wishlist_userId_fkey";

-- DropTable
DROP TABLE "_orderToproduct";

-- DropTable
DROP TABLE "card";

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "comment";

-- DropTable
DROP TABLE "order";

-- DropTable
DROP TABLE "product";

-- DropTable
DROP TABLE "store";

-- DropTable
DROP TABLE "store_pub";

-- DropTable
DROP TABLE "wishlist";

-- CreateTable
CREATE TABLE "scrapeWebsite" (
    "id" VARCHAR(36) NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "scrapeWebsite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manga" (
    "id" VARCHAR(36) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "poster" TEXT NOT NULL DEFAULT '',
    "rate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "author" TEXT NOT NULL DEFAULT '',
    "artist" TEXT NOT NULL DEFAULT '',
    "genres" TEXT[],
    "lastChapter" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "websiteId" TEXT NOT NULL,

    CONSTRAINT "manga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "scrapeWebsite_url_key" ON "scrapeWebsite"("url");

-- CreateIndex
CREATE INDEX "idx_manga_title" ON "manga"("title");

-- AddForeignKey
ALTER TABLE "manga" ADD CONSTRAINT "manga_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "scrapeWebsite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
