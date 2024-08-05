import { Skeleton } from "@repo/ui";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[10px] w-[250px] rounded-xl" />
            <div className="flex flex-col space-y-3">

                <Skeleton className="h-8 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
            <div className="flex space-x-2">

                <div className="flex flex-col space-y-3">

                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-screen w-[250px]" />
                </div>

                <div className="flex flex-col space-y-3 w-full">

                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-screen w-full" />
                </div>
            </div>
        </div>
    )
}