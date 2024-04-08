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
          
          <Toaster/>
          {children}
    </div> 
  );
}