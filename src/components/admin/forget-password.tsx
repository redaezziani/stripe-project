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
import  Link  from "next/link"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { forgetPassword } from "@/(db)/(auth)/user-actions"
import React from "react"

export function ForgetPassword() {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await forgetPassword(email)
    if (res?.status === 'success') {
      setMessage(res.message)
    }
    setLoading(false)
  }

    return (
        <Dialog
        
        >
            <DialogTrigger asChild>
                <Link href="#" className='text-sm text-primary'>
                    Forgot password?
                </Link>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle
          className=" text-primary"
          >
            Send Resend Email !
          </DialogTitle>
          <DialogDescription>
            Enter you account email to send a password resnd password.
          </DialogDescription>
        </DialogHeader>
        <div className=" flex justify-start items-start flex-col gap-3">
            <Label htmlFor="name" className="text-right">
              Email 
            </Label>
            <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            value={email}
            id="email" className="col-span-4" />
        </div>
        <DialogFooter>
          <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn btn-primary"
          >
            {loading ? 'Loading...' : 'Send Email'}
          </button>
          
        </DialogFooter>
        {message && (
          <DialogDescription>
            {message}
          </DialogDescription>
        )}

      </DialogContent>
        </Dialog>
    )
}
