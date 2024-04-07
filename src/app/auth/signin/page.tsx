'use client';
import SubmitButton from '@/components/admin/submit'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignInSchema } from '@/app/types/from';
import { SignIn } from '@/(db)/(auth)/user-actions'
import { useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {  Eye, EyeOff, ShieldAlert } from 'lucide-react';
import AlertMessage from '@/components/for-all/alert-message';
import { ResErrType } from '@/app/types/help';

const SignInPage = () => {
  const [err, setErr] = useState({
    email: '',
    password: ''
  });
  const [isloading, setIsloading] = useState(false);
  const [isHide, setIsHide] = useState(true)
  const router = useRouter();
  const [resErr, setResErr] = useState<ResErrType>({
    status: '',
    message: ''
  })
  const handelSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
    try {
      event.preventDefault();
      setIsloading(true);
      const form = Object.fromEntries(formData.entries());
      const result = await SignInSchema.parseAsync(form);
      setErr({
        email: '',
        password: ''
      });
  
      const res = await SignIn(result) as any;
      if (res.status === 'success') {
        router.refresh();
        return null;
      } else if (res.status === 'error') {
        setResErr({
          status: res.status,
          message: res.message
        });
      }
    } catch (error: any) {
      if (error.errors) {
        error.errors.map((err: z.ZodIssue) => {
          if (err.path[0] === 'email') {
            setErr((prev) => ({
              ...prev,
              email: err.message
            }));
          }
          if (err.path[0] === 'password') {
            setErr((prev) => ({
              ...prev,
              password: err.message
            }));
          }
        });
      }
    } finally {
      setIsloading(false);
    }
  }
  
  const handelHide = () => {
    setIsHide(!isHide)
  }
  return (
    <div className=" h-screen overflow-hidden px-3 lg:p-0 w-full relative flex justify-center lg:justify-start items-center">
      <img
        className=' w-1/2 hidden lg:block  aspect-auto'
        src="/login.jpg" alt="login" />
      <div className="flex relative h-full w-full lg:w-1/2  justify-center items-center flex-col">
        <div className="bg-primary  z-50 w-full fixed lg:absolute  top-0 left-0 px-4 py-3 text-white">
        <div className=" w-full flex justify-center items-center">
            <p className="text-sm text-gray-100/80">
              By creating an account, you agree to our {' '}
              <Link href="#" className=" underline text-white">
                terms and conditions
              </Link>
              {' '} and{' '}
              <Link href="#" className="text-white underline ">{' '} privacy policy </Link>
            </p>
          </div>
        </div>
        <form
          onSubmit={(event) => handelSubmit(event, new FormData(event.currentTarget))}
          className="w-full lg:max-w-[33rem] flex justify-start items-start flex-col gap-5"
        >
          <div className="flex justify-start items-start  flex-col">
            <span
              className='text-3xl  font-bold flex justify-start items-center  '
            >
              Welcome back <img src="/logo/my-brand.png" alt="logo" className=' w-14 aspect-auto h-auto' />
            </span>
            <p
              className='text-sm font-normal text-slate-400'
            >
              Become a member - you ll enjoy new products, exclusive deals and offers.
              please sign in to your account
            </p>
            {resErr?.status === 'error' && <AlertMessage
              title='Error occured'
              className=' bg-red-500/10 text-red-500'
              icon={<ShieldAlert className=' text-red-500' size={20} />}
              description={resErr.message??''}
            />}
          </div>
          <div className="flex mt-7 w-full justify-start items-start flex-col gap-2">
            <Label
              className=' font-semibold'
              htmlFor="email">Email</Label>
            <Input
              className=' w-full'
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              name='email'
            />
            <p
              className=' text-destructive text-sm font-normal'
            >
              {err.email}
            </p>
          </div>
          <div className="flex w-full justify-start items-start flex-col gap-2">
            <Label
              className=' font-semibold'
              htmlFor="password">Password</Label>
            <div className="flex relative w-full justify-start items-center">
              <Input
                className=' w-full z-10'
                type={isHide ? 'password' : 'text'}
                placeholder="Enter your password"
                autoComplete="current-password"
                name='password'
              />
              <div
                onClick={handelHide}
                className="flex cursor-pointer z-30 right-3 absolute h-[90%] aspect-square bg-background justify-center items-center">
                {isHide ? <Eye className='  text-slate-300 ' size={18} /> : <EyeOff className=' text-pretty ' size={18} />}
              </div>
            </div>
            <p
              className=' text-destructive text-sm font-normal'
            >
              {err.password}
            </p>
          </div>
          <div className="flex gap-2 justify-between items-center w-full ">
            <div className="flex group-checked:text-pretty text-slate-400  justify-start gap-2 items-center">
              <Checkbox
                name='send_emails'
                id='send_emails'
                defaultChecked={true}
              />
              <Label
                className=' text-xs'
              >
                I want to receive emails about events, product updates and company announcements.
              </Label>
            </div>
          </div>
          <SubmitButton ispending={isloading} >
            Sign In
          </SubmitButton>
          
          <div className="w-full flex justify-center items-center">
            <p
              className=' text-slate-400'
            >
              Dont have an account?
              <Link
                href={'/auth/signup'}
                className=' ml-1 text-primary'>Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInPage