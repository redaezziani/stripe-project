"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  { name: 'Page A', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page B', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page C', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page D', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page E', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page F', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page G', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page F', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page H', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page I', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page J', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  { name: 'Page K', uv: Math.floor(Math.random() * 5000) + 3000, pv: Math.floor(Math.random() * 5000) + 2000, amt: Math.floor(Math.random() * 5000) + 2000 },
  
];

export function BarChartExample() {
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
            <BarChart
            
            width={150} height={40} data={data}>
              
          <Bar
          radius={[5, 5, 0, 0]}
          label={{ fill: 'white', fontSize: 9, fontWeight:'bold' }}
          dataKey="uv"

           fill="currentColor"
           className=" fill-primary"
            />
        </BarChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}