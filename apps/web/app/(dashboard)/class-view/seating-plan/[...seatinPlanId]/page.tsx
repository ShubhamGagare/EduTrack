import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Label } from '@repo/ui';
import AddSeatingPlan from 'components/clients/classView/SeatingClients/AddSeatingPlan';
import {  getClasses, getlayout } from 'app/utils/utils';


export default async function getSeatingPlan({ params }: { params: { seatinPlanId: number[] } }) {

    const clses = await getClasses();
    const layout:any = await getlayout(Number(params.seatinPlanId[0]))
    const desks:any = layout.desks
    console.log("loading....")

  return (
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
                    <BreadcrumbLink href="/class-view/seating-plan">Seating Plan</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Add Seating Plan</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <div className='text-2xl font-bold tracking-tight '>Seating Plan</div>
        <div className='flex space-x-4'>
          <AddSeatingPlan desks={desks} classes={clses} />
        </div>
        

    </div>

  )
}

