
import { UniqueIdentifier } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";

import Desk from "components/Desk";
import { StudentCard } from "components/StudentCard";
import { ReactElement } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui";
import { SeatingCanvas } from "components/SeatingCanvas";
import { getClasses, getClassStudents } from "app/utils/utils";

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

export default async function AddSeatingPlan(desks: any) {

  console.log("Loading seating plan");



  //const students = await getClassStudents();
  //console.log("c------->"+JSON.stringify(clses))

  const deskCards: CanvasCard[] = []
  desks.desks.map((desk: any) => {
    deskCards.push({ id: desk.id, coordinates: { x: desk.x, y: desk.y }, studentCard: <Desk><></></Desk> })
  })


  return <SeatingCanvas  desks={deskCards} clsName={"clsName"} />
}


