import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, Form, FormControl, FormField, FormItem, FormLabel, Label, Separator } from "@repo/ui";
//import { getAllComments } from "./SeatingCanvas";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@repo/ui"

export async function StudentProfile({ student }: any) {

    console.log("-----------------student--------------------------->" + JSON.stringify(student))


    return (
        <>      <Card className="flex  h-fit text-center space-x-4 items-center p-4 shadow-md">
            <Avatar className="h-25 w-fit justify-center items-center">
                <AvatarImage className="h-20 w-20  " src={"/avatars/0" + Math.floor((Math.random() * 4 + 1)) + ".png"} />
                <AvatarFallback className="h-20 w-20  ">SN</AvatarFallback>
            </Avatar>
            <div className="flex-col justify-between  h-25 w-fit">
                <Label className="flex text-2xl">{student.username}</Label>
                <div className="flex space-x-4">
                <Label className="flex text-lg text-gray-500">{student.Student.cls.name}</Label>
                <Label className="flex   text-lg text-gray-500" >{student.email}</Label>
                </div>
            </div>
        </Card>
        </>


    );
}