"use client"
import { DndContext, KeyboardSensor, MouseSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { DragEndEvent } from "@dnd-kit/core/dist/types";
import { CanvasCard } from "./clients/classView/ClassViewClient";
import { Draggable } from "./Draggable";
import { Avatar, AvatarFallback, AvatarImage, Button, Card, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Label, Popover, PopoverContent, PopoverTrigger, Separator } from "@repo/ui";
import { useEffect, useState } from "react";
import { createLayout, getClasses } from "app/utils/utils";
import Desk from "./Desk";
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@repo/ui"
import { getStudentDetails, propSeatingType, saveSeatingPlan, studentsType } from "./clients/classView/SeatingClients/AddSeatingPlan";
import { Attendance, Student } from "../../../packages/db/prisma/generated/client";
import { number } from "zod";


type seatingArrangementType = {
    deskId: number,
    studentId: number
}

const calculateAttendnace = (attendance: any[]) => {
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
    console.log("Before Loading seating canvas---" + JSON.stringify(props))


    const updatedCards: CanvasCard[] = []
    props.desks.map((card: CanvasCard) => {

        updatedCards.push({
            id: card.id, coordinates: card.coordinates, studentCard: <Desk><Button>Assign</Button></Desk>

        })

    })

    console.log("Loading seating canvas---" + JSON.stringify(props))

    const [cards, setCards] = useState<CanvasCard[]>(updatedCards);
    const [i, setIndex] = useState(0);
    const form = useForm()
    const [deskCount, setDeskCount] = useState(1)
    const [studentDetails, setStudentDetails] = useState<any>()
    const [seatingArrangements, setSeatingArrangements] = useState<seatingArrangementType[]>([])
    //fetch users data
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("student detail ID---->" +props.students[i].id)
                const result: any = await getStudentDetails(props.students[i].id)
                setStudentDetails(result);
                console.log("student detail---->" + JSON.stringify(studentDetails))
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [i]);





    //Assign student to desk card
    const assignStudent = (cardIndex: number) => {
        console.log("------Assigning student-----------")
        const attendanceInsight = calculateAttendnace(studentDetails?.Attendance)
        console.log("attendanceInsight-----------" + JSON.stringify(attendanceInsight))

        setCards(
            cards.map((card, index) => {
                if (index === cardIndex) {
                    return {
                        ...card,
                        studentCard: <Desk>
                            <div className="flex-col justify-center items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>SN</AvatarFallback>
                                </Avatar>
                                <Label>{props.students[i].user.username}</Label>
                                <Separator />
                                <div className="flex w-full justify-between gap-1 items-center">
                                    <Button className="" variant={"ghost"}>{attendanceInsight.percentage}%</Button>
                                    <Separator orientation="vertical" className="border bg-black" />
                                    <Button className="w-full" variant={"ghost"}>20</Button>
                                    <Separator orientation="vertical" className="border bg-black" />
                                    <Button className="w-full " variant={"ghost"}>30</Button>
                                    <Separator orientation="vertical" className="border bg-black" />


                                </div>
                            </div>
                        </Desk>,
                    };
                }
                return card;
            })
        );
        console.log("studentId--->"+JSON.stringify(props.students[i]))
        setSeatingArrangements([...seatingArrangements,{ deskId: props.desks[cardIndex].id, studentId: props.students[i].id }])
        delete props.students[i]
    }





    //Save layout
    const handleSave = (values: any) => {

        console.log("layoutId----" + props.layoutId)
        console.log("values---->" + JSON.stringify(values))
        console.log("values---->" + JSON.stringify(seatingArrangements))
        const plan = {
            layoutId:props.layoutId,
            seatingArrangements
        }
        const response = saveSeatingPlan(plan)
    }

    //Add new card
    const addCard = () => {

        setDeskCount(deskCount + 1)
        const newCard: CanvasCard = {
            id: "id_" + deskCount, coordinates: { x: 16, y: 100 }, studentCard: <Desk><Label>New Desk</Label></Desk>

        };
        setCards([...cards, newCard]);
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
        <div className="space-y-4">
            <div className="flex-col space-y-4">
                <div className="flex justify-between w-full">

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSave)} className="flex space-x-8">
                            <div className="space-y-4">
                                <FormLabel className="flex">Seating plan name</FormLabel>
                                <Label className="flex text-xl">{props.seatingPlanName}</Label>
                            </div>

                            <div className="space-y-4">
                                <FormLabel className="flex">Class name</FormLabel>
                                <Label className="flex text-xl">Class {props.clsId}</Label>
                            </div>
                            <Button className="hover:bg-blue-700 bg-blue-600" type="submit">Submit</Button>
                        </form>
                    </Form>






                </div>
            </div>
            <div className="flex space-x-4 ">
                <div className=" space-y-2 ">
                    <Label className="text-md">Class {props.clsId} Students</Label>
                    <div className="bg-white rounded-xl w-96 space-y-2 p-2 shadow-lg">
                        <div className="space-y-2 h-[80vh] overflow-auto p-2">
                            {props.students.map((student: any, index: any) => <Card onClick={() => { setIndex(index) }} className={`${index === i ? " border-4 border-blue-500 " : ""}p-2`} key={index}>{student.user.username}</Card>)}
                        </div>
                    </div>
                </div>
                <div className=" space-y-2 ">
                    <Label className="text-md">Canvas</Label>

                    <div
                        className="canvas bg-white  shadow-lg"
                        style={{
                            position: "relative",
                            height: "100vh",
                            width: "100vw"
                        }}

                    >
                        <div className="p-2">
                            <Button className="hover:bg-blue-700 bg-blue-600" onClick={addCard}>Add Desk</Button>
                        </div>
                        <div className="bg-white">
                            <DndContext sensors={sensors} >
                                {cards.map((card, index) => (

                                    <Draggable onClick={() => { console.log("Clicked!!!"); assignStudent(index) }} card={card} cardStyle="border-1 hover:bg-blue-400 p-1 rounded-xl" />


                                ))}
                            </DndContext>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};



