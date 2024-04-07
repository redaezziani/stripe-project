'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ClipboardCheck } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
interface CopieProps {
    text : string      
}
const Copie = ({text}:CopieProps) => {
    const {toast} = useToast()
    const copy = () => {
        navigator.clipboard.writeText(text)
        toast({
            title:'Copied',
            description:'Copied to clipboard'
        })
    }
  return (
    <Button
    onClick={copy}
    variant={'outline'}
    className=' w-10 h-10 p-1'
    >
        <ClipboardCheck size={18} />
    </Button>
  )
}

export default Copie