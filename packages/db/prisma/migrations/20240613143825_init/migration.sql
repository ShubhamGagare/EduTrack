/*
  Warnings:

  - You are about to drop the column `studentId` on the `Register` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Register" DROP CONSTRAINT "Register_studentId_fkey";

-- AlterTable
ALTER TABLE "Register" DROP COLUMN "studentId";

-- CreateTable
CREATE TABLE "_RegisterToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RegisterToStudent_AB_unique" ON "_RegisterToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_RegisterToStudent_B_index" ON "_RegisterToStudent"("B");

-- AddForeignKey
ALTER TABLE "_RegisterToStudent" ADD CONSTRAINT "_RegisterToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Register"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RegisterToStudent" ADD CONSTRAINT "_RegisterToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
