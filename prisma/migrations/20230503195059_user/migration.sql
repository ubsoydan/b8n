/*
  Warnings:

  - Made the column `dislikeCounter` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `likeCounter` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Charge" ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "viewsCount" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "dislikeCounter" SET NOT NULL,
ALTER COLUMN "dislikeCounter" SET DEFAULT 0,
ALTER COLUMN "likeCounter" SET NOT NULL,
ALTER COLUMN "likeCounter" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_likes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_dislikes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_likes_AB_unique" ON "_likes"("A", "B");

-- CreateIndex
CREATE INDEX "_likes_B_index" ON "_likes"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_dislikes_AB_unique" ON "_dislikes"("A", "B");

-- CreateIndex
CREATE INDEX "_dislikes_B_index" ON "_dislikes"("B");

-- CreateIndex
CREATE INDEX "Charge_viewsCount_idx" ON "Charge"("viewsCount");

-- AddForeignKey
ALTER TABLE "_likes" ADD CONSTRAINT "_likes_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_likes" ADD CONSTRAINT "_likes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_dislikes" ADD CONSTRAINT "_dislikes_A_fkey" FOREIGN KEY ("A") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_dislikes" ADD CONSTRAINT "_dislikes_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
