"use client"
import { Button } from '@repo/ui'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@repo/ui'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@repo/ui";

export default function page() {

  const router = useRouter();
  const modules = [
    {
      title: "Registers",
      description: "To take daily attendance of the students",
      buttonName: "Take me there",
      href: "/take-register"
    }, {
      title: "Class view",
      description: "Feature coming soon!!!",
      buttonName: "Take me there",
      href: "/class-view"
    }
  ]

  return (
    <>
      <div className='space-y-4'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8 py-6">
        {modules.map(mod => <Card className="col-span-4">
          <CardHeader>
            <CardTitle>{mod.title}</CardTitle>
            <CardDescription>{mod.description}</CardDescription>
          </CardHeader>
          <CardContent >
            <Button onClick={() => {
              router.push(mod.href)
            }}>{mod.buttonName}</Button>
          </CardContent>
        </Card>)}

      </div>

    </>
  )
}
