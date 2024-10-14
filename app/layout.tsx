
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Copyright, } from "lucide-react";
import React from 'react'



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tame Tapiseri",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,navbar
}: {
  children: React.ReactNode;
  navbar: React.ReactNode;
}) {
 

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen`}
      >
  {navbar}
        {children}
        <div className="w-full h-[50px] bg-white mt-1  flex items-center justify-center">
          <h1 className="text-[#7B7B7B] text-[11px] font-bold flex items-center">
            {" "}
            copyright <Copyright
              color="#7B7B7B"
              size={12}
              className="mx-1"
            />{" "}
            2024 all rights reserved
          </h1>
        </div>
      </body>
    </html>
  );
}
