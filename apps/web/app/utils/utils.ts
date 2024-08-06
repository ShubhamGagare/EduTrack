"use server"
import { PrismaClient } from "../../../../packages/db/prisma/generated/client";
import { authOptions } from "../lib/auth";
import { getServerSession } from "next-auth";
import axios from "axios";
import { NextApiRequest } from "next";
import OpenAI from 'openai';
import { NextResponse } from "next/server";
import { registerType } from "components/clients/ListRegisterClient";
import { studentsType } from "components/clients/classView/SeatingClients/AddSeatingPlan";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is the default and can be omitted
});
const client = new PrismaClient();
const today = new Date();

//
export const getSeatingPlanById = async (id: number) => {

  const response = await client.seatingPlan.findUnique({
    where: {
      id: id
    },
    include: {
      seatingArrangement: {
        select: {
          id: true,
          deskId: true,
          studentId: true
        }
      }
    }
  })
  return response;
}



//add seating layout
export const addSeatingPlan = async (plan: any) => {
  let response: any;
  if (plan.id) {
    response = await client.seatingPlan.update({
      where: {
        id: plan.id
      },
      data: {
        name: plan.name,
        layoutId: plan.layoutId,
        classId: plan.classId
      }
    })
  } else {
    response = await client.seatingPlan.create({
      data: {
        name: plan.name,
        layoutId: plan.layoutId,
        classId: plan.classId
      }
    })
  }





  const seatingArragementsData: any[] = plan.seatingArrangements.map((sa: any) => ({
    seatingPlanId: response.id,
    deskId: Number(sa.deskId),
    studentId: Number(sa.studentId)
  }));

  let seatingArragements: any;


  if (plan.id && plan.oldSeatingArrangements.length > 0) {

    plan.oldSeatingArrangements.map(async (sa: any, index: number) => {
      if (seatingArragementsData.length > index) {

        seatingArragements = await client.seatingArrangement.update({
          where: {
            id: sa.id
          },
          data: {
            deskId: seatingArragementsData[index].deskId,
            studentId: seatingArragementsData[index].studentId
          }
        })


      } else {
        const deleteResponse = await client.seatingArrangement.delete({
          where: {
            id: sa.id
          }
        })

      }


    })

  } else {
    seatingArragements = await client.seatingArrangement.createMany({
      data: seatingArragementsData
    })
  }

  return seatingArragements
}

//crate layout 
export async function createLayout(layoutName: string, cards: any) {

  const response = await client.layout.create({

    data: {
      name: layoutName,
      updatedAt: new Date(),
    }

  })

  const cardsData = cards.map((card: any) => ({
    layoutId: response.id,
    x: card.coordinates_X,
    y: card.coordinates_y,
  }));

  const desks = await client.desk.createMany({
    data: cardsData
  })
}


export async function updateLayout(layout: any, cards: any) {
  let updateData: any = {};
  let createData: any[] = [];


  //layout.desks.map(async (desk: any, i: number) => {
  cards.map(async (card: any, index: number) => {

    if (card.id.toString().startsWith('id_')) {

      createData.push({
        layoutId: layout.id,
        x: card.coordinates_X,
        y: card.coordinates_y,
      })

    } else {

      updateData = {
        layoutId: layout.id,
        x: card.coordinates_X,
        y: card.coordinates_y,
      };

      const desks = await client.desk.update({
        where: {
          id: card.id
        },
        data: updateData
      })


    }



  });
  const createddesks = await client.desk.createMany({

    data: createData
  })


  //  });


}


export async function getlayouts() {
  const response = await client.layout.findMany();

  return response;

}




export async function getlayout(layoutId: number) {
  const response = await client.layout.findFirst({
    where: {
      id: layoutId
    },
    include: {
      desks: {
        select: {
          id: true,
          x: true,
          y: true
        }
      }

    }
  });


  return response;

}

export async function getlayoutsIds() {
  const response = await client.layout.findMany({
    select: {
      id: true,
      name: true
    }
  });


  return response;

}
export async function getSeatingPlans() {
  const response = await client.seatingPlan.findMany({
    include: {
      layout: {
        select: {
          name: true
        }
      }
    }
  });


  return response;

}


export const getClasses = async () => {
  const response = await client.cls.findMany();


  return response;

}
//get student Data
export const getStudentData = async (id: number) => {

  const response = await client.student.findFirst({
    where: {
      id: id
    },
    include: {
      Attendance: true
    }
  })
  return response;
}

//get all students from the class
export async function getClassStudents(classId: any) {
  const response = await client.cls.findFirst({
    where: {
      id: Number(classId)
    },
    include: {
      students: {
        select: {
          id: true,
          user: {
            select: {
              username: true
            }
          },
        }
      }
    }

  })

  return response?.students;

}

export const calculateAttendnace = (attendance: any[]) => {
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
  console.log(" count --->"+attendanceInsight.presents )
  attendanceInsight.percentage = Number(((attendanceInsight.presents / attendance.length) * 100).toFixed(0))
  console.log(" attendanceInsight --->"+JSON.stringify(attendanceInsight) )

  return attendanceInsight;
}



//get all registers for all users
export async function getListOfALLRegisters(date: Date): Promise<any> {
  const session = await getServerSession(authOptions);

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
    if (response.length === 0) {
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

  const classes = await client.cls.findMany();
  classes.map(async (cls: any) => {
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
        const attendanceData = studentsForClass.map((student: any) => ({
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

          if (response.length === 0) {
          }
          return response;
        } catch (error) {
          return [];
        }
      }
    }
  });
}

//creat all registers for all users

// get todays register for user
export async function getListOfRegisters(date: Date) {
  const session = await getServerSession(authOptions);

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
  const session = await getServerSession(authOptions);


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
      const attendanceData = studentsForClass.map((student: any) => ({
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
      date: {
        gte: new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()), // Greater than or equal to last moth
        lt: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1) // Less than tomorrow
      },
    },

  });
  return response;
}


export const getAttendacePattern = async (id: number) => {
  //const message = [{ role: "user", content: "You are a helpful assistant." }]
  const allAttendance = await getMonthlyMark(id)
  const expectedOutputFormat = {
    "studentId": 12,
    "insight": "one liner insight",
    "tags": ["Tag1", "Tag2"]
  }
  const query = { "query": "Analyze the following attendance data for each student, provide a one-liner insight and 2-3 word tags indicating the attendance pattern for each student in json with parent array results:", expectedOutputFormat, allAttendance }

  const chatCompletion: any = await openai.chat.completions.create({
    messages: [{ role: 'user', content: JSON.stringify(query) }],
    model: 'gpt-3.5-turbo',
  });

  const insight = chatCompletion.choices[0].message.content

  return insight

}