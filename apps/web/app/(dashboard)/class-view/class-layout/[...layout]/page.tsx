import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Label } from '@repo/ui';
import AddLayoutClient from '../../../../../components/clients/classView/LayoutClients/AddLayoutClient';
import { getlayout, getLayoutType } from '../../../../utils/utils';
import { Desk, Layout, Prisma } from '../../../../../../../packages/db/prisma/generated/client';
import { layoutsType } from 'components/clients/classView/ClassViewLayoutClient';
import { error } from 'console';

export type deskType = Prisma.DeskGetPayload<{
    select: { id: true, x: true, y: true },
}>
export type layoutType = Prisma.LayoutGetPayload<{
    include: {
        desks: {
            select: {
                id: true,
                x: true,
                y: true
            }
        };
    }
}>

export type propTypes = {
    layout?: layoutType| null,
    desks?: deskType[],
    canvasType: string | undefined
}
const page = async ({ params }: { params: { layout: string[] } }) => {

    const canvasType = params.layout[0]
    
    const layoutId = params.layout[1]
    
    let props: propTypes = {
        canvasType
    }

    if (canvasType !== "add") {
        const layout: layoutType | null = await getlayout(Number(layoutId));

        const desks: deskType[] = layout?.desks as deskType[]
        if(!desks) {
            throw new Error ("Desks not found");
        }else props = {
            layout: layout,
            desks,
            canvasType
        }
    }
    
     

    return (
        <div className="space-y-4   ">
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
                        <BreadcrumbLink href="/class-view/class-layout">Layout</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{canvasType === "edit" ? "Edit" : "Add"} layout</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='text-2xl font-bold tracking-tight '>Add layout</div>
            <div className='flex space-x-4'>
                <AddLayoutClient {...props} />
            </div>


        </div>

    )
}

export default page
