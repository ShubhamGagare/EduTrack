"use client"
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Separator, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@repo/ui"
import { useRouter } from 'next/navigation';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from "@repo/ui"
import { useForm } from "react-hook-form"


const SeatingPlanClient = ({ data }: any) => {
  const form = useForm()
  const clses: any = data?.clses;
  const layouts = data.layouts;
  const plans = data.seatingPlan;
  const router = useRouter();

  //Add/edit seating plan
  const handleAddSeatingPlan = (data: any) => {
    const cls = clses.filter((cls:any) => cls.name === data.clsName)
    const layout = layouts.filter((layout:any) => layout.name === data.layoutName)

    
    router.push(`/class-view/seating-plan/${"add"}/${layout[0].id}/${cls[0].id}/${data.name}`)
  }


  //Add/edit seating plan
  const handleEditSeatingPlan = (data: any) => {
    router.push(`/class-view/seating-plan/${"edit"}/${data.layoutId}/${data.classId}/${data.id}`)
  }

  const handleViewSeatingPlan = (data: any) => {
    router.push(`/class-view/seating-plan/${"view"}/${data.layoutId}/${data.classId}/${data.id}`)
  }

  return (
    <div className="rounded-xl">
      <div className='flex p-4 rounded-xl  justify-end w-full'>

        <Sheet>
          <SheetTrigger asChild>
            <Button className='flex justify-self-end-end' variant={"outline"}>Add Seating Plan</Button>
          </SheetTrigger>
          <SheetContent >
            <SheetHeader>
              <SheetTitle>Add Seating Plan</SheetTitle>
              <SheetDescription>
                Add seating plan details. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleAddSeatingPlan)} className="flex-col">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Seating plan name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter the seating plan name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>

                    )}
                  />

                  <FormField
                    control={form.control}
                    name="clsName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Class name</FormLabel>
                        <Select
                          onValueChange={field.onChange}

                          defaultValue={field.value}
                          value={field.value}
                        
                        >
                          <FormControl>

                            <SelectTrigger className="">
                              <SelectValue placeholder="Select a class" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Select a class</SelectLabel>
                              {clses?.map((cls: any, index: number) => <SelectItem key={index} value={cls.name} textValue={cls.name} defaultValue={cls.name}>{cls.name}</SelectItem>)}
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>

                    )}
                  />
                  <FormField
                    control={form.control}
                    name="layoutName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Class name</FormLabel>
                        <Select
                          onValueChange={field.onChange}

                          defaultValue={field.value}
                          value={field.value}

                        >
                          <FormControl>

                            <SelectTrigger className="">
                              <SelectValue placeholder="Select a layout" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Select a layout</SelectLabel>
                              {layouts?.map((layout: any, index: number) => <SelectItem key={index} value={layout.name}>{layout.name}</SelectItem>)}
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>

                    )}
                  />
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button className=" mt-4 w-full" type="submit" onClick={handleAddSeatingPlan}>Add</Button>
                    </SheetClose>
                  </SheetFooter>
                </form>
              </Form>
            </div>

          </SheetContent>
        </Sheet>
      </div>
      <Table className=' rounded-2xl border-2 w-full '>
        <TableHeader className="w-full space-y-2 ">



          <TableRow className=" border p-2 ">
            <TableHead className="text-lg py-4 px-8"  >Name</TableHead>
            {/* <TableHead>Class</TableHead> */}
            <TableHead className="text-lg">Layout Name</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>

          </TableRow>
        </TableHeader>
        <TableBody className=" bg-gray-100 space-y-2">
          {plans.map((plan: any, index: number) => <TableRow key={index} className='border-gray-200 bg-white h-14'>
            <TableCell className="text-md p-2  px-8">{plan.name}</TableCell>
            {/* <TableCell>{plan.class}</TableCell> */}
            <TableCell >{plan.layout.name}</TableCell>
            <TableCell className=' '><Button className=' ' variant={"outline"} onClick={() => (handleViewSeatingPlan(plan))}>View</Button></TableCell>

            <TableCell className=' justify-end'><Button className=' ' variant={"outline"} onClick={() => (handleEditSeatingPlan(plan))}>Edit</Button></TableCell>
          </TableRow>)}

        </TableBody>
      </Table>
    </div>
  )
}

export default SeatingPlanClient
