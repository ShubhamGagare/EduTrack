-- CreateTable
CREATE TABLE "ClassView" (
    "id" SERIAL NOT NULL,
    "seatId" INTEGER NOT NULL,

    CONSTRAINT "ClassView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seat" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "coordinates_X" DOUBLE PRECISION NOT NULL,
    "coordinates_y" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClassView" ADD CONSTRAINT "ClassView_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES "Seat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
