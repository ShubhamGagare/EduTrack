import { PrismaClient } from "@prisma/client"
import ListRegisterClient from "../../../components/clients/ListRegisterClient"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/ui";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";



const client = new PrismaClient()
const today = new Date();

async function getListOfRegisters() {
  const session = await getServerSession(authOptions)
  
  console.log("session---"+JSON.stringify(session))
  try {
    const response = await client.register.findMany({
      where: {
        date: {
          gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()), // Greater than or equal to today
          lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) // Less than tomorrow
        }, 
        teacher:{
          userId:Number(session.user.id)
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
    }
    return response;

  } catch (error) {
    console.log(error)
    return [];
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
