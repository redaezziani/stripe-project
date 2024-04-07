'use client';
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react'
import { ChangePasswordSchema, ChangePasswordType } from '@/app/types/from';
import { z } from 'zod';
import { changePassowrd } from '@/(db)/(auth)/user-actions';
import { useToast } from '../ui/use-toast';
import { Card } from '../ui/card';

const ChangePassowrd = () => {
    const [form, setForm] =useState<ChangePasswordType>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      })
    
      const [error, setError] =useState<ChangePasswordType>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      })

      const [isLoading, setIsLoading] =useState<boolean>(false)
      const handleChange = (e:any) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
      }
      const {toast} = useToast ()
    const handleChangePassword = async () => {
        try {
            setIsLoading(true)
            const data = ChangePasswordSchema.parse(form)
             if (data.newPassword !== data.confirmPassword) {
                setError((prev) => ({ ...prev, confirmPassword: 'Password does not match' }))
                return
            }
            setError((prev) => ({ ...prev, confirmPassword: '' }))
            const res = await changePassowrd(data)
            if (res.status !== 'success') {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description:res.message
                })
            }

            toast({
                title: 'Success',
                description: 'Password changed successfully'
            })

            setForm((prev) => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }))

        } catch (error) {
           if (error instanceof z.ZodError) {
                const errors:any = {}
                error.errors.forEach((err) => {
                    const path = err.path.join('.')
                    errors[path] = err.message
                })
                
                if (!errors.currentPassword) {
                    setError((prev) => ({ ...prev, currentPassword: '' }))
                }
                if (!errors.newPassword) {
                    setError((prev) => ({ ...prev, newPassword: '' }))
                }
                if (!errors.confirmPassword) {
                    setError((prev) => ({ ...prev, confirmPassword: '' }))
                }
                setError((prev) => ({ ...prev, ...errors }))
           }
        }
        finally {
            setIsLoading(false)
            setError((prev) => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }))
        }
    }
    
     

  return (
        <Card className='w-full flex p-4  justify-start items-start'>
            <div className='w-full md:w-1/2 flex flex-col gap-5'>
            <div className='w-full flex flex-col gap-2'>
                <Label
                htmlFor='current-password'
                className=' font-semibold text-slate-500'
                >
                Current Password
                </Label>
                <Input
                name='currentPassword'
                type='password'
                onChange={handleChange}
                placeholder='Enter your current password'
                id='current-password'
                />
                {error.currentPassword && <p className='text-red-500 text-sm'>{error.currentPassword}</p>}
            </div>
            <div className='w-full flex flex-col gap-2'>
                <Label
                htmlFor='new-password'
                className=' font-semibold text-slate-500'
                >
                New Password
                </Label>
                <Input
                type='password'
                name='newPassword'
                onChange={handleChange}
                placeholder='Enter your new password'
                id='new-password'
                />
                {error.newPassword && <p className='text-red-500 text-sm'>{error.newPassword}</p>}
            </div>
            <div className='w-full flex flex-col gap-2'>
                <Label
                htmlFor='confirm-password'
                className=' font-semibold text-slate-500'
                >
                Confirm Password
                </Label>
                <Input
                type='password'
                name='confirmPassword'
                onChange={handleChange}
                placeholder='Confirm your new password'
                id='confirm-password'
                />
                {error.confirmPassword && <p className='text-red-500 text-sm'>{error.confirmPassword}</p>}
            </div>
            <Button
                isloading={isLoading}
               
                onClick={handleChangePassword}
                className=' w-fit'
                >
                Change Password
            </Button>

            </div>
        </Card>
  )
}

export default ChangePassowrd