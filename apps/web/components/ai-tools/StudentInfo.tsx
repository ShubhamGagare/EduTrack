
import { PrismaClient } from "../../../../packages/db/prisma/generated/client";
import { getStudentData } from "../../app/utils/utils";
import { StudentAttendance } from "../StudentAttendance";


const client = new PrismaClient()
export async function StudentInfo({ studentName }: any) {
    console.log("student name"+studentName)
    const response: any = await client.user.findFirst({
        where: {

            username: studentName

        },
        select: {
            id: true,
            username:true,
            email:true
        }

    })


    //const data = response.data
    console.log(response)

    const studentAttendance = await getStudentData(response.id)
    //console.log(studentAttendance)
    const studentAttendanceProps = {
        attendance:studentAttendance?.Attendance,
        studentData:response
    }
      const ele = <StudentAttendance studentAttendanceProps={studentAttendanceProps}/>
    return ele;
}