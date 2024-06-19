
"use server"
import { NextApiRequest, NextApiResponse } from "next";
import RegisterClient from "../../../../../components/RegisterClient"
import { PrismaClient } from "@prisma/client"
import { registerType } from "../../../../../components/ListRegisterClient";
import { NextRequest } from "next/server";

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
    console.log("Updating register:", req);
    const st = register.Attendance;
    // Update register in the database
    console.log(JSON.stringify(st))
    const updatedRegister = await client.register.update({
      where: { id: register.id }, // Adjust according to your schema
      data: {
        Attendance: {
          update: register.Attendance.map((student: any) => ({
            where: { id: student.id },
            data: { status: student.status }
          }))
        } // Update the Attendance field
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
    //return response;
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
