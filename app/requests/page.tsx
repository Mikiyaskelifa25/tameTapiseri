"use client";
import {
  Calendar,
  Camera,
  ChevronLeft,
  Circle,
  Filter,
  Paperclip,
  Search,

  SearchIcon,
  Send,
} from "lucide-react";
import React from "react";
import Link from "next/link";

import Calender from "../Shared_Components/Calender";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

export default function Request() {
  return (
    <div className="w-full h-[90%] flex flex-col items-center justify-start ">
      <div className="flex w-full h-[50px] items-center mt-2">
        <Link href={"/"} className="flex items-center gap-2 ml-4">
          {" "}
          <ChevronLeft /> <h1 className="font-bold">Requests</h1>
        </Link>

        <div className="w-[300px] overflow-hidden flex items-center h-[38px] ml-20 rounded-[30px] bg-white border shadow">
          <Input
            type="text"
            placeholder="Search anyting here..."
            className="w-[90%] h-[36px] border-0"
          />
          <Search strokeWidth={2} size={16} color="#667085" className="mx-2" />
        </div>

        <div className="border rounded-[6px] flex items-center justify-center ml-6  bg-white h-[30px]">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={null}>
                <Calendar strokeWidth={2} size={16} color="#667085" />
                <h1 className="text-[11px] ml-2 font-bold text-[#667085]">
                  Select Dates
                </h1>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calender />
            </PopoverContent>
          </Popover>
        </div>

        <div className="border rounded-[6px] flex items-center justify-center ml-4  bg-white h-[30px]">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={null}>
                <Filter strokeWidth={2} size={16} color="#667085" />
                <h1 className="text-[11px] ml-2 font-bold text-[#667085]">
                  Filters
                </h1>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <h1 className="p-4 font-bold  animation-ping"> i will be back</h1>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="w-full h-full flex items-start justify-center mt-2   overflow-hidden ">
        <div className="w-[80%] h-full grid grid-cols-4 items-center gap-4 ">
          <div className="col-span-1 border shadow rounded-lg h-full bg-white flex flex-col items-center relative">
            <div className="flex items-center space-x-2 self-start ml-2 mt-2 h-[40px] ">
              <div className="w-[85%] h-full border-2 border-[#e2e0e0] border-t-0  border-r-0  border-l-0  flex items-center  ml-2  ">
                <SearchIcon
                  strokeWidth={2}
                  size={18}
                  color="#667085"
                  className=""
                />

                <Input
                  type="text"
                  className="px-1 h-[30px] border-0 "
                  placeholder="Find request"
                />
              </div>
            </div>
            <div className="w-[90%] h-[55px] shadow border rounded flex items-center mt-3 p-2">
              <Avatar className="rounded-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <h1 className="ml-2 text-xs">john Doe</h1>
                <h1 className="ml-2 text-[10px] text-[#667085]">4 mins ago</h1>
              </div>
              <Circle
                size={10}
                color="none"
                fill={"#0328EC"}
                className="ml-auto"
              />
            </div>
            <div className="w-[90%] h-[55px] shadow border rounded flex items-center mt-3 p-2">
              <Avatar className="rounded-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <h1 className="ml-2 text-xs">Abebe Sintayehu</h1>
                <h1 className="ml-2 text-[10px] text-[#667085]">2 hrs ago</h1>
              </div>
            </div>
            <div className="w-[90%] h-[55px] shadow border rounded flex items-center mt-3 p-2">
              <Avatar className="rounded-full">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <h1 className="ml-2 text-xs">Sew Mehon</h1>
                <h1 className="ml-2 text-[10px] text-[#667085]">4 days ago</h1>
              </div>
            </div>
          </div>
          <div className="col-span-3 border shadow rounded-lg h-full bg-white relative    overflow-hidden">
            <div className="h-[100px] border-b-2 border-[#e2e0e0] flex items-center justify-center relative">
              <div className="flex items-center justify-between w-full">
                <div className="w-1/2 flex items-center">
                  <div className="relative ml-4">
                    <div className="absolute left-0 bottom-0 w-[30px] border shadow h-[30px] flex items-center justify-center bg-[#E4E4E4] rounded-full">
                      <Image
                        src="/assets/carbrands/toyota.png"
                        width={30}
                        height={30}
                        alt="logo"
                      />
                    </div>
                    <Image
                      src="/assets/categories.icons/door.jpg"
                      width={80}
                      height={80}
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h1 className="text-black">Mulu Alem</h1>
                    <h1 className="font-normal text-sm">Executive</h1>
                    <h1 className=" text-[10px] text-black font-thin">
                      #00001234
                    </h1>
                  </div>
                </div>
                <Button className="bg-white border-[#EE5719] text-[#EE5719] shadow border rounded-[30px] flex items-center hover:bg-[#EE5719] hover:text-white px-6 mr-4 ">
                  {" "}
                  Reject
                </Button>
              </div>

              <div className="absolute -bottom-3 bg-[#F2F2F2] rounded-xl border ">
                <h1 className="text-[10px] font-semibold   px-3 py-1">
                  12-01-2024{" "}
                </h1>
              </div>
            </div>
       <div className="w-full h-full   flex flex-col items-center justify-start overflow-auto scroll-css  pb-[170px]">
       <div className="w-[98%] flex items-start justify-start flex-col mt-2">
              <div className="max-w-[70%] min-h-[100px] ml-2 flex items-center relative">
                <Avatar className="rounded-full mb-[100px] border shadow   ">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="ml-2 p-4 bg-[#F2F2F2] rounded-xl rounded-tl-none border shadow">
                  <h1 className="text-xs">
                    Amet minim molit non deserunt ullamco est sit aliqua dolor
                    do amet sint. velit offica consequat duis enim velit mollit
                    exeraction veniam consequat sunt nosrud amet
                    do amet sint. velit offica consequat duis enim velit mollit
                    exeraction veniam consequat sunt nosrud amet
                  </h1>
                </div>
              </div>
            </div>
            
 

            
            <div className="w-[98%] flex items-end justify-center  self-end  flex-col mt-2">
              
              <div className="max-w-[70%] min-h-[100px] mr-2 flex items-center relative">
                <div className="mr-2 p-4 bg-[#FF0000] rounded-xl rounded-tr-none border shadow">
                  <h1 className="text-xs text-white">
                    Amet minim molit non deserunt ullamco est sit aliqua dolor
                    do amet sint. velit offica consequat duis enim velit mollit
                    exeraction veniam consequat sunt nosrud amet
                  </h1>
                </div>
                <Avatar className="rounded-full mb-[100px] border shadow ">
                  <AvatarImage
                    src=""
                    alt="@shadcn"
                  />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="w-[98%] flex items-start justify-start flex-col mt-2">
              <div className="max-w-[70%] min-h-[100px] ml-2 flex items-center relative">
                <Avatar className="rounded-full mb-[100px] border shadow   ">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="ml-2 p-4 bg-[#F2F2F2] rounded-xl rounded-tl-none border shadow">
                  <h1 className="text-xs">
                    Amet minim molit non deserunt ullamco est sit aliqua dolor
                    do amet sint. velit offica consequat duis enim velit mollit
                    exeraction veniam consequat sunt nosrud amet
                    do amet sint. velit offica consequat duis enim velit mollit
                    exeraction veniam consequat sunt nosrud amet
                  </h1>
                </div>
              </div>
            </div>
    
       </div>
            
            <div className=" absolute bottom-0 w-full bg-[#E0E0E0]  h-[50px] flex items-center gap-4 px-4 ">
              <Camera size={16}  color="#6D717A"/>
              <Paperclip size={16} color="#6D717A" />
              <div className="w-[85%] h-[30px] border-b-2 border-[#6D717A]   flex items-center  ml-2  ">
                <Input
                  type="text"
                  className="px-1 h-[20px] border-0 bg-[#E0E0E0] "
                  placeholder="Type here..."
                />
                <Send size={16} color="#6D717A"/>
              </div>
            
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
