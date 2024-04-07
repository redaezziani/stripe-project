'use client';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PartyPopper } from "lucide-react";
import {  useEffect, useState } from "react";

interface MessageAlertProps {
    title: string;
    description: string;
    isOpen: boolean;
}

export function MessageAlert({ title, description, isOpen = false }: MessageAlertProps) {
    const [open, setOpen] = useState(isOpen);

    useEffect(() => {
        setOpen(isOpen);

        return () => {
            setOpen(false);
        };
    }
    , [isOpen]);
  return (
    <Dialog
    open={open}
    >
      <DialogTrigger asChild>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader
        className="w-full flex justify-center items-center flex-col gap-4"
        >
          <DialogTitle
          className=" text-green-400 "
          >
            {title}
          </DialogTitle>
          <DialogDescription
          className=" text-center"
          >
            {description}
          </DialogDescription>
          <div className="w-20 flex aspect-square bg-green-400/20 rounded-full p-2 justify-center items-center">
          <PartyPopper
          className="text-green-400 "
          size={34} />
          </div>
        </DialogHeader>
       
        <DialogFooter>
          <Button
          className=" w-full mt-7 font-semibold bg-green-500 hover:bg-green-400 text-white"
          onClick={() => setOpen(false)}
          type="submit">
            Confirme 
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
