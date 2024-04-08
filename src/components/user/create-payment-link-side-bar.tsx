"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Plus, UserRound } from "lucide-react"
import CreatePaymentLink from "./create-payment-link"

export async function CreatePaymetLinkSideBar() { 
  return (
    <Sheet
    >
      <SheetTrigger asChild>
      <Button
        >
         Create Payment Link
          <UserRound className="w-4 h-4 ml-2"/>
        </Button>
      </SheetTrigger>
      <SheetContent
      className="w-full flex flex-col gap-4 justify-start items-start"
      >
       <CreatePaymentLink/>
      </SheetContent>
    </Sheet>
  )
}
