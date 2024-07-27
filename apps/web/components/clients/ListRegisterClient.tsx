"use client"

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@repo/ui"
import { Badge, Calendar } from "@repo/ui"
//import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui"
import Link from "next/link"
import { useState } from "react"
import { Form, FormControl, FormField, FormItem,  FormMessage, } from "@repo/ui"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@repo/ui"
import { cn } from "@repo/ui/utils"
import { customDateRegisters } from "app/utils/utils"
 
export interface registerType {

  "id": number,
  "classId": number,
  "teacherId": number,
  "date": string,
  "status": string,
  "cls": {
    "id": number,
    "name": string,
    "teacherId": number
  },
  "teacher": {
    "id": number,
    "userId": number,
    "user": {
      "id": number,
      "username": string,
    }
  },
  "student": {
    "id": number,
  },
  "Attendance": {
    "studentId"?: number,
    "status"?: string
  }


}



const ListRegisterClient = ({ regData, register }: { regData: registerType[], register: registerType[] }) => {

  const [reg, setRegister] = useState(register)
  const [selectedDate, setDate] = useState(new Date())
  const FormSchema = z.object({
    dob: z.date({
      required_error: "Enter the date.",
    }),
  })

  

  // Handle date selection
  const handleSelectDate = async (date: any) => {
    setDate(date);
    if (register[0]?.teacherId !== undefined) {
      console.log("binding data--"+ date)
      try {
        //test.bind(null)
        const registers: any =  await customDateRegisters(date, register[0]?.teacherId)
        console.log("binding data---" + JSON.stringify(registers));
        setRegister(registers);
        //regData = registers
      } catch (e) {
        console.log(e)
      }
    }

  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("---------toast-----------")
    toast({

      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
  console.log("Updated data-----------"+JSON.stringify(reg))
  return (
    <div className="flex flex-col w-full space-y-2">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-14 py-6">
        <div className="w-full ">
          <Popover  >
            <PopoverTrigger className="w-72">
              <Command className="rounded-lg border  w-72">
                <CommandInput placeholder="Search classes or registers..." className="w-72" />
              </Command>

            </PopoverTrigger>
            <PopoverContent className="max-w-full">
              <Command className="min-w-full">
                <CommandList className="min-w-full" >
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup className="min-w-full" heading="List of registers">
                    {regData.map((register) =>
                      <Link className="w-full" href={{
                        pathname: `./take-register/register/${register.id}`,

                      }}><CommandItem className="min-w-full" >
                          <div className=" text-left">
                            <span className="px-8 text-left">{"Class " + register.classId}</span>
                          </div>

                        </CommandItem>
                      </Link>

                    )}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

        </div>
        <div  className="w-full  ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal w-full",

                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              format(selectedDate, "PPP")
                            )
                            }
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleSelectDate}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus

                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>

                )}
              />
              {/* <Button type="submit">Submit</Button> */}
            </form>
          </Form>
        </div>
      </div>
      <div className="w-full space-y-4">
        {reg ? (reg.map(r => <Link className="w-full" href={{
          pathname: `./take-register/register/${r.id}`,

        }}><div className="w-full pb-4"><Card className="flex items-center justify-between w-full">
          <CardHeader>
            <CardTitle>{r.cls.name}</CardTitle>
            <CardDescription>{r.teacher.user.username}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Badge className={`${r.status === "Completed" ? "bg-green-300 text-green-800" : "bg-gray-200 text-gray-800"} p-1 px-2 rounded-2xl `}>{r.status !== "" ? r.status : "Ready"}</Badge>
          </CardContent>

        </Card></div></Link>)) : (
          <div>No register data available.</div>
        )}
      </div>
    </div>

  )
}

export default ListRegisterClient
