"use client"
import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui"
import { useRouter } from 'next/navigation';


const plans = [{
  name: "Plan 1",
  class: "Class 1",
  layout: "Layout 1"
}, {
  name: "Plan 2",
  class: "Class 1",
  layout: "Layout 1"

},]
const SeatingPlanClient = () => {
 
  const router = useRouter();
  const handleAddSeatingPlan = () => {
    console.log("------------opening seating plan------------------")
      router.push(`/class-view/seating-plan/${4}`)
  }

  return (
    <div>
      <Table className=' rounded-2xl border-2 border-gray-200 bg-white'>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader >
          <div className='flex p-2 justify-between'>

            <Button className='bg-blue-600' onClick={handleAddSeatingPlan}>Add Seating Plan</Button>
          </div>
          <TableRow>
            <TableHead >Seating Plan Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Layout Name</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plans.map((plan, index) => <TableRow className='border-gray-100 h-14'>
            <TableCell className="font-medium">{plan.name}</TableCell>
            <TableCell>{plan.class}</TableCell>
            <TableCell>{plan.layout}</TableCell>
            <TableCell className='flex justify-end'><Button className='bg-blue-600 '>Edit</Button></TableCell>
          </TableRow>)}

        </TableBody>
      </Table>
    </div>
  )
}

export default SeatingPlanClient
