import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Lock } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div
    className='w-full flex overflow-hidde p-2  bg-background min-h-screen    relative justify-center items-center gap-5 flex-col'
    >
      <main className=" w-full place-content-center place-items-center lg:max-w-7xl grid  grid-cols-6 ">
        <div className="w-full gap-2 flex-col flex justify-start items-start col-span-6 lg:col-span-3">
          <h3
          className=' font-semibold text-slate-700 text-lg'
          >
            Apple vision pro
          </h3>
          <p
          className=' text-2xl font-bold'
          >
            1489 $
          </p>
          <p
          className='text-slate-600'
          >
            pre-order
          </p>
          <div className="w-72 aspect-square p-2 border border-slate-300/25 rounded flex justify-center items-center">
          <img
          className=' w-full aspect-square h-auto object-contain'
          src="/product.png" alt="" />
          </div>

          <div className="flex mt-6 justify-start items-center gap-3">
            <h4
            className=' text-sm text-slate-500'
            >
              power by <b>Stripe</b> 
            </h4>
            {' '}
            <h4
            className=' text-sm text-slate-500'
            >
             Terms {' '} Privacy
            </h4>
          </div>
        </div>
        <div className="w-full lg:w-[80%] gap-2 flex-col flex justify-start items-start col-span-6 lg:col-span-3">
          <h3
          className=' font-semibold text-slate-800 text-3xl'
          >
            Pay with card
          </h3>
          <div className="flex w-full mt-9 flex-col gap-4 justify-start items-start">
            <Label
            className='  font-semibold text-slate-800'
            >
            Email
            </Label>
            <Input
            type='email'
            placeholder=''
            className=' w-full'
            />
          </div>
          <Label
            className=' mt-2  font-semibold text-slate-800'
            >
            Card Informations
            </Label>
          <div className="flex flex-col w-full justify-start items-start border rounded-lg">
            
            <div className="w-full flex p-0.5 justify-start items-center">
            <input
            type='text'
            placeholder='1234 1234 1234 1234'
            className=' w-[90%] p-2 focus:outline-none focus:ring-0'
            />
            <div className="flex gap-2">
              <img
              className='h-7 w-full'
              src="/Visa.png" alt="" />
              <img
              className=' h-7 w-full'
              src="/Mastercard.png" alt="" />
            </div>
            </div>
            <div className="w-full flex border-t  p-0.5 justify-between items-center">
              <input
              className=' w-1/2 placeholder:capitalize  p-2 focus:outline-none focus:ring-0'
              placeholder='MM / YY'
              type="text" />
              <input
              className=' w-1/2 placeholder:capitalize border-l  p-2 focus:outline-none focus:ring-0'
              placeholder='CCV'
              type="text" />
            </div>
          </div>

          <div className="flex w-full mt-9 flex-col gap-4 justify-start items-start">
            <Label
            className='  font-semibold text-slate-800'
            >
            Card Name
            </Label>
            <Input
            type='text'
            placeholder=''
            className=' w-full'
            />
          </div>
          <div className="flex w-full mt-9 flex-col gap-4 justify-start items-start">
            <Label
            className='  font-semibold text-slate-800'
            >
              Phone number
            </Label>
            <Input
            type='text'
            placeholder=''
            className=' w-full'
            />
          </div>
          <Button
          className=' w-full mt-6'
          >
            Pay 1489 $
          </Button>
        </div>
      </main>   
    </div>
  )
}

export default page