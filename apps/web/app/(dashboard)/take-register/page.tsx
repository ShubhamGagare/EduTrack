import { PrismaClient } from "@prisma/client"
import ListRegisterClient from "../../../components/clients/ListRegisterClient"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/ui";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";



const client = new PrismaClient()
const today = new Date();
const session = await getServerSession(authOptions)

async function getListOfRegisters() {

  console.log("session---" + JSON.stringify(session))
  try {
    const response = await client.register.findMany({
      where: {
        date: {
          gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()), // Greater than or equal to today
          lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) // Less than tomorrow
        },
        teacher: {
          userId: Number(session.user.id)
        }

      },
      include: {
        cls: {
          select: {
            name: true
          }
        },
        teacher: {
          select: {
            user: {
              select: {
                username: true,

              }
            }
          }
        }

      }
    })
    if (response.length === 0) {
      console.log("resonse is empty")
      const response =await createTodaysRegister ()

      return response;
    }
    return response
  } catch (error) {
    console.log(error)
    return [];
  }
}

async function createTodaysRegister () {
  const cls = await client.cls.findFirst({
    where: {
      teacherId: Number(session.user.id)
    }
  }
  )
  if (cls) {
    const register = await client.register.create({
      data: {
        classId: cls?.id,
        teacherId: Number(session.user.id),
        date: new Date()
      }
    });


    // Get students for the class
    const studentsForClass = await client.student.findMany({
      where: {
        classId: cls.id
      }
    });
    // Log the students and register details for debugging

    // Create attendance records for students in the class
    if (studentsForClass) {
      const attendanceData = studentsForClass.map(student => ({
        studentId: student.id,
        registerId: register.id,
        status: ""
      }));
      await client.attendance.createMany({ data: attendanceData });
      await client.attendance.findMany();

      try {
        const response = await client.register.findMany({
          where: {
            date: {
              gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()), // Greater than or equal to today
              lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) // Less than tomorrow
            },
            teacher: {
              userId: Number(session.user.id)
            }

          },
          include: {
            cls: {
              select: {
                name: true
              }
            },
            teacher: {
              select: {
                user: {
                  select: {
                    username: true,

                  }
                }
              }
            }

          }
        })
        console.log("------------------returning create register---------------")
        if (response.length === 0) {
          console.log("Inside resonse is empty")
        }
        return response;
      } catch (error) {
        console.log(error)
        return [];
      }

    }

  }
}

const page = async () => {

  const regData: any = await getListOfRegisters();

  return (


    <div className='space-y-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Take Register</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='text-2xl font-bold tracking-tight '>Take Register</div>
      <div className='flex space-x-4'>

        <ListRegisterClient regData={regData} />

      </div>

    </div>
  )
}

export default page
