"use client"
import { DndContext, KeyboardSensor, MouseSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { DragEndEvent } from "@dnd-kit/core/dist/types";
import { CanvasCard } from "./clients/classView/ClassViewClient";
import { Draggable } from "./Draggable";
import { Avatar, AvatarFallback, AvatarImage, Badge, Button, Card, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Label, Popover, PopoverContent, PopoverTrigger, Separator } from "@repo/ui";
import { useEffect, useState } from "react";
import Desk from "./Desk";
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@repo/ui"
import { findStudentById, getStudentDetails, propSeatingType, saveSeatingPlan, studentsType } from "./clients/classView/SeatingClients/AddSeatingPlan";
import { Attendance, Student } from "../../../packages/db/prisma/generated/client";
import { number } from "zod";
import { useRouter } from "next/navigation";
import { MessageSquareText } from "lucide-react";

type seatingArrangementType = {
    deskId: number,
    studentId: number
}

export const calculateAttendnace = (attendance: any[]) => {
    const attendanceInsight = {
        presents: 0,
        absents: 0,
        percentage: 0
    }

    attendance.map((day: any, index: any) => {
        if (day.status === "present") {
            attendanceInsight.presents = attendanceInsight.presents + 1;
        }
        if (day.status === "absent") {
            attendanceInsight.absents = attendanceInsight.absents + 1;
        }
    })

    attendanceInsight.percentage = Number(((attendanceInsight.presents / attendance.length) * 100).toFixed(0))

    return attendanceInsight;
}

export const SeatingCanvas = ({ props }: any) => {
    const [i, setIndex] = useState(0);
    const form = useForm()
    const [deskCount, setDeskCount] = useState(1)
    const [studentDetails, setStudentDetails] = useState<any>()

    const [seatingArrangements, setSeatingArrangements] = useState<seatingArrangementType[]>(props.seatingArrangements.length > 0 ? props.seatingArrangements : [])
    const router = useRouter()

    const updatedCards: CanvasCard[] = []
    // props.desks.map((card: CanvasCard) => {

    //     updatedCards.push({
    //         id: card.id, coordinates: card.coordinates, studentCard: card.studentCard

    //     })

    // })


    const [cards, setCards] = useState<CanvasCard[]>(props.desks);




    //fetch users data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: any = await getStudentDetails(props.students[i].id)
                setStudentDetails(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [i]);








    //Assign student to desk card
    const assignStudent = (cardIndex: number) => {
        const attendanceInsight = calculateAttendnace(studentDetails?.Attendance)
        setCards(
            cards.map((card, index) => {
                if (index === cardIndex) {
                    return {
                        ...card,
                        studentCard: <Desk>
                            <div className="flex-col justify-between items-center w-full h-full text-center ">
                                <Avatar className="h-25 w-full justify-center items-center">
                                    <AvatarImage className="h-20 w-20  " src={"/avatars/0" + Math.floor((Math.random() * 4 + 1)) + ".png"} />
                                    <AvatarFallback className="h-20 w-20  ">SN</AvatarFallback>
                                </Avatar>
                                <Label className="content-center w-full text-center ">{props.students[i].user.username}</Label>
                                <Separator />
                                <div className="flex w-full  justify-between gap-x-0.5 items-center bg-gray-200">
                                    <Button className="bg-white rounded-none" variant={"ghost"}>{attendanceInsight.percentage}%</Button>
                                    <Button className="w-full bg-white rounded-none" variant={"ghost"} size="icon"><MessageSquareText size={20} /></Button>
                                    <Button className="w-full bg-white rounded-none" variant={"ghost"}>30</Button>


                                </div>
                                <div className="flex gap-x-2 overflow-auto">

                                    {studentDetails?.Attendance[studentDetails?.Attendance.length - 1].status == "Absent" ? <Badge className="rounded-xl bg-red-200 text-gray-700">Absent</Badge> :
                                        studentDetails?.Attendance[studentDetails?.Attendance.length - 1].status == "Late" ? <Badge className="rounded-xl bg-yellow-200 text-gray-700">Late</Badge> : ""}


                                </div>
                            </div>
                        </Desk>,
                    };
                }
                return card;
            })
        );
        setSeatingArrangements([...seatingArrangements, { deskId: props.desks[cardIndex].id, studentId: props.students[i].id }])
        delete props.students[i]
        setIndex(i + 1);
    }





    //Save layout
    const handleSave = () => {

        const plan = {
            id: props.seatingPlanId,
            name: props.seatingPlanName,
            layoutId: props.layoutId,
            classId: Number(props.clsId),
            seatingArrangements,
            oldSeatingArrangements: props.seatingArrangements

        }

        const response = saveSeatingPlan(plan)

        router.back()

    }

    //handle onDrag behaviour
    const updateDraggedCardPosition = ({ delta, active }: DragEndEvent) => {
        if (!delta.x && !delta.y) return;

        setCards(
            cards.map((card) => {
                if (card.id === active.id) {
                    return {
                        ...card,
                        coordinates: {
                            x: card.coordinates.x + delta.x,
                            y: card.coordinates.y + delta.y,
                        },
                    };
                }
                return card;
            })
        );
    };


    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8
        }
    })
    const mouseSensor = useSensor(MouseSensor)
    const touchSensor = useSensor(TouchSensor)
    const keyboardSensor = useSensor(KeyboardSensor)

    const sensors = useSensors(
        mouseSensor,
        touchSensor,
        keyboardSensor,
        pointerSensor
    )
    return (
        <div className=" w-full">
            <div className="flex-col space-y-2">
                <div className="flex justify-between w-full">

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSave)} className="flex space-x-8 w-full justify-between">
                            <div className="flex space-x-8">
                                <div className="space-y-4">
                                    <FormLabel className="flex">Seating plan name</FormLabel>
                                    <Label className="flex text-xl">{props.seatingPlanName}</Label>
                                </div>

                                <div className="space-y-4">
                                    <FormLabel className="flex">Class name</FormLabel>
                                    <Label className="flex text-xl">Class {props.clsId}</Label>
                                </div>
                            </div>
                            {props.canvasType !== "view" ? <Button className="hover:bg-blue-700 bg-blue-600" type="submit">Submit</Button> : <></>}
                        </form>
                    </Form>

                </div>
            </div>


            <div className="flex space-x-4 fixed ">
                {props.canvasType !== "view" ? <div className=" space-y-2 ">
                    <Label className="text-md">Class {props.clsId} Students</Label>
                    <div className="bg-white rounded-xl w-96 space-y-2 p-2 border shadow-lg">
                        <div className="space-y-2 h-[80vh] overflow-auto p-2">
                            {props.students.map((student: any, index: any) => <Card onClick={() => { setIndex(index) }} className={`${index === i ? " border-4 border-blue-500 " : ""}p-2`} key={index}>{student.user.username}</Card>)}
                        </div>
                    </div>
                </div> : ""}
                <div className=" space-y-2 w-full ">
                    <Label className="text-md">Canvas</Label>

                    <div
                        className="canvas bg-white border rounded-xl shadow-lg "
                        style={{
                            position: "relative",
                            height: "100vh",
                            width: "100vw"
                        }}

                    >

                        <div className="bg-white w-full">
                            <DndContext sensors={sensors} >
                                {cards.map((card, index) => (

                                    <Draggable onClick={() => {  props.canvasType !== "view" ? assignStudent(index) : "" }} card={card} cardStyle="border-1 hover:bg-blue-400 p-1 rounded-xl" />


                                ))}
                            </DndContext>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};



