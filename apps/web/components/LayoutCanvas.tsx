import { DndContext } from "@dnd-kit/core";
import { DragEndEvent } from "@dnd-kit/core/dist/types";
import { CanvasCard } from "./clients/classView/ClassViewClient";
import { Draggable } from "./Draggable";
import { Avatar, AvatarFallback, AvatarImage, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Label, Popover, PopoverContent, PopoverTrigger } from "@repo/ui";
import { useState } from "react";
import { createLayout, updateLayout } from "../app/utils/utils";
import Desk from "./Desk";
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";



export const LayoutCanvas = ({ canvasProps }: any) => {
  const form = useForm()
  const [cards, setCards] = useState<CanvasCard[]>(canvasProps.cards);
  const router = useRouter()
  const [layoutName, setLayoutName] = useState()
  const [deskCount, setDeskCount] = useState(1)

  //Sabe layout
  const handleSave = (values: any) => {

    const CardPosition: any = [];
    // console.log(cards)
    cards.map((card: any) => {
      CardPosition.push({ id: card.id, studentId: card.id, coordinates_X: card.coordinates.x, coordinates_y: card.coordinates.y })
    })
    if (canvasProps.canvasType !== "edit") {
      createLayout(values?.layoutName, CardPosition)
    } else {
      updateLayout(canvasProps.layout, CardPosition)
    }

    router.back()
  }


  const addCard = () => {

    setDeskCount(deskCount + 1)
    const newCard: CanvasCard = {
      id: "id_" + deskCount, coordinates: { x: 16, y: 100 }, studentCard: <Desk>

        <Label>Desk</Label>

      </Desk>
    };
    setCards([...cards, newCard]);
  }


  const [showPopover, setShowPopover] = useState(false)
  const [studentIndex, SetStudentIndex] = useState(0);

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

  return (
    <div className="space-y-4 w-full">
      <div className="flex-col space-y-2">
        <div className="flex justify-between w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSave)} className="flex space-x-8 w-full justify-between">
              <FormField
                control={form.control}
                name="layoutName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Layout Name</FormLabel>
                    <FormControl>
                      {canvasProps.canvasType !== "edit" ? <Input placeholder="Enter the layout name" {...field} /> : <div><h4 className="text-2xl">{canvasProps.layout.name}</h4></div>}
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="hover: " type="submit">Submit</Button>
            </form>
          </Form>





          {/* <Button className="hover: " type="submit" onSubmit={handleSave}>Save Layout</Button> */}

        </div>

      </div>
      <Label className=" text-violet-400">Add vacant desks according to your class seating arrangements on the canvas</Label>

      <div className="canvas bg-violet-100 rounded-xl"  style={{
          position: "relative",
          height: "100vh",
          width: ""
        }}  >

        <div className="p-2 flex justify-between">
          <Button variant={"outline"} onClick={addCard}>Add Desk</Button>
        </div>
        <div className="w-full">
          <DndContext onDragEnd={updateDraggedCardPosition}  >
            {cards.map((card, index) => (
              <Draggable onClick={() => { }} card={card} key={card.id} cardStyle={index === studentIndex ? "" : ""} />
            ))}
          </DndContext>
        </div>
      </div>
    </div>
  );
};



