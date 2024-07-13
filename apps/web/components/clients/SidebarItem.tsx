"use client"
import { Card, CardTitle } from "@repo/ui";
import { usePathname, useRouter } from "next/navigation";

export  const  SidebarItem = ({ href, title }: { href: string; title: string; }) => {
    const router = useRouter();
    const pathname = usePathname()
    const selected = pathname.includes(href)    


    return <>
        <div className="flex flex-col gap-2 px-3 ">
            <Card className={`flex ${selected ? "bg-gray-200" : "bg-muted/40 border-none"} cursor-pointer  p-3 pl-8 border-r  shadow-none `}  onClick={() => {
                    router.push(href);
                }}>
                <CardTitle>{title}</CardTitle>
            </Card>
        </div>

    </>


}
export default SidebarItem;