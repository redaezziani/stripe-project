'use client'

import React from 'react'
import useSWR from 'swr';
import DataCard from './data-card';
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.json());
const DardsDataTransactions = () => {
    const { data, error } = useSWR('/api/admin/analys', fetcher, { refreshInterval: 10000 });
    console.log(data)
    return (
        <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3 ">
            {data && <>
                <DataCard
                    titel="Transactions"
                    number={data?.data?.transactionsNumber}
                    currency=''
                    descreption='Total number of transactions'
                />
                <DataCard
                    titel="Today"
                    number={data?.data?.totalDayAmount}
                    currency='USD'
                    descreption='Total amount of transactions today'
                />
                <DataCard
                    titel="Total Amount"
                    number={data?.data.totalAmount}
                    currency='USD'
                    descreption='Total amount of transactions'

                /> 
                 <DataCard
                    titel="Total Users"
                    number={data?.data?.totalUsers}
                    currency=''
                    descreption='Total number of users'
                /> 
               
            </>
            }

        </div>
    )
}

export default DardsDataTransactions