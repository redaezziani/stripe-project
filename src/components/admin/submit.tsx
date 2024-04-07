'use client'
import { LogIn } from 'lucide-react'
import { Button } from '../ui/button'
const SubmitButton: React.FC<{ ispending?: boolean, children: React.ReactNode }> = ({ ispending = false, children }) => {
  return (
    <Button
      className='w-full mt-5'
      type="submit"
      isloading={ispending}
      disabled={ispending}
    >
     <div className=" w-28 flex font-semibold justify-between items-center">
       <LogIn size={20} /> {children}
     </div>
    </Button>
  )
}

export default SubmitButton