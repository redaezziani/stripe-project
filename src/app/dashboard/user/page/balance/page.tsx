
import BalnceCardsData from '@/components/user/blance-page'
import CreateTransfer from '@/components/user/create-transfer'
import Transfare from '@/components/user/transfer'
import React from 'react'

const page = () => {
  return (
    <div
    className='w-full flex overflow-hidden min-h-screen  bg-muted  relative justify-start items-start gap-5 flex-col'
    >
      <div className="w-full flex justify-end items-center">
        <CreateTransfer/>
      </div>
      <BalnceCardsData/>
      <Transfare/>
    </div>
  )
}

export default page