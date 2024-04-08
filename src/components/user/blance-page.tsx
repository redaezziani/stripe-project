'use client'

import React from 'react'
import useSWR from 'swr';
import MonyCard from './balance-card';
//@ts-ignore
const fetcher = (url) => fetch(url).then((res) => res.json());
const BalnceCardsData = () => {
    const { data, error } = useSWR('/api/user/balance', fetcher, { refreshInterval: 10000 });
    console.log(data)
    return (
        <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3 ">
            {data && <>
                <MonyCard
                    titel="Total hold"
                    number={data?.data?.hold??0}
                    currency='USD'
                    type='hold'
                    description='Total amount of money that is holded by the system.'
                />
                <MonyCard
                    titel="Total balance"
                    number={data?.data?.balance??0}
                    currency='USD'
                    type='balance'
                    description='Total amount of money that is in the balance of the system.'
                />
                <MonyCard
                    titel="Total withdaw"
                    number={data?.data?.withdaw??0}
                    currency='USD'
                    type='withdraw'
                    description='Total amount of money that is withdawed by the system.'
                /> 
                 <MonyCard
                    titel="Total complet"
                    number={data?.data?.complet??0}
                    currency='USD'
                    type='none'
                    description='Total amount of money that is complet by the system.'
                /> 
               
            </>
            }

        </div>
    )
}

export default BalnceCardsData