"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a label list"



const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  male: {
    label: "Male",
    color: "hsl(var(--chart-1))",
  },
  female: {
    label: "Female",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function GenderRatioChart({maleCount,femaleCount}:{maleCount:number,femaleCount:number}) {
  const chartData = [
    { gender: "male", visitors: maleCount, fill: "var(--color-male)" },
    { gender: "female", visitors: femaleCount, fill: "var(--color-female)" },
  ]
  return (
    <Card className="flex flex-col ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gender Ratio </CardTitle>
        <CardDescription>Till Now</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className=" mx-auto aspect-square max-h-[300px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="gender"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Male Vs Female  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors till now
        </div>
      </CardFooter>
    </Card>
  )
}
