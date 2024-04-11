-- CreateTable
CREATE TABLE "Filez" (
    "id" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "fileBytes" BYTEA NOT NULL,

    CONSTRAINT "Filez_pkey" PRIMARY KEY ("id")
);
