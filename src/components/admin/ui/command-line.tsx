"use client"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import React from "react"
import { Bot, Fingerprint, LayoutDashboard, Search, SlidersHorizontal, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"

export function CommandSearch() {
  const [open, setOpen] = React.useState(false)
  const [themes, setThemes] = React.useState("light")
  const { setTheme } = useTheme()
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  
    const handleTheme = () => {
    if (themes === "light") {
      setThemes("dark")
      setTheme("dark")
    } else {
      setThemes("light")
      setTheme("light")
    };
  }
  return (
    <div>
      <p className="text-sm  hidden justify-start items-center gap-2 text-muted-foreground">
        <Search
        size={20}/> {" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1  bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog
      open={open} onOpenChange={setOpen}>
        <CommandInput
        placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
          className=" mt-2"
          heading="Suggestions">
            <CommandItem
            className=" group mt-2"
            >
              <Fingerprint className="mr-2 group-hover:text-primary h-2 w-2" />
              <span
              className="w-full flex justify-between items-center"
              >
                Auth 
                <CommandShortcut>⌘A
                </CommandShortcut>
              </span>
            </CommandItem>
            <CommandItem
            className=" group"
            >
              <LayoutDashboard className="mr-2 group-hover:text-primary h-2 w-2" />
              <span
              className="w-full flex justify-between items-center"
              >
                Dashboard 
                <CommandShortcut>⌘D
                </CommandShortcut>
              </span>
            </CommandItem>
            <CommandItem
            className=" group mt-2"
            >
              <Bot className="mr-2 group-hover:text-primary h-4 w-4" />
              <span
              className="w-full flex justify-between items-center"
              >
                Chat Bot
                <CommandShortcut>⌘B
                </CommandShortcut>
              </span>
            </CommandItem>
            <CommandItem
            className=" group mt-2"
            onSelect={handleTheme}
            >
              <SunMoon className="mr-2 group-hover:text-primary h-4 w-4" />
              <span
              className="w-full flex justify-between items-center"
              >
                Theme
                <CommandShortcut>⌘T
                </CommandShortcut>
              </span>
            </CommandItem>
          </CommandGroup> 
        </CommandList>
      </CommandDialog>
    </div>
  )
}
