'use client'

import React from 'react'
import useSWR from 'swr';
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.json());
import { AnalysDataType } from '@/app/types/user';
import DataCard from '../data-card';
const DardsData = () => {
  const {data , error} = useSWR('/api/user/analys', fetcher,{refreshInterval: 10000 });
  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 ">
      {data && <>
      <DataCard
      titel="Transactions Number"
      price={data?.data.transactionsNumber}
      type='increase'
      percentage={20.81}
      descreption='Since last week'
      />
  
      <DataCard
       titel='Total Day Amount' 
       price={data?.data.totalDayAmount} 
       type='none' 
       percentage={50.81} 
       descreption=''
      />
      <DataCard
      titel="Total Amount"
      price={data?.data.totalAmount}
      type='decrease'
      percentage={20.81}
      descreption=''
      />
      </>
      }
      
    </div>
  )
}

export default DardsData