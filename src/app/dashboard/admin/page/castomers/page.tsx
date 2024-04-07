import Castomers from '@/components/admins/castomers'
import { CreateUserSideBar } from '@/components/admins/create-side-bar'
import React from 'react'

const page = () => {
  return (
    <div
    className='w-full flex overflow-hidden min-h-screen  bg-muted  relative justify-start items-start gap-5 flex-col'
    >
      <div className="w-full flex justify-end items-center">
        <CreateUserSideBar/>
      </div>
       <Castomers/>
    </div>
  )
}

export default page