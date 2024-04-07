'use client';
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { forgetPassword } from '@/(db)/(auth)/user-actions';
import { userRoute } from '@/lib/auth';
import AlertMessage from '@/components/for-all/alert-message';
import { ShieldAlert } from 'lucide-react';
import { GiSuckeredTentacle } from 'react-icons/gi';
const page = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [resErr, setResErr] = useState({
    status: '',
    message: ''
  })
  //@ts-ignore
  const handelChange = (e) => {
    setEmail(e.target.value)
  }
  const handelSubmit = async () => {
    try {
      setIsLoading(true)
      const response = await forgetPassword(email)
      if (response.status!='success') {
        setResErr({
          status: response.status,
          message: response.message
        })
      }
      else {
        setResErr({
          status: response.status,
          message: response.message
        })
      }

    }
    catch (error) {
      console.log(error)
    }
    finally
    {
      setIsLoading(false)
    }
  }
  return (
    <div
      className='h-screen overflow-hidden w-full relative flex justify-center items-center gap-9'
    >
      <div className="flex flex-col w-full justify-start items-start gap-2 lg:w-[28rem]">
        <div className="flex flex-col gap-2 justify-start items-start ">
          <h1 className='text-2xl font-bold text-center'>Reset Password</h1>
          <p className='text-sm text-gray-500'>
            Enter your email address and we will send you a link to reset your password
          </p>
        </div>
        {resErr?.status === 'error' && <AlertMessage
              title='Error occured'
              className=' bg-red-500/10 text-red-500'
              icon={<ShieldAlert className=' text-red-500' size={20} />}
              description={resErr.message??''}
            /> 
            }
            {
              resErr?.status === 'success' && <AlertMessage
              title='Success'
              className=' bg-green-500/10 text-green-500'
              icon={<GiSuckeredTentacle className=' text-green-500' size={20} />}
              description={resErr.message??''}/>
            }
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={handelChange}
          className='mt-5'
        />
        <Button
          onClick={handelSubmit}
          className='mt-5'
          isloading={isLoading}
        >
          Reset Password
        </Button>
      </div>
    </div>
  )
}

export default page