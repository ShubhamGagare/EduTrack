
import { UniqueIdentifier } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";

import Desk from "components/Desk";
import { StudentCard } from "components/StudentCard";
import { ReactElement } from "react";
import { Avatar, AvatarFallback, AvatarImage, Button, Label, Separator } from "@repo/ui";
import { getAllComments, SeatingCanvas } from "components/SeatingCanvas";
import { addSeatingPlan, getClassStudents, getStudentData } from "../../../../app/utils/utils";
import SeatingPlanClient from "../SeatingPlanClient";
import { Badge, MessageSquareText } from "lucide-react";

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
export type propSeatingType = { canvasType: string, desks: CanvasCard[], clsId: string, seatingPlanName: string, students: studentsType, layoutId: number, seatingPlanId: number, seatingArrangements: any[] }

export const getStudentDetails = async (id: number) => {
  const response = await getStudentData(id);

  return response;
}


export const saveSeatingPlan: any = async (plan: any) => {
  const response = await addSeatingPlan(plan)
  return response
}


export const findStudentById = (students: any[], id: number) => {
  let student = {};
  for (var i = 0; i < students.length; i++) {
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


const calculateAttendnace = (attendance: any[]) => {
  const attendanceInsight = {
    presents: 0,
    absents: 0,
    percentage: 0
  }

  attendance.map((day: any, index: any) => {
    if (day.status === "present") {
      attendanceInsight.presents = attendanceInsight.presents + 1;
    }
    if (day.status === "absent") {
      attendanceInsight.absents = attendanceInsight.absents + 1;
    }
  })

  attendanceInsight.percentage = Number(((attendanceInsight.presents / attendance.length) * 100).toFixed(0))

  return attendanceInsight;
}


async function getStudDetails(students: any, id: number) {
  let studentDetails: any;
  //for (var i = 0; i < students.length; i++) {
  const data = await Promise.all(students.map(async (student: any, index: number): Promise<any> => {
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
      await Promise.all(seatingArrangements.map(async (sa: any, j: number): Promise<any> => {

        //for (var j = 0; j < seatingArrangements.length; j++) {
        if (!false) {
          // seatingArrangements.map((seatingArrangement: any) => {
          if (sa.deskId === desk.id) {
            //const studentDetails:any= await getStudDetails(students,sa.studentId)
            const student: any = findStudentById(students, sa.studentId)
            const studentDetails: any = await getStudentDetails(student.id)
            const attendanceInsight = calculateAttendnace(studentDetails?.Attendance)

            studentCard = <Desk>
              <div className="flex-col justify-between items-center w-full h-full text-center ">
                <Avatar className="h-25 w-full justify-center items-center">
                  <AvatarImage className="h-20 w-20  " src={"/avatars/0" + Math.floor((Math.random() * 4 + 1)) + ".png"} />
                  <AvatarFallback className="h-20 w-20  ">SN</AvatarFallback>
                </Avatar>
                <Label className="content-center w-full text-center ">{student.user.username}</Label>
                <Separator />
                <div className="flex w-full  justify-between gap-x-0.5 items-center bg-gray-200">
                  <Button className="bg-white rounded-none" variant={"ghost"}>{attendanceInsight.percentage}%</Button>
                  <Button className="w-full bg-white rounded-none" variant={"ghost"} size="icon" onClick={getAllComments}><MessageSquareText size={20} /></Button>
                  <Button className="w-full bg-white rounded-none" variant={"ghost"}>30</Button>


                </div>
                <div className="flex gap-x-2 overflow-auto">

                  {studentDetails !== undefined && studentDetails?.Attendance[studentDetails?.Attendance.length - 1].status == "Absent" ? <Badge className="rounded-xl bg-red-200 text-gray-700">Absent</Badge> :
                    studentDetails?.Attendance[studentDetails?.Attendance.length - 1].status == "Late" ? <Badge className="rounded-xl bg-yellow-200 text-gray-700">Late</Badge> : ""}


                </div>
              </div>
            </Desk>,






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


