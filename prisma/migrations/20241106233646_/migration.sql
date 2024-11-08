/*
  Warnings:

  - You are about to drop the `UserCardProperties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserCollection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserCardProperties" DROP CONSTRAINT "UserCardProperties_userCollectionId_fkey";

-- DropForeignKey
ALTER TABLE "UserCollection" DROP CONSTRAINT "UserCollection_cardId_fkey";

-- DropForeignKey
ALTER TABLE "UserCollection" DROP CONSTRAINT "UserCollection_deckId_fkey";

-- DropForeignKey
ALTER TABLE "UserCollection" DROP CONSTRAINT "UserCollection_userId_fkey";

-- DropTable
DROP TABLE "UserCardProperties";

-- DropTable
DROP TABLE "UserCollection";

-- CreateTable
CREATE TABLE "CardUserCollection" (
    "id" SERIAL NOT NULL,
    "cardId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "deckId" INTEGER,

    CONSTRAINT "CardUserCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardRealPhoto" (
    "id" SERIAL NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "description" TEXT,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "userCollectionId" INTEGER,

    CONSTRAINT "CardRealPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardUserProperties" (
    "id" SERIAL NOT NULL,
    "condition" "CardCondition" NOT NULL,
    "rarity" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "userCollectionId" INTEGER NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CardUserProperties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TradeCard" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userCollectionId" INTEGER NOT NULL,
    "condition" "CardCondition",
    "minRating" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TradeCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardUserFavorite" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "CardUserCollectionId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CardUserFavorite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CardUserCollection" ADD CONSTRAINT "CardUserCollection_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardUserCollection" ADD CONSTRAINT "CardUserCollection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardUserCollection" ADD CONSTRAINT "CardUserCollection_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardRealPhoto" ADD CONSTRAINT "CardRealPhoto_userCollectionId_fkey" FOREIGN KEY ("userCollectionId") REFERENCES "CardUserCollection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardUserProperties" ADD CONSTRAINT "CardUserProperties_userCollectionId_fkey" FOREIGN KEY ("userCollectionId") REFERENCES "CardUserCollection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeCard" ADD CONSTRAINT "TradeCard_userCollectionId_fkey" FOREIGN KEY ("userCollectionId") REFERENCES "CardUserCollection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardUserFavorite" ADD CONSTRAINT "CardUserFavorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardUserFavorite" ADD CONSTRAINT "CardUserFavorite_CardUserCollectionId_fkey" FOREIGN KEY ("CardUserCollectionId") REFERENCES "CardUserCollection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
