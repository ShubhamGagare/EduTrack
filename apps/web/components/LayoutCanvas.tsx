import { DndContext } from "@dnd-kit/core";
import { DragEndEvent } from "@dnd-kit/core/dist/types";
import { CanvasCard } from "./clients/classView/ClassViewClient";
import { Draggable } from "./Draggable";
import { Avatar, AvatarFallback, AvatarImage, Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input, Label, Popover, PopoverContent, PopoverTrigger } from "@repo/ui";
import { useState } from "react";
import { createLayout } from "app/utils/utils";
import Desk from "./Desk";
import { useForm } from "react-hook-form"



export const LayoutCanvas = ({
  cards,
  setCards,
  students
}: {
  cards: CanvasCard[];
  setCards: (cards: CanvasCard[]) => void;
  students?: any[]
}) => {
  const form = useForm()

  const [layoutName, setLayoutName] = useState()
  const [deskCount, setDeskCount] = useState(1)

  //Sabe layout
  const handleSave = (values: any) => {

    const CardPosition: any = [];
    // console.log(cards)
    cards.map(card => {
      CardPosition.push({ id: card.id, studentId: card.id, coordinates_X: card.coordinates.x, coordinates_y: card.coordinates.y })
    })
    createLayout(values?.layoutName, CardPosition)
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
    <div className="space-y-4">
      <div className="flex-col space-y-4">
        <div className="flex justify-between w-full">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSave)} className="space-y-8">
              <FormField
                control={form.control}
                name="layoutName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Layout Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the layout name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="hover:bg-blue-700 bg-blue-600" type="submit">Submit</Button>
            </form>
          </Form>





          {/* <Button className="hover:bg-blue-700 bg-blue-600" type="submit" onSubmit={handleSave}>Save Layout</Button> */}

        </div>
      </div>
      <div
        className="canvas bg-white"
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
          <DndContext onDragEnd={updateDraggedCardPosition}  >
            {cards.map((card, index) => (
              <Draggable onClick={() => {}} card={card} key={card.id}  cardStyle={index === studentIndex ? "" : ""} />
            ))}
          </DndContext>
        </div>
      </div>
    </div>
  );
};



