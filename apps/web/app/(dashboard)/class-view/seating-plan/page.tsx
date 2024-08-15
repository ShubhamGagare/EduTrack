import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/ui";
import SeatingPlanClient from '../../../../components/clients/classView/SeatingPlanClient';
import { getClasses, getlayoutsIds, getListOfALLRegisters, getSeatingPlans, getSeatingPlansType } from "../../../utils/utils";
import { registerType } from "components/clients/ListRegisterClient";
//import { Prisma, PrismaClient } from "@repo/db";

// //const Prisma = new PrismaClient()
// type layoutIdOnlyType = Prisma.LayoutGetPayload<{
//     select:{
//         id:true,
//         name:true
//     }
// }>

// type seatingPlanType = Prisma.SeatingPlanGetPayload<{
//     include: {
//         layout: {
//           select: {
//             name: true
//           }
//         }
//       }
// }>

async function page() {
    const regData: registerType[] = await getListOfALLRegisters(new Date());

    const clses: any = await getClasses();

    const layouts: any = await getlayoutsIds();


    const seatingPlan: any = await getSeatingPlans();
    const data = {
        clses,
        layouts,
        seatingPlan
    }
    return (
        <div>
            <div className="space-y-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/class-view">Class View</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Seating Plan</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className='text-2xl font-bold tracking-tight '>Seating Plan</div>
                <div className='flex space-x-4'>
                </div>

                <SeatingPlanClient data={data} />
            </div>
        </div>
    )
}

export default page
