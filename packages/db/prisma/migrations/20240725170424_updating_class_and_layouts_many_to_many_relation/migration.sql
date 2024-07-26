-- AlterTable
ALTER TABLE "Desk" ALTER COLUMN "x" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "y" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "_ClassLayouts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassLayouts_AB_unique" ON "_ClassLayouts"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassLayouts_B_index" ON "_ClassLayouts"("B");

-- AddForeignKey
ALTER TABLE "_ClassLayouts" ADD CONSTRAINT "_ClassLayouts_A_fkey" FOREIGN KEY ("A") REFERENCES "Cls"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassLayouts" ADD CONSTRAINT "_ClassLayouts_B_fkey" FOREIGN KEY ("B") REFERENCES "Layout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
