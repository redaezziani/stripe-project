'use server'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Plus, UserRound } from "lucide-react"
import CreateUser from "./create-users"

export async function CreateUserSideBar() {
      // const response = await fetch('http://localhost:3000/api/manga/asq/web-sites');
      // const data = await response.json();
      // const webSites = data.data;   
  return (
    <Sheet
    >
      <SheetTrigger asChild>
      <Button
        >
         New User
          <UserRound className="w-4 h-4 ml-2"/>
        </Button>
      </SheetTrigger>
      <SheetContent
      className="w-full flex flex-col gap-4 justify-start items-start"
      >
       <CreateUser/>
      </SheetContent>
    </Sheet>
  )
}
