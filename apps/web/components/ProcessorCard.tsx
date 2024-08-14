import { Card } from "@repo/ui";
import { document } from "postcss";
import React from "react";

export async function ProcessorCard({steps}: any) {
    console.log("apiList-->"+JSON.stringify(steps))
    return (
        <div>
            {/* {array.map((cls: any, index: number) => (
                <Card key={index}>{cls.name}</Card>
            ))} */}
            {steps.apis}
        </div>
    );


}