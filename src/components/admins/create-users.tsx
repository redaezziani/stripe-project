'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SheetClose } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'


const CreateUser = () => {
  const [selectedRole, setSelectedRole] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [isOpened, setIsOpened] = React.useState(false)
  const router = useRouter()

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const {toast}=useToast()
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()
      setLoading(true)
      const res =await  fetch(`/api/admin/castomers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          name,
          password,
          role: selectedRole
        })
      })
      const data = await res.json()
      if (data?.status !== 'success') {
        toast({
          title: 'Error',
          description: data.message,
          variant:'destructive'
        })
      }
      else
      {
        toast({
          title: 'Success',
          description: data.message,
        })
      }
      router.refresh()

    } catch (error) {
      console.log(error)
    }
    finally
    {
      setLoading(false)
      setIsOpened(false)

    }
  }

  return (
    <>
      <div className="flex gap-2 flex-col justify-start items-start">
        <SheetHeader
        >
          <SheetTitle>
            Create User
          </SheetTitle>
          <SheetDescription>
            Please fill in the form below to create a new user
          </SheetDescription>
        </SheetHeader>
      </div>
      <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
        <Label>
          Email
        </Label>
        <Input
          onChange={handleEmailChange}
          value={email}
          className="w-full"
          placeholder='Email Address...'
        />
      </div>
      <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
        <Label>
          Name
        </Label>
        <Input
          onChange={handleNameChange}
          value={name}
          className="w-full"
          placeholder='Full Name...'
        />
      </div>
      <div className="flex gap-3 flex-col w-full mt-4 justify-start items-start">
        <Label>
          Password
        </Label>
        <Input
          onChange={handlePasswordChange}
          value={password}
          className="w-full"
          placeholder='Password...'
        />
      </div>
      <Select
        onValueChange={(e) => setSelectedRole(e)}
      >
        <SelectTrigger>
          <SelectValue
            
            placeholder="Select a role"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
           
                <SelectItem
                  value='admin'
                >
                  admin
                </SelectItem>
                <SelectItem
                  value='user'
                >
                  user
                </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
      isloading={loading}
      disabled={loading}
      className='w-fit mt-4'
      onClick={handleSubmit}>
        Create User
      </Button>
      <SheetClose />
    </>
  )
}

export default CreateUser
