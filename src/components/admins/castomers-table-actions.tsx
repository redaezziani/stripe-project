'use client';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from '../ui/button';
import { Trash2, UserCog } from 'lucide-react';
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';

interface CastomersTableActionsProps {
  id: string;
  email: string;
  name : string;
  role: string;
}

const CastomersTableActions = ({ id, email, role ,name}: CastomersTableActionsProps) => {
  const {toast} = useToast()
  const router = useRouter()
  const handleDelete = async () => {
    try {
      const confirme = confirm('Are you sure you want to delete this castomer?')
      if (!confirme) return


      const res =  await fetch(`/api/admin/castomers/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
      })

      const data = await res.json()

      if (data.status !== 'success') {
        toast({
          title: 'Error',
          description: data.message,
          variant:'destructive'
        })
      }

      toast({
        title: 'Deleted',
        description: 'Castomer has been deleted'
      })

      router.refresh()

    } catch (error) {
      
    }
  }
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button
          variant={'link'}
          className=' '
        >
          <svg
            className='w-4 h-4'
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
      className=' w-fit p-2 mt-3'
      >
        <div className="flex justify-start items-center gap-4">
        
          <Trash2
          onClick={handleDelete}
          className=' text-slate-400 dark:text-slate-50 hover:text-red-500 dark:hover:text-red-500 cursor-pointer'
          size={18}/>
         
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default CastomersTableActions