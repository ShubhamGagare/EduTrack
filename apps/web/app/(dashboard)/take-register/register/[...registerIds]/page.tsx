
"use server"
import { NextApiRequest, NextApiResponse } from "next";
import RegisterClient from "../../../../../components/clients/RegisterClient"
import { PrismaClient } from "@prisma/client"
import { registerType } from "../../../../../components/clients/ListRegisterClient";
import { NextRequest } from "next/server";
import { ColumnDef } from "@tanstack/react-table"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/ui";
import axios from "axios"
import { headers } from "next/headers";
const client = new PrismaClient()

//export const dynamic = "auto";
export interface regType extends NextApiRequest {
  id: number
  classId: number,
  teacherId: number,
  date: Date,
  Attendance: [
    { id: number, student: Object, status: string, comment: string, lateMinutes: number },
  ],
  cls: { name: string }

}
export async function updateRegister(req: regType) {
  const register = req; // Assuming 'register' object is passed in request body

  try {
    // Update register in the database
    const updatedRegister = await client.register.update({
      where: { id: register.id }, // Adjust according to your schema
      data: {
        Attendance: {
          update: register.Attendance.map((student: any) => ({
            where: { id: student.id },
            data: {
              status: student.status,
              comment: student.comment || "",
              lateMinutes: student.lateMinutes || 0
            }
          }))
        },
        status: "Completed"

        // Update the Attendance field
        // Add other fields as needed
      }
    });

    //console.log("Register updated:", updatedRegister);
    // res.status(200).json(updatedRegister);
  } catch (error) {
    console.error('Error updating register:', error);
    //  res.status(500).json({ error: 'Failed to update register' });
  }
}
type Register = {
  "id": number,
  "student": {
    "user": {
      "username": string
    }
  },
  "status": string

}
const columns: ColumnDef<Register>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "student.user.username",
    header: "Name",
  },

]


const query = {
  "query": "Analyze the following attendance data for each student, provide a one-liner insight and 2-3 word tags indicating the attendance pattern for each student in json:",
  "attendance_data": {
    "student 1": [{ "1": "present" }, { "2": "absent" }, { "3": "present" }, { "4": "present" }, { "5": "present" }, { "6": "absent" }, { "7": "present" }, { "8": "present" }, { "9": "late" }, { "10": "present" }, { "11": "absent" }, { "12": "present" }, { "13": "present" }, { "14": "present" }, { "15": "late" }, { "16": "present" }],
    "student 2": [{ "1": "present" }, { "2": "absent" }, { "3": "late" }, { "4": "present" }, { "5": "absent" }, { "6": "present" }, { "7": "absent" }, { "8": "present" }, { "9": "present" }, { "10": "present" }, { "11": "absent" }, { "12": "late" }, { "13": "present" }, { "14": "absent" }, { "15": "present" }, { "16": "present" }],
    "student 3": [{ "1": "late" }, { "2": "present" }, { "3": "absent" }, { "4": "present" }, { "5": "present" }, { "6": "present" }, { "7": "absent" }, { "8": "late" }, { "9": "present" }, { "10": "present" }, { "11": "present" }, { "12": "present" }, { "13": "absent" }, { "14": "late" }, { "15": "present" }, { "16": "present" }],
    "student 4": [{ "1": "present" }, { "2": "present" }, { "3": "present" }, { "4": "late" }, { "5": "present" }, { "6": "absent" }, { "7": "present" }, { "8": "present" }, { "9": "present" }, { "10": "absent" }, { "11": "late" }, { "12": "present" }, { "13": "present" }, { "14": "present" }, { "15": "absent" }, { "16": "late" }],
    "student 5": [{ "1": "absent" }, { "2": "present" }, { "3": "present" }, { "4": "present" }, { "5": "late" }, { "6": "present" }, { "7": "absent" }, { "8": "present" }, { "9": "present" }, { "10": "late" }, { "11": "present" }, { "12": "absent" }, { "13": "present" }, { "14": "present" }, { "15": "present" }, { "16": "present" }],
    "student 6": [{ "1": "present" }, { "2": "late" }, { "3": "absent" }, { "4": "present" }, { "5": "absent" }, { "6": "present" }, { "7": "present" }, { "8": "late" }, { "9": "present" }, { "10": "absent" }, { "11": "present" }, { "12": "late" }, { "13": "present" }, { "14": "present" }, { "15": "present" }, { "16": "present" }]
  }
}
//const query = { "abc": "what time is" }

const getMonthlyMark = async (id: number) => {
  const date = new Date();
  const response = await client.attendance.findMany({
    where: {
      studentId: id,
      date : {
        gte: new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()), // Greater than or equal to last moth
        lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1) // Less than tomorrow
      },
    },
    
  });
  console.log("Monthly attendance ------------->" + JSON.stringify(response))
  return response;
}


export const getAttendacePattern = async (id:number) => {
  //const message = [{ role: "user", content: "You are a helpful assistant." }]
  const allAttendance = await getMonthlyMark(id)
  const expectedOutputFormat= {
    "studentId": 12,
    "insight": "one liner insight",
    "tags": ["Tag1", "Tag2"]
  }
  const query = {"query": "Analyze the following attendance data for each student, provide a one-liner insight and 2-3 word tags indicating the attendance pattern for each student in json with parent array results:",expectedOutputFormat,allAttendance}

  const pattern = await axios.post("http://localhost:3000/api/chat", {
    method: 'POST',
    body: query,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const insight = pattern.data.choices[0].message.content
  // const parsedPattern = JSON.parse(pattern.data)
  // const pattern =  axios.post("/api/attendancePattern",message)
  console.log("Pattern--------->" + JSON.stringify(insight))
  return insight

}


export default async function getRegister({ params }: { params: { registerIds: number[] } }) {
  try {
    const response = await client.register.findFirst({
      where: {
        id: Number(params.registerIds[0]) || 1
      },
      include: {
        Attendance: {
          select: {
            id: true,
            student: {
              select: {
                user: {
                  select: {
                    username: true
                  }
                },

              }
            },
            status: true,
            comment: true,
            lateMinutes: true
          }

        },
        cls: {
          select: {
            name: true
          }
        }

      }
    })
    //console.log("Attendance-------"+JSON.stringify(response))

    return (
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/take-register">Take Register</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{response?.cls.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <RegisterClient register={response} />

      </div>
    )

  } catch (error) {
    console.log(error)
    return [];
  }
}

