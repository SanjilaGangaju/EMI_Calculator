"use client"

import { PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DonutChartProps {
  principalPercentage: number
  interestPercentage: number
}

export function DonutChart({ principalPercentage, interestPercentage }: DonutChartProps) {
  const data = [
    { name: "Principal", value: principalPercentage, fill: "var(--color-principal)" },
    { name: "Interest", value: interestPercentage, fill: "var(--color-interest)" },
  ]

  const chartConfig = {
    principal: {
      label: "Principal",
      color: "#14b8a6",
    },
    interest: {
      label: "Interest",
      color: "#f97316",
    },
  }

  return (
    <div className="size-32 mx-auto mb-4">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <PieChart>
          <Pie
            data={data}
            cx="40%"
            cy="40%"
            innerRadius={40}
            outerRadius={50}
            paddingAngle={2}
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
    </div>
  )
}
