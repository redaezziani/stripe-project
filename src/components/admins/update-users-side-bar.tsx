'use client'


import { UserCog } from "lucide-react"
import UpdateUser from "./update-users"
import { Dialog, DialogTrigger } from "../ui/dialog"
interface UpdateUserProps {
    id: string;
    email: string;
    name : string;
    role: string;
     
}
export async function UpdateUserSideBar({ id, email, role ,name}: UpdateUserProps) {
      
  return (
    <Dialog
    >
      <DialogTrigger asChild>
      <UserCog
          className=' text-slate-400 dark:text-slate-50 hover:text-primary cursor-pointer'
          size={18}/>
      </DialogTrigger>
     
       <UpdateUser
         id={id}
            email={email}
            name={name}
            role={role}
         />
      </Dialog>
  )
}
