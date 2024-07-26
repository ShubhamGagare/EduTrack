import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, Label } from '@repo/ui';
import AddLayoutClient from '../../../../../components/clients/classView/LayoutClients/AddLayoutClient';

const page = () => {
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
                    <BreadcrumbLink href="/class-view/class-layout">Layout</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Add layout</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <div className='text-2xl font-bold tracking-tight '>Add layout</div>
        <div className='flex space-x-4'>
          <AddLayoutClient /> 
        </div>
        

    </div>

  )
}

export default page
