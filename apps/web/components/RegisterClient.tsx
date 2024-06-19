"use client"

import { Button } from "@repo/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { updateRegister } from "../app/(dashboard)/take-register/register/[...registerIds]/page"
import { StudentCard } from "@repo/ui/StudentCard"

//import { useSearchParams } from "next/navigation";
const RegisterClient = ({ register }: { register: any }) => {
    const buttons = [{ name: "Late" }, { name: "Present" }, { name: "Absent" }]

    async function handleAttendance() {
        register.Attendance = attendance;
        // Call updateRegister function
        try {
            const updatedRegister = {
                ...register,
                Attendance: attendance
            };

            console.log("Updated Register:", updatedRegister);

            // Call updateRegister function with updated register object
            await updateRegister(updatedRegister);


        } catch (e) {
            console.log(e)
        }
    }

    const [attendance, setAttendance] = useState(register.Attendance);
    const [i, setIndex] = useState(0);


    const updateStatus = (index: number, newStatus: string) => {
        const updatedAttendance = [...attendance];  // Create a copy of attendance array
        updatedAttendance[index].status = newStatus;  // Update the status of the specific item
        setAttendance(updatedAttendance);  // Update the state with the new array
    };

    return (
        <div className="space-y-8">
            <div className="text-2xl">{register.cls.name}</div>
            <div className="space-y-2">
                {attendance.map((s: { name: string }, index: number) => <Link href=""  > <a  onClick={() => { setIndex(index) }}><StudentCard style={`${index === i?"border border-4 border-blue-500 ":""}`} title={s.student.user.username} status={s.status}>
                    <div></div>
                </StudentCard></a> </Link>)}
            </div>
            <div className="w-full flex justify-between ">
                <div className="space-x-4">
                    {buttons.map(btn => <Button style={
                        btn.name === "Late" ? "bg-yellow-500" : btn.name === "Present" ? "bg-green-500" : "bg-red-500"
                    } onClick={() => {

                        updateStatus(i, btn.name)

                    }}>{btn.name}</Button>)}
                </div>
                <Button style="bg-blue-600" onClick={handleAttendance}>{"Submit the register"}</Button>

            </div>






        </div>
    )
}

export default RegisterClient
