/*
  Warnings:

  - Added the required column `classId` to the `ClassView` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ClassView" ADD COLUMN     "classId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ClassView" ADD CONSTRAINT "ClassView_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Cls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
