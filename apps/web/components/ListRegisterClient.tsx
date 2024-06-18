"use client"

import { Card } from "@repo/ui/card"
import Link from "next/link"



interface registerType {

  "id": number,
  "classId": number,
  "teacherId": number,
  "studentId": number,
  "date": string,
  "status": string,
  "class": {
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
      "email": string,
      "roleId": 2
    }
  },
  "student": {
    "id": number,
    "userId": number,
    "classId": number
  }

}



const ListRegisterClient = ({ regData }: { regData: any[] }) => {


  console.log(regData)
  return (
    <div className="w-full space-y-4">
      {regData ? (regData.map(r => <Link className="w-full" href={{
        pathname: `./take-register/register/${r.id}`,

      }}><div className="w-full pb-4"><Card title={r.cls.name}  >
        <div>
          {r.teacher.name}
        </div>
        <div>
          {r.teacher.user.username}
        </div>
      </Card></div></Link>)) : (
        <div>No register data available.</div>
      )}
    </div>
  )
}

export default ListRegisterClient
