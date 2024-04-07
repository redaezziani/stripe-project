
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from "lucide-react"
  import SideMenu from "./admin-side-menu"
  
  export function SideBar() {
    return (
      <Sheet
      >
        <SheetTrigger asChild>
         <div className="w-fit p-2 rounded-md border border-slate-300/60">
         <Menu />
         </div>
        </SheetTrigger>
        <SheetContent
        side={'left'}
        >
          <SideMenu />
        </SheetContent>
      </Sheet>
    )
  }
  