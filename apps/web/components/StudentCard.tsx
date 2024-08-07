import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, Form, FormControl, FormField, FormItem, FormLabel, Label, Separator } from "@repo/ui";
import Desk from "./Desk";
import { calculateAttendnace, getStudentData } from "../app/utils/utils";
import { MessageSquareText } from "lucide-react";
//import { getAllComments } from "./SeatingCanvas";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui"

export async function StudentCard({ student }: any) {

  console.log("-----------------student--------------------------->" + JSON.stringify(student))
  const studentDetails: any = await getStudentData(student.id)
  console.log("-----studentDetails------------->" + JSON.stringify(studentDetails))

  const attendanceInsight = await calculateAttendnace(studentDetails?.Attendance)
  console.log("-----attendanceInsight------------->" + JSON.stringify(attendanceInsight))

  return (
    <>      <div className="flex-col justify-between items-center w-full h-full text-center ">
      <Avatar className="h-25 w-full justify-center items-center">
        <AvatarImage className="h-20 w-20  " src={"/avatars/0" + Math.floor((Math.random() * 4 + 1)) + ".png"} />
        <AvatarFallback className="h-20 w-20  ">SN</AvatarFallback>
      </Avatar>
      <Label className="content-center w-full text-center ">{student.user.username}</Label>
      <Separator />
      <div className="flex w-full  justify-between gap-x-0.5 items-center bg-gray-200">
        <Button className="bg-white rounded-none" variant={"ghost"}>{attendanceInsight.percentage}%</Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full bg-white rounded-none" variant={"ghost"} size="icon" ><MessageSquareText size={20} /></Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 h-96 overflow-auto">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Recent Comments</h4>
              </div>
              <div className="grid gap-2">
                {studentDetails.Attendance.map((day:any,index:number) => 

                day.comment && <Card key={index} className="p-2">
                  <Label className="w-full">{day.comment}</Label>
                  <Label className="flex justify-end text-sm text-gray-400 ">{day.date.toDateString()}</Label>
                </Card>
                
                
                )}
                
     
              </div>
            </div>
          </PopoverContent>
        </Popover>



      </div>
      <div className="flex gap-x-2 overflow-auto">

        {studentDetails !== undefined && studentDetails?.Attendance[studentDetails?.Attendance.length - 1].status == "absent" ? <Badge className="rounded-xl bg-red-200 text-gray-700">Absent</Badge> :
          studentDetails?.Attendance[studentDetails?.Attendance.length - 1].status == "late" ? <Badge className="rounded-xl bg-yellow-200 text-gray-700">Late</Badge> : ""}
  

      </div>
    </div>
    </>


  );
}