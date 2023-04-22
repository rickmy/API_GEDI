-- AlterTable
ALTER TABLE "Documents" ADD COLUMN     "documentsTypeId" INTEGER;

-- CreateTable
CREATE TABLE "DocumentsType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentsType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentsType_name_key" ON "DocumentsType"("name");

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_documentsTypeId_fkey" FOREIGN KEY ("documentsTypeId") REFERENCES "DocumentsType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
