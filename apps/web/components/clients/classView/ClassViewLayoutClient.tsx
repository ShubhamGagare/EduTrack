"use client"
import { Button, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@repo/ui"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"



export type layoutsType = {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}


const emptyLayout: layoutsType = {
    id: 0,
    name: "NA"
}

const ClassViewLayoutClient = ({layoutList}:any) => {
    const [layouts, setLayouts] = useState<layoutsType[]>(layoutList)
    const router = useRouter();
  //  setLayouts(layoutList)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         console.log("hello")

    //         const layoutList = await getlayouts()
    //         console.log(layoutList)
    //         setLayouts(layoutList)
    //     }
    //     fetchData();

    // }, []);




    const handleAddLayout = () => {
        router.push("/class-view/class-layout/add")
    }

    const handleEditLayout = (layout: layoutsType) => {
        router.push(`/class-view/class-layout/edit/` + layout.id)
    }


    return (

        <Table className=' rounded-2xl border-2 border-gray-200 bg-white'>
            <TableHeader >
                <div className='flex p-2 justify-between'>

                    <Button className='bg-blue-600' onClick={handleAddLayout}>Add layout</Button>
                </div>

                <TableRow>
                    <TableHead >Layout Name</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {layouts.map((layout, index) => <TableRow key={index} className='border-gray-100 h-14'>
                    <TableCell className="font-medium">{layout.name}</TableCell>
                    <TableCell className='flex justify-end'><Button className='bg-blue-600 ' onClick={() => { handleEditLayout(layout) }} >Edit</Button></TableCell>
                </TableRow>)}

            </TableBody>
        </Table>

    )
}

export default ClassViewLayoutClient
