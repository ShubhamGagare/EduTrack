import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Label } from '@repo/ui';
import AddSeatingPlan from '../../../../../components/clients/classView/SeatingClients/AddSeatingPlan';
import { getlayout, getSeatingPlanById } from '../../../../utils/utils';
import { deskType, layoutType } from '../../class-layout/[...layout]/page';
import { SeatingArrangement,SeatingPlan } from '@repo/db';

export default async function getSeatingPlan({ params }: { params: { seatinPlanId: string[] } }) {
    console.log(params.seatinPlanId)

    const canvasType = params.seatinPlanId[0]||""
    const layoutId = params.seatinPlanId[1]
    const clsId = params.seatinPlanId[2]?.replace('%20', " ")
    let seatingPlanName = "";


    const layout: layoutType|null = await getlayout(Number(layoutId))
    const desks: deskType[] = layout?.desks as deskType[]
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
        if (!seatingPlanId) {
            throw new Error("Seating plan ID is missing or invalid");
          }

          const seatingPlan: SeatingPlan | null = await getSeatingPlanById(Number(seatingPlanId));
          if (seatingPlan) {
            data.seatingPlanName = seatingPlan.name ?? '';  // Ensure name is set or default to empty
            data.seatingPlan = seatingPlan;
          } 
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

