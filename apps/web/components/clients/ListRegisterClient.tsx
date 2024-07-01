"use client"

import { Card } from "@repo/ui/"
import  { Tag }  from "@repo/ui/"

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
  "Attendance":{
    "studentId":number,
    "status":string
  }


}



const ListRegisterClient = ({ regData }: { regData: registerType[] }) => {


  console.log(regData)
  return (
    <div className="w-full space-y-4">
      {regData ? (regData.map(r => <Link className="w-full" href={{
        pathname: `./take-register/register/${r.id}`,

      }}><div className="w-full pb-4"><Card title={r.cls.name}  >
        <div className="flex w-full justify-between ">
          <div>
          {r.teacher.user.username}
          </div>
          <div className="">
            <Tag tagname={r.status} style={r.status==="Completed"?"bg-green-300 text-green-800":"bg-gray-200 text-gray-800"} />
          </div>
        </div>
      </Card></div></Link>)) : (
        <div>No register data available.</div>
      )}
    </div>
  )
}

export default ListRegisterClient
