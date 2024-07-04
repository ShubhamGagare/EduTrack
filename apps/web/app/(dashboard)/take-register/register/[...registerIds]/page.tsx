
"use server"
import { NextApiRequest, NextApiResponse } from "next";
import RegisterClient from "../../../../../components/clients/RegisterClient"
import { PrismaClient } from "@prisma/client"
import { registerType } from "../../../../../components/clients/ListRegisterClient";
import { NextRequest } from "next/server";
import { ColumnDef } from "@tanstack/react-table"
const client = new PrismaClient()

//export const dynamic = "auto";
export interface regType extends NextApiRequest  {
  id : number 
  classId: number,
  teacherId: number,
  date: Date,
  Attendance: [
    { id: 1, student: Object, status: string },
    { id: 2, student: Object, status: string }
  ],
  cls: { name: string }

}
export async function updateRegister(req: regType) {
  const register = req ; // Assuming 'register' object is passed in request body

  try {
    // Update register in the database
    const updatedRegister = await client.register.update({
      where: { id: register.id }, // Adjust according to your schema
      data: {
        Attendance: {
          update: register.Attendance.map((student: any) => ({
            where: { id: student.id },
            data: { status: student.status }
          }))
        },
        status:"Completed"
        
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
            status: true
          }

        },
        cls: {
          select: {
            name: true
          }
        }

      }
    })
      //  console.log(response)
    return (
      <div>
        <RegisterClient register={response} />

        </div>
    )

  } catch (error) {
    console.log(error)
    return [];
  }
}

