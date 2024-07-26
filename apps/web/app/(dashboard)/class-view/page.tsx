"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button } from '@repo/ui';
//import { getClassStudents, getClassView } from 'app/utils/utils'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@repo/ui'
import { useRouter } from 'next/navigation';




const modules = [
  {
    title: "Seating Plan",
    description: "To assign the seats to students",
    buttonName: "Take me there",
    href: "/class-view/seating-plan"
  }, {
    title: "Layout",
    description: "To add room layout where you can move around benches",
    buttonName: "Take me there",
    href: "/class-view/class-layout"
  }
]



 function page() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Class View</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    
    
      <div className='text-2xl font-bold tracking-tight '>Class View</div>
      <div className='flex space-x-4'>
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-6 py-6">
        {modules.map((mod,index) => <Card key={index} className="col-span-2">
          <CardHeader>
            <CardTitle>{mod.title}</CardTitle>
            <CardDescription>{mod.description}</CardDescription>
          </CardHeader>
          <CardContent >
            <Button className='bg-blue-700 hover:bg-blue-800' onClick={() => {
              router.push(mod.href)
            }}>{mod.buttonName}</Button>
          </CardContent>
        </Card>)}

      </div>

      </div>

    

    </div>
  )
}

export default page
