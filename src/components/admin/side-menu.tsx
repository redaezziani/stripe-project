'use client'

import { CreditCard, Settings, ShieldEllipsis, Target, UsersRound } from 'lucide-react';
import { GlobeLock } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
const SideMenu = () => {
    return (
        <aside
            className='w-full flex mt-10 flex-col gap-3 justify-start items-start'
        >
            <div className='w-full flex flex-col gap-3 justify-start items-start'>
                <SideTitle
                title='dashboard' path='dashboard' />
                <SideItem
                    title='get target'
                    path='/dashboard/product-management'
                    icon={<Target className='w-4 h-4' />}
                />
                 <SideItem
                    title='teams'
                    path='/dashboard/product-management'
                    icon={<UsersRound className='w-4 h-4' />}
                />
                <SideItem
                    title='roles'
                    path='/dashboard/product-management'
                    icon={<ShieldEllipsis className='w-4 h-4' />}
                />
                <SideTitle
                title='auth'
                path='/dashboard/profile'
                />
                <SideItem
                    title='security'
                    path='/dashboard/profile'
                    icon={<GlobeLock className='w-4 h-4' />}
                />
                <SideItem
                    title='settings'
                    path='/dashboard/profile'
                    icon={<Settings className='w-4 h-4' />}
                />
                <SideTitle
                title='payment'
                path='/dashboard/profile'
                />
                <SideItem
                    title='billing'
                    path='/dashboard/profile'
                    icon={<CreditCard className='w-4 h-4' />}
                />
                <SideTitle
                title='Poilicy'
                path='/dashboard/profile'
                />
               
            </div>

        </aside>
    )
}

type SideTitleProps = {
    title: string
    path: string
}

export const SideTitle = ({ title , path }: SideTitleProps) => {
    // lets make it array of string and all lower case
    const pathname = usePathname().split('/').map((item) => item.toLowerCase())
    console.log(pathname.includes(path))
    return (
  
        <Link
        className={` px-5  flex justify-start items-center gap-2 font-semibold`}
        href={path}>
                {title}
        </Link>
    )
}

interface SideItemProps {
    title: string
    path: string
    icon : React.ReactNode
}
export const SideItem = ({ title, path , icon }: SideItemProps) => {
    const pathname = usePathname().split('/').map((item) => item.toLowerCase())
    return (
        <Link
            className={` px-8 flex justify-start items-center gap-2  text-muted-foreground `}
            href={path}>
            {icon}
            {title}
        </Link>
    )
}


export default SideMenu