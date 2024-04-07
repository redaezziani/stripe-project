import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "hunter",
  description: "Next js Scraping web site"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full `}>

        {children}
    
    </div>
  );
}
