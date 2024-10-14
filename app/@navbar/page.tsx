"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Bell, CheckCheck, ChevronDown, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import Time_and_Date from "../Shared_Components/Time_and_Date";
export default function Navbar() {
  const path = usePathname();
console.log(path)
  return (
    <div className={`w-full h-[50px] bg-white flex  items-center justify-center relative  ${path === "/login"? "hidden" :path === "/login/verifyotp" ? "hidden":path === "/login/forgotpassword" ? "hidden" :   "flex" } `} >
    <Link href={"/"} className="absolute left-4">
      <Image
        src={"/assets/categories.icons/chair.jpg"}
        width={40}
        height={40}
        alt="logo"
      />
    </Link>
   <Time_and_Date/>
 

    <div className="flex gap-2 items-center absolute right-6">
      <div className="flex gap-3 mr-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Bell color="#667085" size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="flex w-full justify-between">
                <h1>Notifications</h1>
                <Link href={"/notifications"}>
                <h1 className="text-green-500">+ Create Notifications</h1>
                </Link>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center ">
              <CheckCheck size={16} className="mx-2"/>
                <div className="flex flex-col ml-2">
                  <h1 className="text-[#546181] font-semibold">you accepted a request</h1>
                  <h1 className="text-[#7B7B7B] text-xs">oct 02 2024</h1>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center ">
              <CheckCheck size={16} className="mx-2"/>
                <div className="flex flex-col ml-2">
                  <h1 className="text-[#546181] font-semibold">Payment made for order</h1>
                  <h1 className="text-[#7B7B7B] text-xs">oct 02 2024</h1>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center ">
              <CheckCheck size={16} className="mx-2"/>
                <div className="flex flex-col ml-2">
                  <h1 className="text-[#546181] font-semibold">Abebe kebede commented on your blog</h1>
                  <h1 className="text-[#7B7B7B] text-xs">oct 02 2024</h1>
                </div>
              </div>
            </DropdownMenuItem>

          
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Mail color="#667085" size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Messages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center w-[400px]">
                <Avatar className="rounded-full mr-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ml-2">
                  <h1>Mehamed : door request</h1>
                  <h1 className="text-[#7B7B7B] text-xs">4 mins ago</h1>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center ">
                <Avatar className="rounded-full mr-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ml-2">
                  <h1>Lidet : door request</h1>
                  <h1 className="text-[#7B7B7B] text-xs">oct 02 2024</h1>
                </div>
              </div>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem className="w-full ">

              <h1 className="text-xs text-center"><Link href="requests">View all messages</Link></h1>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Avatar className="rounded-full mr-2">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex">
          {" "}
          <div className="mr-2">
            <h1 className="text-[#1A1C21] text-sm font-semibold">
              Temesgen Tapiseri
            </h1>
            <h1 className="text-[#7B7B7B] text-sm text-start">Manager</h1>
          </div>{" "}
          <ChevronDown color="#7B7B7B" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <h1>Temesgen Tapiseri</h1>
            <h1 className="text-[#7B7B7B] text-xs font-normal">
              manager
            </h1>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Link href="/profile">My Profile</Link></DropdownMenuItem>
          <DropdownMenuItem><Link href={"activites"}>Activites</Link></DropdownMenuItem>
          <DropdownMenuItem>
            {" "}
            <Link href={"/login"}>   <h1 className="text-red-500">Logout</h1> </Link>
         
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
  )
}
