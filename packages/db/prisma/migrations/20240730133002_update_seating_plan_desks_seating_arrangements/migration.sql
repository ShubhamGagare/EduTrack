/*
  Warnings:

  - You are about to drop the column `deskId` on the `SeatingPlan` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `SeatingPlan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SeatingPlan" DROP CONSTRAINT "SeatingPlan_deskId_fkey";

-- DropForeignKey
ALTER TABLE "SeatingPlan" DROP CONSTRAINT "SeatingPlan_studentId_fkey";

-- DropIndex
DROP INDEX "SeatingPlan_deskId_key";

-- DropIndex
DROP INDEX "SeatingPlan_studentId_key";

-- AlterTable
ALTER TABLE "SeatingPlan" DROP COLUMN "deskId",
DROP COLUMN "studentId";

-- CreateTable
CREATE TABLE "SeatingArrangement" (
    "id" SERIAL NOT NULL,
    "seatingPlanId" INTEGER NOT NULL,
    "deskId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SeatingArrangement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SeatingArrangement_seatingPlanId_deskId_studentId_key" ON "SeatingArrangement"("seatingPlanId", "deskId", "studentId");

-- AddForeignKey
ALTER TABLE "SeatingArrangement" ADD CONSTRAINT "SeatingArrangement_seatingPlanId_fkey" FOREIGN KEY ("seatingPlanId") REFERENCES "SeatingPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeatingArrangement" ADD CONSTRAINT "SeatingArrangement_deskId_fkey" FOREIGN KEY ("deskId") REFERENCES "Desk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeatingArrangement" ADD CONSTRAINT "SeatingArrangement_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
