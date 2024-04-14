'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub
} from "../ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"

import {ChevronDown, LogOut, User2, Settings, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logOut } from "@/(db)/lib/auth";
import { useTheme } from "next-themes";
import { Sparkles } from "lucide-react";


export function UserProfile() {
  const { setTheme,theme } = useTheme()
  const [user,setUser] = useState<any>(null)
  const togelMode =()=>{
    if (theme === 'dark') {
      setTheme('light')
    }
    else{
      setTheme('dark')
    }
  }

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const toggle = () => {
    setOpen(!open);
  }

  const handelUser=async()=>{
    try {
      const res = await fetch('/api/user',{cache:'no-cache', next:{
        revalidate: 1
      }})
      const data = await res.json()
      console.log(data)
      setUser(data)
    } catch (error) {
    }
  }

  useEffect(()=>{
    handelUser()
  },[])
  const logout = async () => {
    try {
      setLoading(true);
      const res = await logOut()
      if (res?.status === "success") {
        router.push("/auth/signin");
      }
    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <DropdownMenu
      onOpenChange={toggle}
    >
        <DropdownMenuTrigger
        asChild>
        <div

          className=' flex gap-2 z-50 justify-start items-center cursor-pointer'
        >
          <Avatar
           
            className="  cursor-pointer"
          >
            <AvatarImage
              className=" aspect-square object-cover"
              src={user?.data?.profile ?? ''}
              alt="User Profile Image"
            />
            <AvatarFallback>
              {user?.data?.username.charAt(0).toUpperCase() ?? ''}
            </AvatarFallback>
          </Avatar>
          <div
            className='flex-flex-col gap-2'
          >
            <p
              className="text-sm font-semibold"
            >
              {user?.data?.username ?? ''}
            </p>
            <p
              className="text-xs text-muted-foreground"
            >
              {user?.data?.email ?? ''}
            </p>
          </div>
          <ChevronDown
            className={`w-4 h-4 transform duration-500 select-none transition-all ease-in-out ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 border-slate-300/30">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/dashboard">
            <DropdownMenuItem
              className=" cursor-pointer  text-destructive-500 justify-between w-full flex gap-2 items-center"

            >
              home
              <LayoutDashboard
                className="w-4 h-4"
              />
            </DropdownMenuItem>
          </Link>

          <Link href={user?.data?.role === 'admin' ? '/dashboard/admin/page/profile' : '/dashboard/user/page/profile'}>
            <DropdownMenuItem
              className="  cursor-pointer text-destructive-500 justify-between w-full flex gap-2 items-center"

            >
              profile
              <User2
                className="w-4 h-4"
              />
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/settings">
            <DropdownMenuItem
              className=" cursor-pointer  justify-between w-full flex gap-2 items-center"
            >
              settings
              <Settings
                className="w-4 h-4"
              />
            </DropdownMenuItem>
          </Link>
           <DropdownMenuItem
            onClick={togelMode}
            className=" cursor-pointer  justify-between w-full flex gap-2 items-center"
          >
            <p
              className="text-destructive-500"
            >
              {theme === 'dark' ? 'light mode' : 'dark mode'}
            </p>
            <Sparkles
              className="w-4 h-4"
            />
          </DropdownMenuItem>
          <DropdownMenuSeparator
          className=" mt-3"
          />
          <DropdownMenuItem
            onClick={logout}
            className=" bg-slate-300/15 mt-3  text-destructive-500 justify-between w-full flex gap-2 items-center"
          >
            <p
              className="text-destructive-500"
            >
              log out
            </p>
            {loading?
             <div
             className=' flex gap-2'
             role="status">
             <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary/60" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
               <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
             </svg>
           </div>:
            <LogOut
              size={16}
              className="  tex-red-600"
            />
            }
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
