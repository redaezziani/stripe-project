import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link";
export const metadata: Metadata = {
  title: "Auth website",
  description: "Auth website layout",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
    className="w-full flex flex-col gap-2 justify-center items-center h-screen overflow-hidden "
    >
          <div className="w-full h-14 text-center flex justify-center items-center font-semibold text-sm bg-primary text-white p-2">
            Please read the instructions carefully and follow the steps to verify your account <Link  href='/auth/signin' className='text-white ml-2 underline'>Sign In</Link>
          </div>   
          <Toaster/>
          {children}
    </div> 
  );
}