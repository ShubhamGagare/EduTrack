"use client"
import { DashboardIcon, DashIcon } from "@radix-ui/react-icons";
import { Card, CardTitle } from "@repo/ui";
import { Atom, Home, Notebook, PencilRulerIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export  const  SidebarItem = ({ href, title }: { href: string; title: string; }) => {
    const router = useRouter();
    const pathname = usePathname()
    const selected = pathname.includes(href)    


    return <>
        <div className="flex flex-col gap-2 px-3 ">
            <Card className={` flex ${selected ? "bg-primary text-primary-foreground" : "border-none"} cursor-pointer m-1 p-2 pl-8 border-r  shadow-none space-x-2 items-center `}  onClick={() => {
                    router.push(href);
                }}>
                {title==="Take register"?<Notebook />:title==="Home"?<Home />:title==="Class View"?<PencilRulerIcon />:title==="Dashboard"?<Atom/>:""   }
                <CardTitle>{title}</CardTitle>
            </Card>
        </div>

    </>


}
export default SidebarItem;