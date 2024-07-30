/*
  Warnings:

  - Added the required column `layoutId` to the `SeatingPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SeatingPlan" ADD COLUMN     "layoutId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "Desk_layoutId_idx" ON "Desk"("layoutId");

-- AddForeignKey
ALTER TABLE "SeatingPlan" ADD CONSTRAINT "SeatingPlan_layoutId_fkey" FOREIGN KEY ("layoutId") REFERENCES "Layout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
