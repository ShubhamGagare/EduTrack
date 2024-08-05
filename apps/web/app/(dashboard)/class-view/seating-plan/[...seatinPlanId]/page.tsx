import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Label } from '@repo/ui';
import AddSeatingPlan from 'components/clients/classView/SeatingClients/AddSeatingPlan';
import { getClasses, getlayout, getSeatingPlanById } from 'app/utils/utils';


export default async function getSeatingPlan({ params }: { params: { seatinPlanId: string[] } }) {
    console.log(params.seatinPlanId)

    const canvasType = params.seatinPlanId[0]||""
    const layoutId = params.seatinPlanId[1]
    const clsId = params.seatinPlanId[2]?.replace('%20', " ")
    let seatingPlanName = "";


    const layout: any = await getlayout(Number(layoutId))
    const desks: any = layout.desks
    const data = {
        canvasType,
        desks: desks,
        clsId: clsId,
        seatingPlanName: seatingPlanName,
        layoutId: Number(layoutId),
        seatingPlan: {}
    }

    if (canvasType === "edit"||canvasType === "view") {
        const seatingPlanId = params.seatinPlanId[3]?.replace('%20', " ")
        const seatingPlan: any = await getSeatingPlanById(Number(seatingPlanId))
        data.seatingPlanName = seatingPlan.name;
        data.seatingPlan = seatingPlan
    } else {
        if (params.seatinPlanId[3]?.replace('%20', " ") !== undefined) {
            data.seatingPlanName = params.seatinPlanId[3]?.replace('%20', " ")
        }

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
                        <BreadcrumbPage>{canvasType.charAt(0).toUpperCase() + canvasType.slice(1)} Seating Plan</BreadcrumbPage>
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

