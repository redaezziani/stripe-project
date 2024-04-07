import { Button } from '@/components/ui/button'
import Transaction from '@/components/admins/transactions'
import DardsDataTransactions from '@/components/admins/transactions-cards'
import { GlobeLock } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div
    className='w-full flex overflow-hidden min-h-screen  bg-muted  relative justify-start items-start gap-5 flex-col'
    >
      <div className="w-full flex justify-end items-center">
        <Button
        >
         New Transaction
          <GlobeLock className="w-4 h-4 ml-2"/>
        </Button>
      </div>
       <DardsDataTransactions/>
       <Transaction/>
    </div>
  )
}

export default page