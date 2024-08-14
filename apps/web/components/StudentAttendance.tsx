import { calculateAttendnace, getAttendacePattern } from "../app/utils/utils";
import { AttendancePattern, AttendancePie, StudentProfile } from "components";
import { Label } from "@repo/ui";





export async function StudentAttendance({ studentAttendanceProps }: any) {
    console.log("calculating insights" + JSON.stringify(studentAttendanceProps))
    const attendance = studentAttendanceProps?.attendance
    const insight = await calculateAttendnace(attendance)
    const attendancePattern = await getAttendacePattern(attendance[0].studentId)
    console.log("attendancePattern-->" + JSON.stringify(attendancePattern))
    return (<div className="w-full">
        <div className="py-2 mb-2">
            <Label >Here is the information of  {studentAttendanceProps?.studentData.username}</Label>
        </div>
        <div className="flex-col space-y-2 ">
            <StudentProfile student={studentAttendanceProps?.studentData} />
            <div className="flex space-x-2 justify-between">
                <AttendancePie insight={insight} />
                <AttendancePattern attendancePattern={attendancePattern} />
            </div>
        </div>
    </div>)
}