import { Badge, Table, Card, CardContent, CardDescription, CardHeader, CardTitle, Label, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui";
import React from "react";

export async function ListOfRegisters({ array }: any) {

    return (
        <div >
            <div className="py-2 mb-2">

                <Label className="py-2">Here is the status of todays registers</Label>
            </div>
            <Card className="">
                <Table className="">
                    <TableHeader >

                        <TableRow>
                            <TableHead >Class Name</TableHead>
                            <TableHead className="w-fit">Teacher Name</TableHead>
                            <TableHead className="w-fit">Status</TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody className="rounded-2xl w-full items-center">
                        {array.map((reg: any, index: number) => <TableRow key={index} className='row flex-row justify-between items-center h-14'>
                            <TableCell className="">{reg.cls.name}</TableCell>
                            <TableCell className=' '>{reg.teacher.user.username}</TableCell>
                            <TableCell className='flex-col justify-center content-center'><Badge className={`${reg.status === "Completed" ? "bg-green-200 text-green-800 hover:bg-green-300" : "bg-red-100 text-red-800 hover:bg-red-200"} p-1 px-2 rounded-2xl `} >{reg.status !== '' ? reg.status : "Incomplete"}</Badge></TableCell>

                        </TableRow>)}

                    </TableBody>
                </Table>
            </Card>
        </div>
    );


} {/* {array ? (array.map((r: any, index: number) => <div key={index} className="w-full pb-4"><Card className="flex items-center justify-between w-full">
    <CardHeader>
        <CardTitle>{r.cls.name}</CardTitle>
        <CardDescription>{r.teacher.user.username}</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col items-center">
        <Label>{"|" + r.status + "|"}</Label>
        <Badge className={`${r.status === "Completed" ? "bg-green-300 text-green-800" : "bg-gray-200 text-gray-800"} p-1 px-2 rounded-2xl `}>{r.status !== '' ? r.status : "Ready"}</Badge>
    </CardContent>

</Card></div>)) : (
    <div>No register data available.</div>
)} */}
