-- AlterTable
ALTER TABLE "Attendance" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT now();
