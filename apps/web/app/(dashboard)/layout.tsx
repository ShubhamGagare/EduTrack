import AppbarClient from "components/clients/AppbarClient";
import { SidebarItem } from "../../components/clients/SidebarItem";
import React from "react";
import { AI } from "./jarvis/actions";

import { Open_Sans } from "next/font/google"


const openSans = Open_Sans({
  subsets:['latin'],
  weight:'400'
})
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
   <main className={openSans.className}>
    <AppbarClient />
    <div className="flex  min-h-screen ">
      <div className="hidden lg:block w-72  min-h-screen border-r-2 mr-2 pt-8 ">
        <div className="m-2 ">
        <SidebarItem href={"/jarvis"} title="Home" />
          <SidebarItem href={"/dashboard"} title="Dashboard" />
          <SidebarItem href={"/take-register"} title="Take register" />
          <SidebarItem href={"/class-view"} title="Class View" />

          
        </div>
      </div>
      <div className="p-8 w-full ">
        <AI>
        {children}
        </AI>
      </div>

    </div>
    </main>
  );
}
