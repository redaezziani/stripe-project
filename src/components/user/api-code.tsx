import React from 'react'
import { Card } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Copie from '../for-all/copie'

const ApiCode = () => {
  return (
    <Card className='w-full flex p-4  justify-start items-start'>
            <div className='w-full md:w-1/2 flex flex-col gap-5'>
                <Label
                  htmlFor='current-password'
                  className=' font-semibold text-slate-500'
                >
                    API Key
                </Label>
                <div className="flex w-full justify-start items-center gap-2">
                <Input className='w-full' placeholder='API Key' />
                <Copie
                text='API Key'
                />
                </div>
            </div> 
    </Card>
  )
}

export default ApiCode