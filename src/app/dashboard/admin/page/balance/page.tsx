
import BalnceCardsData from '@/components/admins/blance-page'
import Transfare from '@/components/admins/transfer'
import React from 'react'

const page = () => {
  return (
    <div
    className='w-full flex overflow-hidden min-h-screen  bg-muted  relative justify-start items-start gap-5 flex-col'
    >
      <BalnceCardsData/>
      <Transfare/>
    </div>
  )
}

export default page