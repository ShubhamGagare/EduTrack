import AppbarClient from "components/clients/AppbarClient";
import { SidebarItem } from "../../components/clients/SidebarItem";
import React from "react";
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
    <AppbarClient />
    <div className="flex bg-gray-100 min-h-screen ">
      <div className="hidden lg:block w-72 border-r min-h-screen bg-white mr-2 pt-16 rounded-xl ">
        <div className="m-2">
          <SidebarItem href={"/dashboard"} title="Home" />
          <SidebarItem href={"/take-register"} title="Take register" />
          <SidebarItem href={"/class-view"} title="Class View" />

          
        </div>
      </div>
      <div className="p-8 w-full ">
        {children}
      </div>

    </div>
    </>
  );
}

