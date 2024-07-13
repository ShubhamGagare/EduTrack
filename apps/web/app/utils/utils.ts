'use server'
import { PrismaClient } from '../../../../packages/db/prisma/generated/client'
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import axios from "axios";
import { NextApiRequest } from "next";

const client = new PrismaClient();
const today = new Date();
const session = await getServerSession(authOptions);
//get all registers for all users
export default async function getListOfALLRegisters(date: Date) {
  //console.log("date---" +session.user)

  console.log("date---" + date.getDate());
  try {
    const response = await client.register.findMany({
      where: {
        date: {
          gte: new Date(date.getFullYear(), date.getMonth(), date.getDate()), // Greater than or equal to today
          lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1), // Less than tomorrow
        },
      },
      include: {
        cls: {
          select: {
            name: true,
          },
        },
        teacher: {
          select: {
            user: {
              select: {
                username: true,
              },
            },
          },
        },
      },
    });
    console.log("response size action--->" + response.length);
    if (response.length === 0) {
      console.log("resonse is empty from action");
      const response = await createTodaysAllRegister();

      return response;
    }
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createTodaysAllRegister() {
  console.log(
    "----------------Creating All new register for today----------------"
  );
  const classes = await client.cls.findMany();
  classes.map(async (cls:any) => {
    if (cls) {
      const register = await client.register.create({
        data: {
          classId: cls?.id,
          teacherId: cls?.teacherId || cls?.id,
          date: new Date(),
        },
      });

      // Get students for the class
      const studentsForClass = await client.student.findMany({
        where: {
          classId: cls.id,
        },
      });
      // Log the students and register details for debugging

      // Create attendance records for students in the class
      if (studentsForClass) {
        const attendanceData = studentsForClass.map((student:any) => ({
          studentId: student.id,
          registerId: register.id,
          status: "",
        }));
        await client.attendance.createMany({ data: attendanceData });
        await client.attendance.findMany();

        try {
          const response = await client.register.findMany({
            where: {
              date: {
                gte: new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate()
                ), // Greater than or equal to today
                lt: new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate() + 1
                ), // Less than tomorrow
              },
            },
            include: {
              cls: {
                select: {
                  name: true,
                },
              },
              teacher: {
                select: {
                  user: {
                    select: {
                      username: true,
                    },
                  },
                },
              },
            },
          });
          console.log(
            "------------------returning create register---------------"
          );
          if (response.length === 0) {
            console.log("Inside resonse is empty");
          }
          return response;
        } catch (error) {
          console.log(error);
          return [];
        }
      }
    }
  });
}

//creat all registers for all users

// get todays register for user
export async function getListOfRegisters(date: Date) {
  console.log("session---" + JSON.stringify(session));
  try {
    const response = await client.register.findMany({
      where: {
        date: {
          gte: new Date(date.getFullYear(), date.getMonth(), date.getDate()), // Greater than or equal to today
          lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1), // Less than tomorrow
        },
        teacher: {
          userId: Number(session.user.id),
        },
      },
      include: {
        cls: {
          select: {
            name: true,
          },
        },
        teacher: {
          select: {
            user: {
              select: {
                username: true,
              },
            },
          },
        },
      },
    });
    if (response.length === 0) {
      console.log("resonse is empty");
      const response = await createTodaysRegister(date);

      return response;
    }
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

//create todays register for user
export async function createTodaysRegister(date: Date) {
  console.log(
    "----------------Creating  new register for today----------------"
  );

  const cls = await client.cls.findFirst({
    where: {
      teacherId: Number(session.user.id),
    },
  });
  if (cls) {
    const register = await client.register.create({
      data: {
        classId: cls?.id,
        teacherId: cls?.teacherId || cls?.id,
        date: new Date(),
      },
    });

    // Get students for the class
    const studentsForClass = await client.student.findMany({
      where: {
        classId: cls.id,
      },
    });
    // Log the students and register details for debugging

    // Create attendance records for students in the class
    if (studentsForClass) {
      const attendanceData = studentsForClass.map((student:any) => ({
        studentId: student.id,
        registerId: register.id,
        status: "",
      }));
      await client.attendance.createMany({ data: attendanceData });
      await client.attendance.findMany();

      try {
        const response = await client.register.findMany({
          where: {
            date: {
              gte: new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
              ), // Greater than or equal to today
              lt: new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate() + 1
              ), // Less than tomorrow
            },
            teacher: {
              userId: Number(session.user.id),
            },
          },
          include: {
            cls: {
              select: {
                name: true,
              },
            },
            teacher: {
              select: {
                user: {
                  select: {
                    username: true,
                  },
                },
              },
            },
          },
        });
        console.log(
          "------------------returning create register---------------"
        );
        if (response.length === 0) {
          console.log("Inside resonse is empty");
        }
        return response;
      } catch (error) {
        console.log(error);
        return [];
      }
    }
  }
}

export async function customDateRegisters(date: Date, id: number) {
  const regData: any = await getListOfALLRegisters(date);
  const usersRegisters = regData.filter((register: any) => {
    if (Number(register.teacherId) === Number(id)) {
      return register;
    }
  });
  return usersRegisters;
}
////// 
interface regType extends NextApiRequest {
    id: number
    classId: number,
    teacherId: number,
    date: Date,
    Attendance: [
      { id: number, student: Object, status: string, comment: string, lateMinutes: number },
    ],
    cls: { name: string }
  
  }
 export  async function updateRegister(req: regType) {
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
  
      console.log("Register updated:", updatedRegister);
      //res.status(200).json(updatedRegister);
    } catch (error) {
      console.error('Error updating register:', error);
      //  res.status(500).json({ error: 'Failed to update register' });
    }
  }
 
  
  export const getMonthlyMark = async (id: number) => {
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
  
  
  export  const getAttendacePattern = async (id:number) => {
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