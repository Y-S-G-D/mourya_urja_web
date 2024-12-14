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
import { TopJobType } from "@/app/admin/page"

// // Custom type for Job Type data
// interface JobTypeData {
//   jobType: string
//   count: number
//   fill: string
// }

// Chart Configuration
const chartConfig = {
  private: {
    label: "Private",
    color: "hsl(var(--chart-1))",
  },
  government: {
    label: "Government",
    color: "hsl(var(--chart-2))",
  },
  business: {
    label: "Business",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

// Chart Data
// const jobTypeData: JobTypeData[] = [
//   { jobType: "private", count: 50, fill: chartConfig.private.color },
//   { jobType: "government", count: 30, fill: chartConfig.government.color },
//   { jobType: "business", count: 15, fill: chartConfig.business.color },
//   { jobType: "other", count: 5, fill: chartConfig.other.color },
// ]

// Main Component
export function JobTypeChart({jobTypeData}:{jobTypeData:TopJobType[]}) {
  console.log(jobTypeData)
  const chartDataWithColors = jobTypeData.map((data) => ({
    jobType: data.jobType,
    count: data.count,
    fill: chartConfig[data.jobType as keyof typeof chartConfig].color || "#ccc",
  }))
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Top Job Types</CardTitle>
        <CardDescription>Distribution of job roles</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="jobType" hideLabel />}
            />
            <Pie data={chartDataWithColors} dataKey="count" nameKey="jobType" label>
              <LabelList
                dataKey="jobType"
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
          Job Type Analysis <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing the distribution of job types.
        </div>
      </CardFooter>
    </Card>
  )
}
