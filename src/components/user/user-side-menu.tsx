'use client'
import { CreditCard, GanttChart, Home, Settings } from 'lucide-react';
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
                title='Dashboard' path='/dashboard/user/page' />
                <SideItem
                title='home'
                path='/dashboard/user/page'
                icon={<Home className='w-4 h-4'/>}
                />
                 <SideItem
                title='payment'
                path='/dashboard/user/page/payment'
                icon={<CreditCard className='w-4 h-4'/>}
                />
                 <SideItem
                title='balance'
                path='/dashboard/user/page/balance'
                icon={<GanttChart className='w-4 h-4'/>}
                />
                
                <SideItem
                title='profile'
                path='/dashboard/user/page/profile'
                icon={<Settings className='w-4 h-4'/>}
                />
                <SideItem
                title='more'
                path='/dashboard/user/page/more'
                icon={<svg
                    className='w-4 h-4'
                    xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>}
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
    const pathname = usePathname().split('/').map((item) => item.toLowerCase())
    return (
  
        <Link
        className={` lg:px-5  flex justify-start items-center gap-2 font-semibold`}
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
    const pathname = usePathname()
    return (
        <Link
            className={` px-5 lg:px-8 flex justify-start items-center gap-2  text-muted-foreground ${pathname===path? 'text-primary' : ''}`}
            href={path}>
            {icon}
            {title}
        </Link>
    )
}


export default SideMenu