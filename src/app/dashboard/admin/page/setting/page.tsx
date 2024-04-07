import ChangePassowrd from '@/components/for-all/change-passowrd'
import ApiCode from '@/components/user/api-code'
import React from 'react'

const page = () => {
  return (
    <div
    className='w-full flex overflow-hidden h-screen  bg-muted  relative justify-start items-start gap-5 flex-col'
    >
      <ChangePassowrd/>
      <ApiCode/>
    </div>
  )
}

export default page