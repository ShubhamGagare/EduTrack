
"use server"
import { NextApiRequest, NextApiResponse } from "next";
import RegisterClient from "../../../../../components/RegisterClient"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

//export const dynamic = "auto";

export async function updateRegister(req: NextApiRequest) {
  const register = req; // Assuming 'register' object is passed in request body

  try {
    console.log("Updating register:", register);

    // Update register in the database
    const updatedRegister = await client.register.update({
      where: { id: register.id }, // Adjust according to your schema
      data: {
        Attendance: {
          updateMany: register.Attendance.map((student: any) => ({
            where: { id: student.id },
            data: { status: student.status }
          }))
        } // Update the Attendance field
        // Add other fields as needed
      }
    });

    console.log("Register updated:", updatedRegister);
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
    console.log(response)
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

