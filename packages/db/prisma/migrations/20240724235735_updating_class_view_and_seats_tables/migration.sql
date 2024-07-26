/*
  Warnings:

  - You are about to drop the column `seatId` on the `ClassView` table. All the data in the column will be lost.
  - Added the required column `classViewId` to the `Seat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ClassView" DROP CONSTRAINT "ClassView_seatId_fkey";

-- AlterTable
ALTER TABLE "ClassView" DROP COLUMN "seatId";

-- AlterTable
ALTER TABLE "Seat" ADD COLUMN     "classViewId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_classViewId_fkey" FOREIGN KEY ("classViewId") REFERENCES "ClassView"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
