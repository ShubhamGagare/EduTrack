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

function AddLayoutClient() {

  const [cards, setCards] = useState<CanvasCard[]>([]);


  return <LayoutCanvas cards={cards} setCards={setCards} />;
}

export default AddLayoutClient
