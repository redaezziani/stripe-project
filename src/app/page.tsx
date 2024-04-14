import Banner from "@/components/home/Banner";
import Companies from "@/components/home/Companies";
import Faq from "@/components/home/Faq";
import Features from "@/components/home/Features";
import Simple from "@/components/home/Simple";
import Table from "@/components/home/Table";
import Trade from "@/components/home/Trade";
import Work from "@/components/home/Work";
import '@/app/home.css'
import Link from "next/link";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <main
    className=" w-full overflow-hidden relative flex justify-start items-center flex-col gap-2"
    >
      <img
      className=" fixed right-4 bottom-4 h-12 w-12 z-50 cursor-pointer"
       src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2048x2048-fkq33e7y.png" alt=""  />
      <nav
      className=" fixed bg-white flex justify-between items-center z-50 w-full max-w-7xl   px-6 py-4 "
      >
        <h2
        className=" text-2xl font-bold text-primary"
        >
        ipsepay
        </h2>
        <div className="flex gap-2 justify-center items-center">
          <Link
          href={'/auth/signin'}
          >
          <Button
          size={'lg'} 
          >
          Sign In
          </Button>
          </Link>
          <Link
          href={'/auth/signup'}
          >
          <Button
          size={'lg'}
          variant={'outline'}
          >
          Sign Up
          </Button>
          </Link>

        </div>
      </nav>
      <Banner />
      <Companies />
      <Work />
      <Table />
      <Features />
      <Simple />
      <Trade />
      <Faq />
    </main>
  )
}