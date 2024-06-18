import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
   
    <div className='w-full  px-10 py-8 mx-auto bg-white rounded-lg shadow-md border border-gray-200'>
        <div className=' mx-auto space-y-6'>
    
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className=''>
                <p className='font-normal text-gray-700'>{children}</p>
                
                
            </div>

            {/* <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-stone-800 text-white shadow hover:bg-primary/90 h-9 px-4 py-2">Deploy</button> */}
        </div>
    </div>
  );
}