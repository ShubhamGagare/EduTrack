"use client"
import { UniqueIdentifier } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";
import { LayoutCanvas } from "components/LayoutCanvas";
import { StudentCard } from "components/StudentCard";
import { ReactElement, useState } from "react";

export type CanvasCard = {
  id: UniqueIdentifier;
  coordinates: Coordinates;
  studentCard: ReactElement;
};
export type seatsType = {
  studentId: number;
  coordinates_X: number;
  coordinates_Y: number;
};

function ClassViewClient({ students, seats }: { students: any, seats: any }) {

  
  let StudentsCards: CanvasCard[] = [];

  console.log("seats from db" + JSON.stringify(seats))
  if (seats !== undefined && seats.length > 0) {
    console.log("setting up seats from db" + JSON.stringify((students)))

    students.map((student: any, index: number) =>
      StudentsCards = [...StudentsCards, { id: seats[index].studentId, coordinates: { x: seats[index].coordinates_X, y: seats[index].coordinates_y }, studentCard: <StudentCard title={students[index].user.username} /> }]

    );
  } else {
    console.log("-------------Default seats------------------")
    students.map((student: any, index: number) =>
      StudentsCards = [...StudentsCards, { id: index, coordinates: { x: 0, y: 120 * index + 120 }, studentCard: <StudentCard title={students[index].user.username} /> }]

    );
  }
  const [cards, setCards] = useState<CanvasCard[]>(StudentsCards);

  console.log("cards updated--->")
  console.log(cards)

  return <LayoutCanvas cards={cards} setCards={setCards} students={students?.students} />;
}

export default ClassViewClient
