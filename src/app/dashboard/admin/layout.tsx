import { SideBar } from "@/components/admins/admin-side-bar-phone";
import { ModeToggle } from "@/components/ui/mode";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import SideMenu from "@/components/admins/admin-side-menu";
import SearchBar from "@/components/admin/search-bar";

export const metadata: Metadata = {
  title: "Payment Gateway | ipsepay",
  description: "A payment gateway for all your online transactions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` h-screen  relative w-full grid grid-cols-11 overflow-x-hidden overflow-y-auto  `}>
        <div className="w-full  top-0 z-50  sticky border border-slate-300/60 dark:border-slate-300/25 border-fix border-l  left-0 col-span-2 h-screen hidden lg:flex justify-start items-start gap-3 flex-col ">
          <div className="w-full px-5 flex z-50 relative justify-between items-center h-20">
            <div className="flex justify-start items-center gap-2">
          <img src="/logo/framer.png" alt="logo" className="w-10 aspect-square h-auto object-cover"/>
          <h2
          className=" font-bold"
          >
           STRIPE CLONE 
          </h2>
          </div>
            <ModeToggle/>
          </div>
          <SideMenu />
        </div>
      <div className="w-full bg-muted h-screen overflow-x-hidden  flex relative justify-start items-start gap-3 flex-col col-span-11 lg:col-span-9 ">
      <div className="mt-20"></div>
         <SearchBar />
        <div className="flex absolute">
        <Toaster />
        </div>
        {children}
      </div>
      <div className=" flex z-50 lg:hidden fixed right-4 top-3">
         <SideBar />
      </div>
    </div>
  );
}
