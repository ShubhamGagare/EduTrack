
import { UniqueIdentifier } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";

import Desk from "components/Desk";
import { StudentCard } from "components/StudentCard";
import { ReactElement } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui";
import { SeatingCanvas } from "components/SeatingCanvas";
import { addSeatingPlan, getClasses, getClassStudents, getStudentData } from "app/utils/utils";

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
export type studentsType = [{ "user": { "username": string } }]
export type propSeatingType = { desks: CanvasCard[], clsId: string, seatingPlanName: string, students: studentsType,layoutId:number}

export const getStudentDetails = async (id:number) => {
  console.log("id----->"+id)
  const response = await getStudentData(id);
  console.log("student d---->"+JSON.stringify(response))

  return response;
}


export const saveSeatingPlan = async(plan:any) => {
  const response = addSeatingPlan(plan)
}

export default async function AddSeatingPlan({ data }: any) {

  console.log("Loading seating plan--->" + JSON.stringify(data));



  const students:any = await getClassStudents(Number(data.clsId));
  console.log("students------->" + JSON.stringify(students))

  const deskCards: CanvasCard[] = []
  data.desks.map((desk: any) => {
    deskCards.push({ id: desk.id, coordinates: { x: desk.x, y: desk.y }, studentCard: <Desk><></></Desk> })
  })

  const props: propSeatingType = {
    desks: deskCards,
    clsId: data.clsId,
    seatingPlanName: data.seatingPlanName,
    students: students,
    layoutId:data.layoutId
  }
  return <SeatingCanvas props={props} />
}


