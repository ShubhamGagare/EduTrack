import { PrismaClient } from "@prisma/client"
import ListRegisterClient from "../../../components/ListRegisterClient"



const client = new PrismaClient()
const today = new Date();

async function getListOfRegisters() {
  try {
    const response = await client.register.findMany({
      where: {
        date: {
          gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()), // Greater than or equal to today
          lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) // Less than tomorrow
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
    if(response.length===0){
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
    <div className='space-y-8'>
      <div className='text-4xl '>Take Register</div>
      <div className='flex space-x-4'>

        <ListRegisterClient regData={regData} />

      </div>

    </div>
  )
}

export default page
