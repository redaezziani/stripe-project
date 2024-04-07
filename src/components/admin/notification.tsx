'use client';
import { Bell, ShieldCheck } from "lucide-react"
import { Octagon } from 'lucide-react';
import { Skull } from 'lucide-react';
import React from "react";
import useSWR from 'swr';
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.json());

export function NotificationCard() {
    const { data, error } = useSWR('/api/notification', fetcher,{refreshInterval: 15000 });
    const [open, setOpen] = React.useState(false);
    const toggle = () => {
        setOpen(!open);
}
  return (
    <Sheet
    >
      <SheetTrigger asChild>
      <div className="flex border h-9 w-9 border-slate-300/30 rounded-full  relative justify-center items-center flex-col gap-1">
        {data && data.data.length > 0 && <span className=" bg-red-500 h-2 w-2 rounded-full absolute -top-1 -right-1"></span>}
      <Bell className="w-4 h-4 cursor-pointer text-slate-400 dark:text-slate-300" />
      </div>
      </SheetTrigger>
      <SheetContent
      className="w-full flex mt-4 flex-col gap-4 justify-start items-start"
      >
        
        <AnimatePresence>
            {
              data && data.data.map((notification: any) => (
                <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                layout
                
                className="flex mt-2 items-center justify-start gap-2">
               {
                    notification.type === "INFO" && <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    
               }
                {
                      notification.type === "WARNING" && <Octagon className="w-4 h-4 text-yellow-500" />
                }
                {
                    notification.type === "ERROR" && <Skull className="w-4 h-4 text-red-500" />
                }

                <div className="flex flex-col gap-1 justify-start items-start">
                <h1 className={`text-xs font-semibold ${notification.type === "INFO" ? "text-emerald-500" : notification.type === "WARNING" ? "text-yellow-500" : "text-red-500"}`}>{notification.title}</h1>
                <p className="text-xs text-slate-400">{notification.message}</p>
                </div>
                </motion.div>
              ))
            }
            </AnimatePresence>
      </SheetContent>
    </Sheet>

  )
}
