import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/ui";
import SeatingPlanClient from '../../../../components/clients/classView/SeatingPlanClient';
import { getlayoutsIds, getSeatingPlans } from "../../../utils/utils";
import { PrismaClient } from "../../../../../../packages/db/prisma/generated/client";

const client = new PrismaClient()
async function page() {
    const clses: any[] = await client.cls.findMany();

    const layouts: any[] = await getlayoutsIds();


    const seatingPlan: any[] = await getSeatingPlans();
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
