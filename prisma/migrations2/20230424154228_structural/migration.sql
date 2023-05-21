/*
  Warnings:

  - The primary key for the `Charge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deleted` on the `Charge` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Charge` table. All the data in the column will be lost.
  - You are about to drop the column `queryByUserId` on the `Charge` table. All the data in the column will be lost.
  - You are about to drop the column `chargeId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `helpfulCounter` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `notHelpfulCounter` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chargeName` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `displayName` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Charge" DROP CONSTRAINT "Charge_queryByUserId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_chargeId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_ownerId_fkey";

-- AlterTable
ALTER TABLE "Charge" DROP CONSTRAINT "Charge_pkey",
DROP COLUMN "deleted",
DROP COLUMN "id",
DROP COLUMN "queryByUserId",
ADD CONSTRAINT "Charge_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "chargeId",
DROP COLUMN "helpfulCounter",
DROP COLUMN "notHelpfulCounter",
DROP COLUMN "ownerId",
ADD COLUMN     "chargeName" TEXT NOT NULL,
ADD COLUMN     "dislikeCounter" INTEGER,
ADD COLUMN     "displayName" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "likeCounter" INTEGER;

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "Comment_email_key" ON "Comment"("email");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_chargeName_fkey" FOREIGN KEY ("chargeName") REFERENCES "Charge"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
