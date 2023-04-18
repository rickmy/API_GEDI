/*
  Warnings:

  - You are about to drop the column `instituteId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_instituteId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "instituteId",
ADD COLUMN     "careerId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "Career"("id") ON DELETE SET NULL ON UPDATE CASCADE;
