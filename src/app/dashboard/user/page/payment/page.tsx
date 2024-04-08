import { CreatePaymetLinkSideBar } from '@/components/user/create-payment-link-side-bar'
import Transaction from '@/components/user/transactions'
import DardsDataTransactions from '@/components/user/transactions-cards'
import React from 'react'

const page = () => {
  return (
    <div
    className='w-full flex overflow-hidden min-h-screen  bg-muted  relative justify-start items-start gap-5 flex-col'
    >
      <div className="w-full flex justify-end items-center">
        <CreatePaymetLinkSideBar/>
      </div>
       <DardsDataTransactions/>
       <Transaction/>
    </div>
  )
}

export default page