"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  style? :string
}

 const Button = ({ children, onClick,style }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-stone-800 text-white shadow hover:bg-primary/90 h-9 px-4 py-2  ${style}`}>
      {children}
    </button>




  );
};
