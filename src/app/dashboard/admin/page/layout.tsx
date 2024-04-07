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
    <div className={`w-full  mt-4 flex px-4 min-h-screen bg-muted  relative justify-start items-start gap-6 flex-col`}>
      {children}
    </div>
  );
}
