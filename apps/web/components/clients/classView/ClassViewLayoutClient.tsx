"use client"
import { Button, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@repo/ui"
import { useRouter } from 'next/navigation'



const layouts = [{
    name: "Layout 1",
    class: "Class 1"
}, {
    name: "Layout 2",
    class: "Class 1"
},]




const ClassViewLayoutClient = () => {

    const router = useRouter();
    const handleAddLayout = () => {
        router.push("/class-view/class-layout/add")
    }


    return (

        <Table className=' rounded-2xl border-2 border-gray-200 bg-white'>
            <TableHeader >
                <div className='flex p-2 justify-between'>

                    <Button className='bg-blue-600' onClick={handleAddLayout}>Add layout</Button>
                </div>

                <TableRow>
                    <TableHead >Layout Name</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {layouts.map((layout, index) => <TableRow key={index} className='border-gray-100 h-14'>
                    <TableCell className="font-medium">{layout.name}</TableCell>
                    <TableCell>{layout.class}</TableCell>
                    <TableCell className='flex justify-end'><Button className='bg-blue-600 '>Edit</Button></TableCell>
                </TableRow>)}

            </TableBody>
        </Table>

    )
}

export default ClassViewLayoutClient
