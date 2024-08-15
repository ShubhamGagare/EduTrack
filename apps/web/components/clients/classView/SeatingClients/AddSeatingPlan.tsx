
import { UniqueIdentifier } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";

import Desk from "components/Desk";
import { StudentCard } from "components/StudentCard";
import { ReactElement } from "react";
import { Avatar, AvatarFallback, AvatarImage, Button, Label, Separator } from "@repo/ui";
import { getAllComments, SeatingCanvas } from "components/SeatingCanvas";
import { addSeatingPlan, addSeatingPlanType, getClassStudents, getStudentData } from "../../../../app/utils/utils";
import SeatingPlanClient from "../SeatingPlanClient";
import { Badge, MessageSquareText } from "lucide-react";
import { Prisma } from "../../../../../../packages/db/prisma/generated/client";
//import { deskType } from "app/(dashboard)/class-view/class-layout/[...layout]/page";

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

export type studentsType = Prisma.StudentGetPayload<{
  select: {
    id: true,
    user: {
      select: {
        username: true
      }
    }
  }
}>;

type seatingArrangementType = Prisma.SeatingArrangementGetPayload<{
  select: {
    id: true,
    deskId: true,
    studentId: true
  }
}>
type planType = {
  id: number,
  name: string,
  layoutId: number,
  classId: number,
  seatingArrangements:seatingArrangementType[],
  oldSeatingArrangements: seatingArrangementType[]

}

//export type studentsType = [{ "user": { "username": string } }]
export type propSeatingType = { canvasType: string, desks: CanvasCard[], clsId: string, seatingPlanName: string, students: studentsType, layoutId: number, seatingPlanId: number, seatingArrangements: seatingArrangementType[] }

export const getStudentDetails = async (id: number) => {
  const response = await getStudentData(id);

  return response;
}


export const saveSeatingPlan: addSeatingPlanType = async (plan: planType) => {
  const response = await addSeatingPlan(plan)
  return response
}


export const findStudentById = (students: any, id: number) => {
  let student = {};
  console.log("student id--->"+id)
  
  console.log("Array students-------->"+JSON.stringify(students))
  for (var i:number = 0; i < students.length; i++) {
    //const student =students.map((student: any, index: number) => {

    if (students[i].id === id) {
      student = students[i];
      break;
    }

  };
  // if(student!== null){
  return student;

  // }
}





async function getStudDetails(students: studentsType[], id: number) {
  let studentDetails: any;
  //for (var i = 0; i < students.length; i++) {
  const data = await Promise.all(students.map(async (student: studentsType, index: number): Promise<any> => {
    if (student.id === id) {
      studentDetails = await getStudentDetails(id);
    }
  }));
  return studentDetails;
}




//Main 
export default async function AddSeatingPlan({ data }: any) {

  const students: any = await getClassStudents(Number(data.clsId));

  const deskCards: CanvasCard[] = []
  const seatingArrangements = data.seatingPlan.seatingArrangement;
  await Promise.all(data.desks.map(async (desk: any, index: number): Promise<any> => {

    let studentCard = <Desk><></></Desk>
    let isbreak = false;
    if (seatingArrangements !== undefined) {
      await Promise.all(seatingArrangements.map(async (sa: seatingArrangementType, j: number): Promise<any> => {

        if (!false) {
          if (sa.deskId === desk.id) {
            const student: any = findStudentById(students, sa.studentId)
            console.log("Passing student---->"+JSON.stringify(student))

            studentCard = <Desk><StudentCard student={student} /></Desk>,






              //studentCard = <Desk><Label>{student.user.username}</Label></Desk>
              deskCards.push({ id: desk.id, coordinates: { x: desk.x, y: desk.y }, studentCard: studentCard })
            isbreak = true;
          }
        }
        //}
      }))

    } else {
      deskCards.push({ id: desk.id, coordinates: { x: desk.x, y: desk.y }, studentCard: studentCard })
    }

  }));





  const props: propSeatingType = {
    canvasType: data.canvasType,
    desks: deskCards,
    clsId: data.clsId,
    seatingPlanName: data.seatingPlanName,
    students: students,
    layoutId: data.layoutId,
    seatingPlanId: data.seatingPlan.id,
    seatingArrangements
  }
  return <SeatingCanvas props={props} />
}


