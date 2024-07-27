"use server"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/ui";
import SeatingPlanClient from '../../../../components/clients/classView/SeatingPlanClient';
import { getClasses } from "app/utils/utils";

async function page() {
    const clses:any[] = await getClasses();
    console.log("c------->"+JSON.stringify(clses));
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

                <SeatingPlanClient classes={clses} />
            </div>
        </div>
    )
}

export default page
