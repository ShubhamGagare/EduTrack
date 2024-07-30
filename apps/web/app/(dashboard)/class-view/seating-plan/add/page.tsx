import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Label } from '@repo/ui';
import AddSeatingPlan from 'components/clients/classView/SeatingClients/AddSeatingPlan';
import { getlayout } from 'app/utils/utils';

export default async function getSeatingPlan({ params }: { params: { seatinPlanId: number[] } }) {

    // console.log("--"+JSON.stringify(params))

    // const layout:any = await getlayout(Number(params.seatinPlanId[0]))
    // const desks:any = layout.desks
    // console.log(desks)

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
                    <BreadcrumbLink href="/class-view/class-layout">Seating Plan</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Seating Plan</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <div className='text-2xl font-bold tracking-tight '>Seating Plan</div>
        <div className='flex space-x-4'>
          {/* <AddSeatingPlan desks={desks} /> */}
        </div>
        

    </div>

  )
}

