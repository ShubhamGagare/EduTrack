/*
  Warnings:

  - You are about to drop the column `status` on the `Register` table. All the data in the column will be lost.
  - You are about to drop the `_RegisterToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RegisterToStudent" DROP CONSTRAINT "_RegisterToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_RegisterToStudent" DROP CONSTRAINT "_RegisterToStudent_B_fkey";

-- AlterTable
ALTER TABLE "Register" DROP COLUMN "status";

-- DropTable
DROP TABLE "_RegisterToStudent";

-- CreateTable
CREATE TABLE "Attendance" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "registerId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_registerId_fkey" FOREIGN KEY ("registerId") REFERENCES "Register"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
