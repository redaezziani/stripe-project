import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner"
const roboto = Roboto({
  subsets: ['latin'],
  weight: "400"
});

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
    <html lang="en">
      <body className={`${roboto.className}  min-h-screen   w-full   flex justify-start items-center flex-col relative gap-2 `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
