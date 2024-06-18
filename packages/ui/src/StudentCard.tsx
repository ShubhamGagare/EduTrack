import React from "react";
import { Button } from "./button";
//import { Button } from "@material-tailwind/react";


function setStatus(status: string) {
  return (status === "Present" ? (
    <div className="bg-green-400 w-full h-full justify-center p-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </div>
  ) : status === "Absent" ? (
    <div className="bg-red-400 w-full h-full justify-center p-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>

    </div>
  ) : status === "Late" ? (
    <div className="bg-yellow-400 w-full h-full justify-center p-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

    </div>
  ) : (
    <div className="bg-gray-400 w-full h-full justify-center p-2">

    </div>
  )
  )
}

export function StudentCard({
  title,
  status,
}: {
  title: string;
  status?: string
  children?: React.ReactNode;
}): JSX.Element {

  return (
    <div className="w-full ">
      <div className="border space-x-4 w-full flex " >
        <div >
          {setStatus(status || "")}
        </div>
        <h1 className="text-xl  pb-2">
          {title}
        </h1>
        <p className="space-y-2"></p>
      </div>

    </div>
  );
}