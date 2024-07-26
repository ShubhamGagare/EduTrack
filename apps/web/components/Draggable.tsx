import { useDraggable } from "@dnd-kit/core";
import { CanvasCard } from "./clients/classView/ClassViewClient";

export const Draggable = ({ card,cardStyle }: { card: CanvasCard,cardStyle:string }) => {
  // hook up to DndKit
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });

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
    >
      {card.studentCard}
    </div>
  );
};