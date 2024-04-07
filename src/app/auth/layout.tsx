import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
export const metadata: Metadata = {
  title: "E-commerce-Store",
  description: "Next js E-commerce store",
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

          <div className=" absolute">
          <Toaster/>
          </div>
          
          {children}
    </div> 
  );
}