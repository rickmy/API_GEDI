/*
  Warnings:

  - A unique constraint covering the columns `[acronym]` on the table `DocumentsType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `acronym` to the `DocumentsType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DocumentsType" ADD COLUMN     "acronym" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DocumentsType_acronym_key" ON "DocumentsType"("acronym");
