"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const data = [
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000), today: Math.floor(Math.random() * 1000) },
];

export function LineChartExample() {
  return (
    <Card
    className="w-full h-[340px] col-span-3 overflow-hidden"
    >
      <CardHeader>
        <CardTitle>Exercise Minutes</CardTitle>
        <CardDescription>
          Your excercise minutes are ahead of where you normally are.
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
              
             
            >
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Average
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Today
                            </span>
                            <span
                            //@ts-ignore
                            className={`font-bold ${payload[1].value >payload[0].value ? 'text-[#00db80]' : 'text-destructive'}`}>
                              {payload[1].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }

                  return null
                }}
              />
              <Line
                type="natural"
                strokeWidth={2}
                dataKey="average"
                activeDot={{
                  r: 6,
                }}
                style={
                  {
                    opacity: 0.25,
                  } as React.CSSProperties
                }
                stroke="currentColor"
                className=" stroke-primary"
                
              />
              <Line
                type="monotone"
                dataKey="today"
                strokeWidth={2}
                activeDot={{
                  r: 8,
                }}
                stroke="currentColor"
                className=" stroke-primary"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}