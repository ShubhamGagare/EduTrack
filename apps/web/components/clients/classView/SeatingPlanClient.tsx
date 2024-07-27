"use client"
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@repo/ui"
import { useRouter } from 'next/navigation';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from "@repo/ui"
import { useForm } from "react-hook-form"
import { getClasses } from "app/utils/utils";

const plans = [{
  name: "Plan 1",
  class: "Class 1",
  layout: "Layout 1"
}, {
  name: "Plan 2",
  class: "Class 1",
  layout: "Layout 1"

},]
const SeatingPlanClient = (data:any) => {
  const form = useForm()
  console.log("--data-----------" + JSON.stringify(data))
  const clses: any = data.data?.clses;
  const layouts = data.data.layouts
  const router = useRouter();
  const handleAddSeatingPlan = (data: any) => {
    console.log("------------opening seating plan------------------")
    console.log(data)
       router.push(`/class-view/seating-plan/${data.layoutName}/${data.clsName}`)
  }

  return (
    <div>
      <Table className=' rounded-2xl border-2 border-gray-200 bg-white'>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader >
          <div className='flex p-2 justify-between'>

            <Sheet>
              <SheetTrigger asChild>
                <Button className='bg-blue-600'>Add Seating Plan</Button>
              </SheetTrigger>
              <SheetContent>
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
                        name="seatingPlanName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Layout Name</FormLabel>
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
                                  {clses?.map((cls: any, index: number) => <SelectItem key={index} value={cls.name}>{cls.name}</SelectItem>)}
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
                                  {layouts?.map((layout: any, index: number) => <SelectItem key={index} value={layout.id}>{layout.name}</SelectItem>)}
                                </SelectGroup>
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>

                        )}
                      />
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button type="submit" onClick={handleAddSeatingPlan}>Save changes</Button>
                        </SheetClose>
                      </SheetFooter>
                    </form>
                  </Form>
                </div>

              </SheetContent>
            </Sheet>
          </div>
          <TableRow>
            <TableHead >Seating Plan Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Layout Name</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((plan, index) => <TableRow key={index} className='border-gray-100 h-14'>
            <TableCell className="font-medium">{plan.name}</TableCell>
            <TableCell>{plan.class}</TableCell>
            <TableCell>{plan.layout}</TableCell>
            <TableCell className='flex justify-end'><Button className='bg-blue-600 '>Edit</Button></TableCell>
          </TableRow>)}

        </TableBody>
      </Table>
    </div>
  )
}

export default SeatingPlanClient
