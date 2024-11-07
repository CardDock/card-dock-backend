-- CreateIndex
CREATE INDEX "CardRealPhoto_photoUrl_userCollectionId_idx" ON "CardRealPhoto"("photoUrl", "userCollectionId");

-- CreateIndex
CREATE INDEX "CardUserCollection_cardId_userId_idx" ON "CardUserCollection"("cardId", "userId");

-- CreateIndex
CREATE INDEX "Deck_name_userId_isPublic_idx" ON "Deck"("name", "userId", "isPublic");
