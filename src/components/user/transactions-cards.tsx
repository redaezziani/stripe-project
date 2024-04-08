'use client'

import React from 'react'
import useSWR from 'swr';
import DataCard from './data-card';
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.json());
const DardsDataTransactions = () => {
    const { data, error } = useSWR('/api/user/transactions/analys-transactions', fetcher, { refreshInterval: 10000 });
    return (
        <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3 ">
            {data && <>
                <DataCard
                    titel="Paid"
                    number={data?.data?.PAID}
                    type='paid'

                    descreption='This is the total number of paid transactions'
                />
                <DataCard
                    titel='Failed'
                    number={data?.data?.FAILED}
                    type='faild'

                    descreption='This is the total number of failed transactions'
                />
                <DataCard
                    titel="Refund"
                    number={data?.data?.REFUND}
                    type='refund'
                    descreption='This is the total number of refund transactions'
                /> 
                <DataCard
                    titel='Cancelled'
                    number={data?.data?.CANCELLED}
                    type='none'

                    descreption='This is the total number of cancelled transactions'
                />
            </>
            }

        </div>
    )
}

export default DardsDataTransactions