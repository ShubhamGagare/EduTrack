"use client"

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Separator } from "@repo/ui/"
import { Badge } from "@repo/ui/"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui/"
import Link from "next/link"
import { useState } from "react"



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
    "studentId": number,
    "status": string
  }


}



const ListRegisterClient = ({ regData, register }: { regData: registerType[], register: registerType[] }) => {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  console.log(regData)
  return (
    <div className="flex flex-col w-full space-y-8">
      <div className="flex w-full justify-between">
        <div className="">
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
        <div>
                    <Button></Button>
        </div>           
      </div>

      <div className="w-full space-y-4">
        {register ? (register.map(r => <Link className="w-full" href={{
          pathname: `./take-register/register/${r.id}`,

        }}><div className="w-full pb-4"><Card className="flex items-center justify-between">
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
