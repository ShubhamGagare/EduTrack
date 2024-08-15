"use server"
import { PrismaClient } from "@repo/db";
import { authOptions } from "../lib/auth";
import { getServerSession } from "next-auth";
import axios from "axios";
import { NextApiRequest } from "next";
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

import OpenAI from 'openai';
import { NextResponse } from "next/server";
import { registerType } from "components/clients/ListRegisterClient";
//import { studentsType } from "components/clients/classView/SeatingClients/AddSeatingPlan";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is the default and can be omitted
});
const client = new PrismaClient();
const today = new Date();


const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});


export const getStudentByName = async(studentName:string)=>{

  const response: any = await client.user.findFirst({
    where: {

        username: studentName

    },
    select: {
        id: true,
        username:true,
        email:true,
        Student:{
          select:{
            cls:{
              select:{
                name:true
              }
            }
          }
        }
    }

})
  return response
}

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


export type addSeatingPlanType = typeof addSeatingPlan;
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


export type getLayoutType = typeof getlayout

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


  return response || null;

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
export type getSeatingPlansType = typeof getSeatingPlans
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


// export type clsType = Prisma.ClsGetPayload<{
//   include: {
//     students: studentsType
//   }
// }>
//get all students from the class
export async function getClassStudents(classId: number) {
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
  const students = response?.students;
  return students;

}

export const calculateAttendnace = (attendance: any[]) => {
  const attendanceInsight = {
    presents: 0,
    absents: 0,
    percentage: 0,
    lates:0,
    total:attendance.length
  }

  attendance.map((day: any, index: any) => {
    if (day.status === "present") {
      attendanceInsight.presents = attendanceInsight.presents + 1;
    }
    if (day.status === "absent") {
      attendanceInsight.absents = attendanceInsight.absents + 1;
    }
    if (day.status === "late") {
      attendanceInsight.lates = attendanceInsight.absents + 1;
    }
  })
  console.log(" count --->" + attendanceInsight.presents)
  attendanceInsight.percentage = Number(((attendanceInsight.presents + attendanceInsight.lates/ attendance.length) * 100).toFixed(0))
  console.log(" attendanceInsight --->" + JSON.stringify(attendanceInsight))

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
console.log("fetching data---")
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






// export const getAiAgentResponse = async () => {
//   const apiMapping = [
//     { 'getAllStudentsDetails': '/api/students' },
//     { 'getStudentById': '/api/students/student?id=' },
//     { 'behavioral history report': '/api/reports/behavioral-history', }// Add other report types and their corresponding endpoints
//   ]



//   const query = "Give me list of only students from class-3 not all students"

//   const response: any = await generateText({
//     model: groq('llama3-70b-8192'),
//     prompt: `
//     Assistant is a expert JSON builder designed to assist the users of a school management system.
//     Assistant is able to trigger actions for User by responding with JSON strings that contain "api" and "api_input" parameters.
//     Apis available to Assistant are:
//     "get all students data" :Useful for when Assistant is asked to provides only list of all students ids.
//     {"api":"/api/students","api_input":{}}
//     "get all class data" :Useful for when Assistant is asked to provides only list of all class ids.
//     {"api":"/api/cls","api_input":{}}
//     "get details of students from class 4" :Useful for when Assistant is asked to provides only list of all class ids.
//     {"api":"/api/students/student?","api_input":{"userId":"11"}}
//     "get all student 1" :Useful for when Assistant is asked to provide info of sepcific student about name or attendance,which can be filetered by id .
//     {"api":"/api/students/student?","api_input":{"id":"1"}}    
//     in case of apis for class or classes use cls
  
//     chose the required apis for qurey: "${query}" and based on this create a parsable json array of list of apis which need to be called to get result of query.Give me ONLY an array ,NO extra intro/outro/explanation or example"
//     additional details:
    
// model User {
//   id       Int      @id @default(autoincrement())
//   username String
//   email    String   @unique
//   password String
//   roleId   Int
//   Student  Student?
//   Teacher  Teacher?
//   role     Role     @relation(fields: [roleId], references: [id])
// }

// model Role {
//   id   Int    @id @default(autoincrement())
//   name String @unique @default("User")
//   User User[]
// }

// model Teacher {
//   id       Int        @id @default(autoincrement())
//   userId   Int        @unique
//   classes  Cls[]
//   Register Register[]
//   user     User       @relation(fields: [userId], references: [id])
// }

// model Student {
//   id                 Int                  @id @default(autoincrement())
//   userId             Int                  @unique
//   classId            Int
//   Attendance         Attendance[]
//   cls                Cls                  @relation(fields: [classId], references: [id])
//   user               User                 @relation(fields: [userId], references: [id])
//   SeatingArrangement SeatingArrangement[]
// }

// model Cls {
//   id        Int         @id @default(autoincrement())
//   name      String
//   teacherId Int?
//   teacher   Teacher?    @relation(fields: [teacherId], references: [id])
//   register  Register[]
//   students  Student[]
//   timetable Timetable[]
//   seatingPlan SeatingPlan[]
//   ClassView ClassView[]
//   layouts   Layout[]    @relation("ClassLayouts")
// }

// model Timetable {
//   id        Int      @id @default(autoincrement())
//   classId   Int
//   day       String
//   startTime DateTime
//   endTime   DateTime
//   cls       Cls      @relation(fields: [classId], references: [id])
// }

// model Register {
//   id         Int          @id @default(autoincrement())
//   classId    Int
//   teacherId  Int
//   date       DateTime
//   status     String       @default("")
//   Attendance Attendance[]
//   cls        Cls          @relation(fields: [classId], references: [id])
//   teacher    Teacher      @relation(fields: [teacherId], references: [id])
// }

// model Attendance {
//   id          Int      @id @default(autoincrement())
//   studentId   Int
//   registerId  Int
//   status      String
//   comment     String?
//   lateMinutes Int?
//   date        DateTime @default(now())
//   register    Register @relation(fields: [registerId], references: [id])
//   student     Student  @relation(fields: [studentId], references: [id])
// }

    
    
//     `

//   });
//   //const apiEndpoint =JSON.parse(response)
//   console.log("-*******************************************************************------------")

//   const jsonRespose = JSON.parse(response.text)
//   console.log(jsonRespose)
//   if (jsonRespose.length > 0) {

//   }
//   let apiResponseArray = [];
//   let needToGetMoreApis = false
//   jsonRespose.map(async (jsonApi: any, index: number) => {
//     if (!needToGetMoreApis) {
//       let inputs = ""

//       for (const [key, value] of Object.entries(jsonApi.api_input)) {
//         console.log(`${key}: ${value}`);
//         inputs = `${key}=${value}`
//       }

//       const apiResponse = await axios(`${process.env.NEXT_PUBLIC_API_URL + jsonApi.api + inputs}`)
//       //const reportType = response.choices[0].text.trim().toLowerCase();
//       apiResponseArray.push(apiResponse.data)
//       console.log(apiResponse.data)

//       if (index + 1 < jsonRespose.length) {
//         needToGetMoreApis = true
//         console.log("Creating a nested apis---------------")

//         const sortApis: any = await generateText({
//           model: groq('llama3-70b-8192'),
//           prompt: `
//         Assistant is a expert JSON builder designed to assist the users of a school management system.
//         Assistant is able to trigger actions for User by responding with JSON strings that contain "api" and "api_input" parameters.
//         Apis available to Assistant are:
//         "get all students data" :Useful for when Assistant is asked to provides only list of all students ids.
//         {"api":"/api/students","api_input":{}}
//           "get all class data" :Useful for when Assistant is asked to provides only list of all class ids.
//         {"api":"/api/cls","api_input":{}}
//         "get details of student 1" :Useful for when Assistant is asked to provide info of sepcific student about name or attendance,which can be filetered by id .
//         {"api":"/api/students/student?","api_input":{"id":"1"}}  
//         "get all in detail of every student " :Useful for when Assistant is asked to provide info of sepcific student about name or attendance,which can be filetered by id .
//         [{"api":"/api/students/student?","api_input":{"id":"1"}},
//         {"api":"/api/students/student?","api_input":{"id":"2"}}]        
        
//         Need to create needful apis so that user can have ${query}.till now we have this data ${apiResponseArray} from ${jsonApi.api}.Map in the api inputs from this data to the next api and give me complete json/json array dont use ...
//         use provided data like from all students data get the ids,then create indiviaual api from each student id so that in detail info can be retrived
//         in case of apis for class or classes use cls
//         based on this create a parsable json array of list of apis which need to be called to get result of query.Give me ONLY an array ,NO extra intro/outro/explanation or example dont give me text like "Here is the JSON array of APIs to retrieve the list of students from class-3:"
//         `

//         });
//         console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

//         console.log(sortApis.text)
//         const sortApisRespose = JSON.parse(sortApis.text)
//         console.log("Wooooo!!!-------->" + JSON.stringify(sortApisRespose))

//       }
//     }
//   })


  //const apiResponse = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/students/student?id=1`)
  //const reportType = response.choices[0].text.trim().toLowerCase();

  // Map the determined report type to the correct API endpoint
  // const apiEndpoint = apiMapping[reportType];

  // console.log("-------------------------------------------------------------")
  // console.log(apiResponse)

//}