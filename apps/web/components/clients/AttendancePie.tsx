'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui";
import { TrendingUp } from "lucide-react"   
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@repo/ui"
import { Label, Pie, PieChart } from "recharts"
import { useMemo } from "react";

import * as React from "react"

export function AttendancePie( {insight} : any) {
    console.log("insights--->"+JSON.stringify(insight))
    const chartData = [
        { mark: "Present", days: insight.presents, fill: 'var(--color-Present)' },
        { mark: "Absent", days: insight.absents, fill: 'var(--color-Absent)' },
        { mark: "Late", days: insight.lates, fill: 'var(--color-Late)' },

    ]
    const chartConfig = {
        days: {
            label: "Days",
        },
         Present: {
            label: "Present",
            color: "hsl(var(--chart-1))",
        },
        Absent: {
            label: "Absent",
            color: "hsl(var(--chart-2))",
        },
        Late: {
            label: "Late",
            color: "hsl(var(--chart-3))",
        },
    } satisfies ChartConfig
    const totalVisitors = useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.days, 0)
      }, [])

    return (<Card className="flex flex-col w-full ">
        <CardHeader className="items-center pb-0">
            <CardTitle>Attendance Summary</CardTitle>
            <CardDescription>Term 1</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={chartData}
                        dataKey="days"
                        nameKey="mark"
                        innerRadius={60}
                        strokeWidth={5}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground text-3xl font-bold"
                                            >
                                                {totalVisitors.toLocaleString()}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-muted-foreground"
                                            >
                                                Total
                                            </tspan>
                                        </text>
                                    )
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
            {/* <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
                Showing total visitors for the last 6 months
            </div> */}
        </CardFooter>
    </Card>)
}