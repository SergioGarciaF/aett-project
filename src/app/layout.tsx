import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter } from 'lucide-react'

const anton = Anton({
  weight: '400', 
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "AETT",
  description: "AETT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anton.className} >
        <header>
          <Navbar/>
        </header>
        {children}
        <footer className='flex flex-col bg-primary md:pt-8'>
            <Separator className='w-full border border-secondary' />
            <div className='flex flex-col md:flex-row justify-between p-10 pt-8 text-secondary'>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <p className='text-xs'>Siguenos en</p>
                    <ul className='flex gap-2'>
                        <li className='cursor-pointer'><Instagram width={18} /></li>
                        <li className='cursor-pointer'><Twitter width={18} /></li>
                    </ul>
                </div>
                <p className='text-center pt-3 md:pt-0'>AETT <span className='text-xs'>© Copyright 2024 todos los derechos reservados</span></p>
            </div>
        </footer>
        </body>
    </html>
  );
}
