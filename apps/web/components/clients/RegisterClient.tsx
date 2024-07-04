"use client"

import { Button, Card, CardContent, CardHeader, CardTitle, Checkbox, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui"
import Link from "next/link"
import { useEffect, useState } from "react"
import { regType, updateRegister } from "../../app/(dashboard)/take-register/register/[...registerIds]/page"
import { StudentCard } from "@repo/ui"
import { useRouter } from "next/navigation"
import { registerType } from "./ListRegisterClient"
import { Check, Clock, User2, X } from "lucide-react"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


//import { useSearchParams } from "next/navigation";



const RegisterClient = ({ register }: { register: any }) => {

    const buttons = [{ name: "Late" }, { name: "Present" }, { name: "Absent" }]
    const router = useRouter();
    const [attendance, setAttendance] = useState(register.Attendance);
    const [i, setIndex] = useState(0);
    const [marked, setMarked] = useState(0)
    const [isCheckAll, setCheckAll] = useState(false)
    const [isChecked, setIsChecked] = useState(new Array(register.Attendance.length).fill(false))


    useEffect(() => {
        getMarkedStudentNo();

    }, [attendance])


    const getMarkedStudentNo = () => {
        let mark = 0
        attendance.map((s: { status: string }) => {
            if (s.status && s.status.length > 0) {
                mark = mark + 1
                setMarked(mark)
                console.log("Status from inside-->" + mark+"------"+ s.status.length)

            }
        })
    }


    async function handleAttendance() {
        register.Attendance = attendance;
        // Call updateRegister function
        try {
            const updatedRegister = {
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
        updatedAttendance[index].status = newStatus;  // Update the status of the specific item
        setAttendance(updatedAttendance);  // Update the state with the new array
        setIndex(i === register.Attendance.length - 1 ? i : i + 1)

    };

    const getNumberByStatus = (mark: string) => {
        let markCount = 0;
        attendance.map((s: { status: string }) => {
            if(s.status === mark){
                markCount = markCount + 1
            }
        })
        return markCount
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between">
                <div className="text-2xl font-bold tracking-tight">{register.cls.name}</div>
                <div>{marked}/{attendance.length}</div>
            </div>
            <div className="space-y-2">
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

                <Table className="border  rounded-4xl">
                    <TableCaption></TableCaption>
                    <TableHeader >
                        <TableRow>
                            <TableHead className="px-4 pr-4 w-4 ">
                                <Checkbox className="mr-4" onClick={handleSelectAll} checked={isCheckAll} />
                            </TableHead>
                            <TableHead className="w-4 h-full"></TableHead>
                            <TableHead>Name</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {attendance.map((s: { status: string, student: { user: { username: string } } }, index: number) =>
                            <TableRow onClick={() => { setIndex(index) }} className={`${index === i ? "border border-4 border-blue-500 " : ""} `}>
                                <TableCell className="px-4 pr-4 w-4 ">
                                    <Checkbox onClick={(e) => { e.stopPropagation(); handleSelect(index) }} checked={isChecked[index]}></Checkbox>
                                </TableCell>
                                <TableCell className={`${s.status === "Late" ? "bg-yellow-300 " : s.status === "Present" ? "bg-green-300" : "bg-red-300"} flex justify-center h-full`}>{s.status === "Late" ? <Clock /> : s.status === "Present" ? <Check /> : <X />}</TableCell>
                                <TableCell>{s.student.user.username}</TableCell>
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
                    {buttons.map(btn => <Button className={`${btn.name === "Late" ? "bg-yellow-400 hover:bg-yellow-500" : btn.name === "Present" ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500"} text-gray-800`} onClick={() => {

                        updateStatus(i, btn.name)

                    }}>{btn.name}</Button>)}
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-blue-500 hover:bg-blue-600" >{"Submit the register"}</Button>
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
                                        <div>{getNumberByStatus("Late")}</div>
                                    </div>

                                    <div className="flex flex-col items-center" >
                                        <div className="bg-green-400 rounded-full w-fit p-2"><Check /></div>
                                        <div >Present </div>
                                        <div>{getNumberByStatus("Present")}</div>


                                    </div>
                                    <div className="flex flex-col items-center" >
                                        <div className="bg-red-400 rounded-full w-fit p-2"><X /></div>
                                        <div >Absent </div>
                                        <div>{getNumberByStatus("Absent")}</div>


                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <Button className="bg-gray-500 hover:bg-gray-600" onClick={handleAttendance}>Cancel</Button>
                                    <Button className="bg-blue-500 hover:bg-blue-600" onClick={handleAttendance}>Submit the register</Button>

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
