-- CreateTable
CREATE TABLE "Charge" (
    "name" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "companyName" TEXT,
    "website" TEXT,
    "contactWeb" TEXT,
    "contactPhone" TEXT,

    CONSTRAINT "Charge_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "commentType" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dislikes" INTEGER NOT NULL DEFAULT 0,
    "chargeName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Charge_name_key" ON "Charge"("name");

-- CreateIndex
CREATE INDEX "Charge_views_idx" ON "Charge"("views");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_chargeName_fkey" FOREIGN KEY ("chargeName") REFERENCES "Charge"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
