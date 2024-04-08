'use client'
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wallet2 } from 'lucide-react'
import { useToast } from '../ui/use-toast'
const CreateTransfer = () => {
    const {toast} = useToast()
    const [loading,setLoading]= useState(false)
    const [amount,setAmount] = useState(0)
    const [bankAccount,setBankAccount] = useState('')
    const handelSubmit = async ()=>{
      try {
      setLoading(true)
      const data = {
        amount,
        bankAccount
      }
      setLoading(true)
      //@ts-ignore
      const res = await fetch('/api/user/transfare', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await res.json()
      if(result.status === 'success'){
        //@ts-ignore
        toast('success',result?.message)
        setAmount(0)
        setBankAccount('')
      }
      else{
        //@ts-ignore
        toast('error',result.message)
      }
      } catch (error) {
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        className=' px-7'
        >
            transfer <Wallet2
            className=' w-4 h-4 ml-2'
            />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Transfer Sold
          </DialogTitle>
          <DialogDescription>
            Please fill in the form below to transfer sold
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="bankAccount" className="sr-only">
                Bank Account
            </Label>
            <Input
              id="bankAccount"
              placeholder='Enter bank account number...'
              value={bankAccount}
              //@ts-ignore
              onChange={(e)=>setBankAccount(e.target.value)}              
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="amount" className="sr-only">
                Amount
            </Label>
            <Input
              id="amount"
              value={amount}
              type='number'
              //@ts-ignore
              onChange={(e)=>setAmount(e.target.value)}              
            />
          </div>
        </div>
        
        <DialogFooter className="sm:justify-start">
            <Button
            onClick={handelSubmit}
            isloading={loading}
            disabled={loading}
            >
                transfare
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateTransfer