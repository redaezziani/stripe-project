import React from 'react'
import { Card } from '../ui/card'
import { UserProfile } from '../ui/user-profile'
import { NotificationCard } from './notification'

const SearchBar = () => {
  return (
    <Card
    className="w-full rounded-none lg:z-40  border-slate-300/60 shadow-none dark:border-slate-300/25 flex justify-start lg:justify-end px-4 items-center border-b   border-l-0 border-r-0 fixed bg-background backdrop-blur-sm z-50  py-5 left-0 h-fit">
        <div className="flex justify-center items-center gap-6">
          <NotificationCard />
         <UserProfile />
        </div>
    </Card>
  )
}

export default SearchBar