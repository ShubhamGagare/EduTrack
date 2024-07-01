"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export const SidebarItem = ({ href, title }: { href: string; title: string;  }) => {
    const router = useRouter();
    const pathname = usePathname()
    const selected = pathname === href


    return <div className={`flex ${selected ? "bg-blue-400" : ""} cursor-pointer  p-2 pl-8`} onClick={() => {
        router.push(href);
    }}>
        {/* <div className="pr-2">
            {icon}
        </div> */}
        <div className={`font-bold ${selected ? "" : ""}`}>
            {title}
        </div>
    </div>
}