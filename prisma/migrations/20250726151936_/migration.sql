-- CreateTable
CREATE TABLE "cards_yugioh" (
    "id" UUID NOT NULL,
    "original_name" TEXT NOT NULL,
    "id_external_api" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cards_yugioh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards_yugioh_user" (
    "id" UUID NOT NULL,
    "id_user" UUID NOT NULL,
    "id_card_yugioh" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cards_yugioh_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "id_driver_user" TEXT NOT NULL,
    "email" TEXT,
    "username" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cards_yugioh_user" ADD CONSTRAINT "cards_yugioh_user_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards_yugioh_user" ADD CONSTRAINT "cards_yugioh_user_id_card_yugioh_fkey" FOREIGN KEY ("id_card_yugioh") REFERENCES "cards_yugioh"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
