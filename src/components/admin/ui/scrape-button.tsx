'use client'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'
const SubmitButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className='w-full'
      type="submit"
      isloading={pending}
      disabled={pending}
    >
      {children}
    </Button>
  );
};

export default SubmitButton