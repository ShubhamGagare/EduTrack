"use client"
import { UniqueIdentifier } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/core/dist/types";
import { getlayout } from "app/utils/utils";
import { LayoutCanvas } from "components/LayoutCanvas";
import Desk from "components/Desk";
import { StudentCard } from "components/StudentCard";
import { ReactElement, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui";
import { layoutsType } from "../ClassViewLayoutClient";

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



function AddLayoutClient({props}: any) {

  const deskCards: CanvasCard[] = []
  console.log("props---"+JSON.stringify(props))
  
  console.log("desks---"+JSON.stringify(props.desks))
  props.desks.map((desk: any, index: number) => {
    deskCards.push({ id: desk.id, coordinates: { x: desk.x, y: desk.y }, studentCard: <Desk><></></Desk> })
  });
  const [cards, setCards] = useState<CanvasCard[]>(deskCards);
  const canvasProps = {
    layout:props.layout,
    cards,
    setCards,
    canvasType:props.canvasType
  }
  console.log("canvasProps---"+JSON.stringify(canvasProps.layout))

  return <LayoutCanvas canvasProps={canvasProps}  />;
}

export default AddLayoutClient
