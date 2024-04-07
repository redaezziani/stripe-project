'use client'


import { GlobeLock, UserCog } from "lucide-react"
import UpdateTransactionDialog from "./update-transaction"
import { Dialog, DialogTrigger } from "../ui/dialog"




interface UpdateTransactionProps {
        id: string;
        email: string;
        name : string
        phone: string;
        amount: number;
        code: string;
        type: string;
}
export async function UpdateTransactionSideBar({ id, email, name, phone, amount, code, type}: UpdateTransactionProps) {
      
  return (
    <Dialog
    >
      <DialogTrigger asChild>
      <GlobeLock
          className=' text-slate-400 dark:text-slate-50 hover:text-primary cursor-pointer'
          size={18}/>
      </DialogTrigger>
     
       <UpdateTransactionDialog
                id={id}
                email={email}
                name={name}
                phone={phone}
                amount={amount}
                code={code}
                type={type}

         />
      </Dialog>
  )
}
