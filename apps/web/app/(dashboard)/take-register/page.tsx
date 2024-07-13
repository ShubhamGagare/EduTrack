import ListRegisterClient from "../../../components/clients/ListRegisterClient"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/ui";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import  getListOfALLRegisters  from "../../utils/utils";


const session = await getServerSession(authOptions)


export default async function page() {

  const regData: any = await getListOfALLRegisters(new Date());
  const usersRegister = regData.filter((register: any) => {
    if (register.teacherId === Number(session.user.id)) {
      console.log("teacherId-----" + register.teacherId);
 
      return register
    }
  })

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

        <ListRegisterClient regData={regData} register={usersRegister} />

      </div>

    </div>
  )
}

