"use client"
import { UniqueIdentifier } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";
import { getlayout } from "app/utils/utils";
import { LayoutCanvas } from "components/LayoutCanvas";
import Desk from "components/Desk";
import { StudentCard } from "components/StudentCard";
import { ReactElement, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui";

export type CanvasCard = {
  id: UniqueIdentifier;
  coordinates: Coordinates;
  studentCard: ReactElement;
};
export type seatsType = {
  studentId: number;
  coordinates_X: number;
  coordinates_Y: number;
};
// const layout:any = await getlayout({ params: { layoutId: 4 }});

// console.log(JSON.stringify(layout))
export default function AddSeatingPlan(desks: any) {
  console.log(JSON.stringify(desks))
  const deskCards: CanvasCard[] = []
  desks.desks.map((desk:any) => {
    deskCards.push({ id: desk.id, coordinates: { x: desk.x, y: desk.y }, studentCard: <Desk><></></Desk> })
  })
  const [cards, setCards] = useState<CanvasCard[]>(deskCards);


  return <LayoutCanvas cards={cards} setCards={setCards} />
}


