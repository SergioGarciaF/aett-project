import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

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
      <body className={anton.className} >{children}</body>
    </html>
  );
}
