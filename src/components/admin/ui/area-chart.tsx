"use client"

import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Counter from "./animation/counter";

const data = [
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },
  { average: Math.floor(Math.random() * 2000) + 400, today: Math.floor(Math.random() * 1000) },




  // Add more objects as needed
];

export function EreaChart() {
  return (
    <Card
    className="w-full h-[340px] col-span-3 overflow-hidden"
    >
      <CardHeader>
        <CardTitle
        className=" text-slate-950 dark:text-slate-50"
        >
          Erea Chart
        </CardTitle>
        <CardDescription>
          the average of the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer
          
          width="100%" height="100%">
            <AreaChart
            title=" "
            throttleDelay={300}
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
              
             
            >
                <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00db80" stopOpacity={0.4}/>
                  <stop offset="75%" stopColor="#00db80" stopOpacity={0.05}/>
                </linearGradient>
                </defs>
                <Area
                dataKey="average"
                stroke="#00db80"
                fill="url(#color)"
              />
              <Tooltip
              cursor
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg cursor-pointer flex justify-start items-start  border border-[#00db8051] bg-background   shadow-[#00db8029] p-2 shadow-sm">
                          <div className="flex w-24  justify-start items-start flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Average
                            </span>
                            <span className="font-bold text-slate-900 dark:text-slate-50">
                              <Counter
                                value={parseInt(payload[0].value?.toString() || '0')}
                                direction={'up'}
                              />
                            </span>
                          </div>
                          <span
                          className=" bg-[#00db8021] px-2 rounded-full text-xs text-[#00db80] border-[#00db804f]"
                          > 
                          60%
                          </span>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <CartesianGrid
              opacity={0.4}
                vertical={false}
              />

              
              
            </AreaChart>  
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}