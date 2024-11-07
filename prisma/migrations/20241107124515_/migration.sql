-- CreateEnum
CREATE TYPE "TradeStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELED');

-- CreateTable
CREATE TABLE "DeckUserFavorite" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "deckId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeckUserFavorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TradeTransactionComplete" (
    "id" SERIAL NOT NULL,
    "sendCardId" INTEGER NOT NULL,
    "getCardId" INTEGER NOT NULL,
    "status" "TradeStatus" NOT NULL DEFAULT 'PENDING',
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TradeTransactionComplete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TradeInterest" (
    "id" SERIAL NOT NULL,
    "interestUserId" INTEGER NOT NULL,
    "interestCardId" INTEGER NOT NULL,
    "tradeStatus" "TradeStatus" NOT NULL DEFAULT 'PENDING',
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TradeInterest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DeckUserFavorite" ADD CONSTRAINT "DeckUserFavorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeckUserFavorite" ADD CONSTRAINT "DeckUserFavorite_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeTransactionComplete" ADD CONSTRAINT "TradeTransactionComplete_sendCardId_fkey" FOREIGN KEY ("sendCardId") REFERENCES "CardUserCollection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeTransactionComplete" ADD CONSTRAINT "TradeTransactionComplete_getCardId_fkey" FOREIGN KEY ("getCardId") REFERENCES "CardUserCollection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeInterest" ADD CONSTRAINT "TradeInterest_interestUserId_fkey" FOREIGN KEY ("interestUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeInterest" ADD CONSTRAINT "TradeInterest_interestCardId_fkey" FOREIGN KEY ("interestCardId") REFERENCES "CardUserCollection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
