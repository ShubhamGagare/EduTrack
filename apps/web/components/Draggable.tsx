import { useDraggable } from "@dnd-kit/core";
import { CanvasCard } from "./clients/classView/ClassViewClient";
import { Button } from "@repo/ui";
import { useState } from "react";

export const Draggable = ({ card,cardStyle,onClick }: { card: CanvasCard,cardStyle:string,onClick:() => void }) => {
  // hook up to DndKit
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

  const [studentCard,setStudentCard] = useState(card.studentCard);

  // const assignStudentCard = () => {
  //   console.log("-----------Assigning student----------");
  //   setStudentCard(student)

  // }
  return (
    <div
      className={`card `+cardStyle}
      style={{
        // position card on canvas
        position: "absolute",
        top: `${card.coordinates.y}px`,
        left: `${card.coordinates.x}px`,
        
        // temporary change to this position when dragging
        ...(transform
          ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0px)`,
            }
          : {}),
        
      }}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={onClick}
    >
      {card.studentCard}
    </div>
  );
};