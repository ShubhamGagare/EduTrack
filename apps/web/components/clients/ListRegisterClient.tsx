"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/"
import { Tag } from "@repo/ui/"
import { Badge } from "@repo/ui/"

import Link from "next/link"



export interface registerType {

  "id": number,
  "classId": number,
  "teacherId": number,
  "date": string,
  "status": string,
  "cls": {
    "id": number,
    "name": string,
    "teacherId": number
  },
  "teacher": {
    "id": number,
    "userId": number,
    "user": {
      "id": number,
      "username": string,
    }
  },
  "student": {
    "id": number,
  },
  "Attendance": {
    "studentId": number,
    "status": string
  }


}



const ListRegisterClient = ({ regData }: { regData: registerType[] }) => {


  console.log(regData)
  return (
    <div className="w-full space-y-4">
      {regData ? (regData.map(r => <Link className="w-full" href={{
        pathname: `./take-register/register/${r.id}`,

      }}><div className="w-full pb-4"><Card className="flex items-center justify-between">
        <CardHeader>
          <CardTitle>{r.cls.name} {r.id}</CardTitle>
          <CardDescription>{r.teacher.user.username}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Badge className={`${r.status === "Completed" ? "bg-green-300 text-green-800" : "bg-gray-200 text-gray-800"} p-1 px-2 rounded-2xl `}>{r.status !==""?r.status:"Ready"}</Badge>
        </CardContent>

      </Card></div></Link>)) : (
        <div>No register data available.</div>
      )}
    </div>
  )
}

export default ListRegisterClient
