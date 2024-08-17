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

const ClassViewLayoutClient = ({ layoutList }: any) => {
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
        <>
            <div className='flex px-2 justify-end w-full'>

                <Button className='' variant={"outline"} onClick={handleAddLayout}>Add layout</Button>
            </div>
            <div className=' rounded-2xl border-2 p-2 w-full bg-clip-border'>
                <Table >
                    <TableHeader >

                        <TableRow>
                            <TableHead >Layout Name</TableHead>
                            <TableHead className="w-fit"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="rounded-2xl w-full">
                        {layouts.map((layout, index) => <TableRow key={index} className='row flex-row justify-between items-center h-14'>
                            <TableCell className=" justify-stretch font-medium w-full">{layout.name}</TableCell>
                            <TableCell className=' w-fit justify-end'><Button className=' ' variant={"outline"} onClick={() => { handleEditLayout(layout) }} >Edit</Button></TableCell>
                        </TableRow>)}

                    </TableBody>
                </Table>
            </div>

        </>
    )
}

export default ClassViewLayoutClient
