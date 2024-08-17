"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Badge, Button, Checkbox, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Label, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, Textarea } from "@repo/ui"
import { useEffect, useState } from "react"
import { getAttendacePattern, updateRegister } from "../../app/utils/utils"
import { useRouter } from "next/navigation"
import { Check, Clock, User2,  X } from "lucide-react"
import { registerType } from "./ListRegisterClient"
import { Register as RegisterType,Attendance as AttendanceType, Prisma } from "@repo/db"
import { reisterPropType } from "app/(dashboard)/take-register/register/[...registerIds]/page"

// type attendancePropType =  Prisma.AttendanceGetPayload<{
//     include:{
//         id: true,
//         student: {
//           select: {
//             user: {
//               select: {
//                 username: true 
//               }
//             },

//           }
//         },
//         status: true,
//         comment: true,
//         lateMinutes: true
//     }
// }>
// type registerType = RegisterType & { Attendance: attendancePropType[]}

//import { useSearchParams } from "next/navigation";



const RegisterClient = ({ register }: { register: reisterPropType }) => {

    const buttons = [{ name: "late" }, { name: "present" }, { name: "absent" }]
    const router = useRouter();
    const [attendance, setAttendance] = useState(register.Attendance);
    const [i, setIndex] = useState(0);
    const [marked, setMarked] = useState(0)
    const [isCheckAll, setCheckAll] = useState(false)
    const [isChecked, setIsChecked] = useState(new Array(register.Attendance.length).fill(false))
    const [insight, setInsight] = useState(new Array(register.Attendance.length).fill({
        insight: "",
        tags: ["", ""]
    }))


    useEffect(() => {
        getMarkedStudentNo();

    }, [attendance])


    const getMarkedStudentNo = () => {
        let mark = 0
        attendance.map((s:any) => {
            if (s.status && s.status.length > 0) {
                mark = mark + 1
                setMarked(mark)
            //    console.log("Status from inside-->" + mark + "------" + s.status.length)

            }
        })
    }


    async function handleAttendance() {
        register.Attendance = attendance;
        // Call updateRegister function
     //   console.log("Submitting Attendance --->" + JSON.stringify(attendance));
        try {
            const updatedRegister:any = {
                ...register,
                Attendance: attendance
            };

            // Call updateRegister function with updated register object
            await updateRegister(updatedRegister);
            router.back()

        } catch (e) {
            console.log(e)
        }
    }



    const handleSelectAll = () => {
        setCheckAll(!isCheckAll);
        setIsChecked(new Array(attendance.length).fill(!isCheckAll));
    }

    const handleSelect = (index: number) => {
        const updatedIsChecked = [...isChecked];
        updatedIsChecked[index] = !updatedIsChecked[index];
        setIsChecked(updatedIsChecked);

        // If not all checkboxes are checked, uncheck the "Select All" checkbox
        if (!updatedIsChecked.every(Boolean)) {
            setCheckAll(false);
        }
        // If all checkboxes are checked, check the "Select All" checkbox
        else if (updatedIsChecked.every(Boolean)) {
            setCheckAll(true);
        }
    }

    const updateStatus = (index: number, newStatus: string) => {
        const updatedAttendance = [...attendance];  // Create a copy of attendance array
        if (isCheckAll) {
            updatedAttendance.map((student) => student.status = newStatus)
            handleSelectAll()
        } else {
            if(!updatedAttendance[index]) throw new Error("Attendance not found")
            updatedAttendance[index].status = newStatus;  // Update the status of the specific item
        }
        setAttendance(updatedAttendance);  // Update the state with the new array
        setIndex(i === register.Attendance.length - 1 ? i : i + 1)

    };

    const getNumberByStatus = (mark: string) => {
        let markCount = 0;
        attendance.map((s: any) => {
            if (s.status === mark) {
                markCount = markCount + 1
            }
        })
        return markCount
    }
    const callAI = async (id: number) => {
        const data = await getAttendacePattern(id + 1)

        const insight = JSON.parse(data)

        if(insight.results[0]!== undefined){
        updateInsight(id, insight.results[0])
        }

    }

    function updateInsight(index: number, newInsight: any) {
        // Clone the current state array to avoid mutating it directly
        const updatedInsights = [...insight];

        // Update the insight for studentId (assuming studentId is 1-based index)
        updatedInsights[index] = newInsight;

        // Set the updated state
        setInsight(updatedInsights);
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between">
                <div className="text-2xl font-bold tracking-tight">{register.cls.name}</div>
                <div>{marked}/{attendance.length}</div>
            </div>
            <div className="space-y-2 h-[calc(460px)]">
                {/* {attendance.map((s: { status: string, student: { user: { username: string } } }, index: number) => <Link href=""  > <a onClick={() => { setIndex(index) }}><StudentCard style={`${index === i ? "border border-4 border-blue-500 " : ""}`} title={s.student.user.username} status={s.status}>
                    <div></div>
                </StudentCard></a> </Link>)}
                 */}
                {/* 
                    {attendance.map((s: { status: string, student: { user: { username: string } } }, index: number) => <Link href=""  > <a onClick={() => { setIndex(index) }}><Card className={`${index === i ? "border border-4 border-blue-500 " : ""} `}>
                        <CardHeader className="p-2 px-2">
                            <CardTitle>{s.student.user.username}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {s.status}
                        </CardContent>
                    </Card></a> </Link>)} */}

                <Table className="border  rounded-4xl ">
                    <TableCaption></TableCaption>
                    <TableHeader >
                        <TableRow>
                            <TableHead className="px-4 pr-4 w-4 ">
                                <Checkbox className="mr-4" onClick={handleSelectAll} checked={isCheckAll} />
                            </TableHead>
                            <TableHead className="w-8 h-full"></TableHead>
                            <TableHead className="">Name</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody className="overflow-auto scroll-m-1 bg-slate-200">
                        {attendance.map((s: any, index: number) =>
                            <TableRow onClick={() => { setIndex(index) }} className={`${index === i ? " border-4 border-primary " : ""} bg-white`}>
                                <TableCell className="px-4 pr-4 w-4 ">
                                    <Checkbox onClick={(e) => { e.stopPropagation(); handleSelect(index) }} checked={isChecked[index]}></Checkbox>
                                </TableCell>
                                <TableCell className={`${s.status === "late" ? "bg-yellow-300 " : s.status === "present" ? "bg-green-300" : s.status === "absent" ? "bg-red-300" : "bg-gray-300"} w-4`}>{s.status === "late" ? <Clock className="text-yellow-900 " size={20} /> : s.status === "present" ? <Check className="text-green-900" size={20} /> : s.status === "absent" ? <X className="text-red-900" size={20} /> : <div className="hidden"></div>}</TableCell>
                                {/* 
                                <TableCell className="w-fit">{s.student.user.username}
                                    <div className="hidden">
                                        <Label>Comment</Label>
                                        <Textarea></Textarea>
                                    </div>

                                </TableCell> */}
                                <TableCell className="px-[-2]">
                                    <Accordion type="single" collapsible className="w-full ">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className="hover:bg-violet-100 px-2 space-x-2" onClick={() => { callAI(index) }}>
                                                {/* <UserCircle2 className="w-fit " size={32} color="gray" ></UserCircle2> */}
                                                <Label className="w-full text-left">{s.student.user.username}</Label>
                                            </AccordionTrigger>
                                            <AccordionContent className="p-2">
                                                <div className="space-y-2">
                                                    <div className="w-96 space-y-2">
                                                        <Label className="font-black">Comment</Label>
                                                        <Textarea onChange={(e) => {
                                                            s.comment = e.target.value
                                                        }}>{s.comment}</Textarea>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label className="font-black">Recent Observations</Label>
                                                        <div>{insight[index].insight}</div>
                                                        <div className="flex space-x-2">
                                                            <div><Badge className="bg-teal-200 text-gray-800 rounded-full p-1 px-4 text-sm">{insight[index].tags[0]}</Badge></div>

                                                            <div><Badge className="bg-teal-200 text-gray-800 rounded-full p-1 px-4 text-sm">{insight[index].tags[1]}</Badge></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </TableCell>

                            </TableRow>


                        )}
                    </TableBody>


                </Table>


            </div>
            <div className="w-full flex justify-between ">
                <div className="space-x-4">
                    {/* {buttons.map(btn => <Button style={
                        btn.name === "Late" ? "bg-yellow-500" : btn.name === "Present" ? "bg-green-500" : "bg-red-500"
                    } onClick={() => {

                        updateStatus(i, btn.name)

                    }}>{btn.name}</Button>)}
                     */}
                    {buttons.map(btn => <Button className={`${btn.name === "late" ? "bg-yellow-400 hover:bg-yellow-500" : btn.name === "present" ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500"} text-gray-800`} onClick={() => {

                        updateStatus(i, btn.name)

                    }}>{btn.name.charAt(0).toUpperCase() + btn.name.slice(1)}</Button>)}
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className=" hover:" >{"Submit the register"}</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Register Summary</DialogTitle>
                            <DialogDescription>
                                Summary of register.
                            </DialogDescription>
                            <div >
                                <div className="flex justify-between py-8">
                                    <div className="flex flex-col items-center" >
                                        <div className="bg-gray-400 rounded-full w-fit p-2"><User2 /></div>
                                        <div>{marked}/{attendance.length} Total </div>
                                        <div></div>
                                    </div>

                                    <div className="flex flex-col items-center" >
                                        <div className="bg-yellow-400 rounded-full w-fit p-2"><Clock /></div>
                                        <div >Late </div>
                                        <div>{getNumberByStatus("late")}</div>
                                    </div>

                                    <div className="flex flex-col items-center" >
                                        <div className="bg-green-400 rounded-full w-fit p-2"><Check /></div>
                                        <div >Present </div>
                                        <div>{getNumberByStatus("present")}</div>


                                    </div>
                                    <div className="flex flex-col items-center" >
                                        <div className="bg-red-400 rounded-full w-fit p-2"><X /></div>
                                        <div >Absent </div>
                                        <div>{getNumberByStatus("absent")}</div>


                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <Button className="bg-gray-500 hover:bg-gray-600" onClick={handleAttendance}>Cancel</Button>
                                    <Button className=" hover:" onClick={handleAttendance}>Submit the register</Button>

                                </div>

                            </div>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>







        </div>
    )
}


export default RegisterClient
