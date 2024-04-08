'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { restPassword } from "@/(db)/(auth)/user-actions";
import { ShieldAlert } from "lucide-react";
import AlertMessage from "@/components/for-all/alert-message";
import { GiSuckeredTentacle } from "react-icons/gi";
import { useRouter } from "next/navigation";
export default function  RestPasswordPageData (params: any) {
  const [passowrd , setPassowrd] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const [isLoading , setIsLoading] = useState(false)
  const router = useRouter()
  const [resErr, setResErr] = useState({
    status: '',
    message: ''
  })
  const handelSubmit = async () => {
    try {
      setIsLoading(true)
      if (passowrd !== confirmPassword) {
        setResErr({
          status: 'error',
          message: 'Password does not match'
        })
        return
      }
     const response = await restPassword({
        newPassword: passowrd,
        confirmPassword: confirmPassword,
        token: params.params.token[0]
      })

      if (response.status!='success') {
        setResErr({
          status: response.status,
          message: response.message
        })
        // after 3 seconds
        setTimeout(() => {
          router.push('/auth/signin')
        }, 3000)
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
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className=" h-screen overflow-hidden w-full relative flex justify-center items-center gap-9">
     
        <div className="flex flex-col gap-3 justify-start items-start w-96">
          <h1 className='text-2xl font-bold text-center'>Reset Password</h1>
          <p className='text-sm text-gray-500'>
            Enter your new password and confirm it
          </p>
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
            type='password'
            placeholder='Password'
            value={passowrd}
            onChange={(e) => setPassowrd(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            onClick={handelSubmit}
            isloading={isLoading}
          >
            Reset Password
          </Button>
        </div>
    </div>
  )
}

