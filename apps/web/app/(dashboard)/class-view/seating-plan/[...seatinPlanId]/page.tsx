import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Label } from '@repo/ui';
import AddSeatingPlan from 'components/clients/classView/SeatingClients/AddSeatingPlan';
import { getClasses, getlayout } from 'app/utils/utils';


export default async function getSeatingPlan({ params }: { params: { seatinPlanId: string[] } }) {
    const layoutId = params.seatinPlanId[0]
    const clsId = params.seatinPlanId[1]?.replace('%20', " ")
    const seatingPlanName = params.seatinPlanId[2]?.replace('%20', " ")

    const clses = await getClasses();
    const layout: any = await getlayout(Number(layoutId))
    const desks: any = layout.desks
    console.log("loading...." + layoutId + "------" + clsId)

    const data = {
        desks: desks,
        clsId: clsId,
        seatingPlanName: seatingPlanName,
        layoutId:Number(layoutId)
    }

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
                <AddSeatingPlan data={data} />
            </div>


        </div>

    )
}

