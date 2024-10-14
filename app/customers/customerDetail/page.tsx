"use client";
import {
  Camera,
  ChevronLeft,
  Circle,
  LockKeyhole,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  SearchIcon,
  Send,
  ShoppingCart,
} from "lucide-react";
import React from "react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import InputBox_component from "../../Shared_Components/InputBox_component";
import RequstUsers from "../../Fake_Data/RequestUsers.json";
export default function Request() {
  return (
    <div className="w-full h-[90%] flex flex-col items-center justify-start ">
      <div className="w-full h-full flex items-start justify-center mt-2   overflow-hidden ">
        <div className="w-[97%] h-full grid grid-cols-7 gap-3 ">
          <div className="flex flex-col   items-center  col-span-2   p-2 ">
            <Link
              href={"/customers"}
              className="flex items-center gap-2   w-full"
            >
              {" "}
              <ChevronLeft /> <h1 className="font-bold">Customer Details</h1>
            </Link>
            <div className="border-[1.5px] shadow w-[95%] h-[90%] mt-4  rounded-[8px] bg-white flex flex-col items-center ">
              <div className=" rounded-[4px] w-full h-[180px] flex items-center flex-col relative">
                <div className="h-[100px] w-[98%] bg-[#8F8F8F] mt-[3px] rounded-[4px]   "></div>

                <Avatar className="rounded-lg  shadow absolute top-[30%] w-[80px] h-[80px] ">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-2  flex flex-col justify-center items-center ">
                  <h1 className="font-semibold text-sm">John Doe</h1>
                  <h1 className="text-[9px] font-semibold text-[#667085] mt-1">
                    @john.doe311
                  </h1>
                </div>
                <div className="absolute bottom-0 h-[1px] w-[90%] bg-[#667085]"></div>
              </div>

              <div className="w-[90%] flex items-center flex-col mt-2">
                <div className="flex items-center p-2 w-full h-[40px] ">
                  <div className="w-[35px] h-[35px] bg-[#F0F1F3] flex items-center justify-center rounded-full">
                    <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full bg-[#E0E2E7]">
                      <LockKeyhole size={16} color="#667085" />
                    </div>
                  </div>

                  <div className="ml-3">
                    <h1 className="text-sm text-[#667085] font-semibold ">
                      {" "}
                      User ID
                    </h1>
                    <h1 className="text-[10px] text-[#1A1C21] font-semibold ">
                      ID-011221
                    </h1>
                  </div>
                </div>
                <div className="flex items-center p-2 w-full h-[40px] ">
                  <div className="w-[35px] h-[35px] bg-[#F0F1F3] flex items-center justify-center rounded-full">
                    <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full bg-[#E0E2E7]">
                      <Mail size={16} color="#667085" />
                    </div>
                  </div>

                  <div className="ml-3">
                    <h1 className="text-sm text-[#667085] font-semibold ">
                      {" "}
                      Email
                    </h1>
                    <h1 className="text-[10px] text-[#1A1C21] font-semibold ">
                      johndoe@mail.com
                    </h1>
                  </div>
                </div>
                <div className="flex items-center p-2 w-full h-[40px] ">
                  <div className="w-[35px] h-[35px] bg-[#F0F1F3] flex items-center justify-center rounded-full">
                    <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full bg-[#E0E2E7]">
                      <Phone size={16} color="#667085" />
                    </div>
                  </div>

                  <div className="ml-3">
                    <h1 className="text-sm text-[#667085] font-semibold ">
                      {" "}
                      Phone number
                    </h1>
                    <h1 className="text-[10px] text-[#1A1C21] font-semibold ">
                      09111111111
                    </h1>
                  </div>
                </div>
                <div className="flex items-center p-2 w-full h-[40px] ">
                  <div className="w-[35px] h-[35px] bg-[#F0F1F3] flex items-center justify-center rounded-full">
                    <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full bg-[#E0E2E7]">
                      <MapPin size={16} color="#667085" />
                    </div>
                  </div>

                  <div className="ml-3">
                    <h1 className="text-sm text-[#667085] font-semibold ">
                      {" "}
                    Address
                    </h1>
                    <h1 className="text-[10px] text-[#1A1C21] font-semibold ">
                       Piassa,Churchil square
                    </h1>
                  </div>
                </div>
                <div className="flex items-center p-2 w-full h-[40px] ">
                  <div className="w-[35px] h-[35px] bg-[#F0F1F3] flex items-center justify-center rounded-full">
                    <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full bg-[#E0E2E7]">
                      <ShoppingCart size={16} color="#667085" />
                    </div>
                  </div>

                  <div className="ml-3">
                    <h1 className="text-sm text-[#667085] font-semibold ">
                      {" "}
                      Last Transaction
                    </h1>
                    <h1 className="text-[10px] text-[#1A1C21] font-semibold ">
                     12 December 2023
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 border shadow rounded-lg h-full bg-white flex flex-col items-center relative">
            <div className="flex items-center space-x-2 self-start ml-2 mt-2 h-[40px] ">
              <div className="w-[85%] h-full border-2 border-[#e2e0e0] border-t-0  border-r-0  border-l-0  flex items-center  ml-2  ">
                <SearchIcon
                  strokeWidth={2}
                  size={18}
                  color="#667085"
                  className=""
                />

                <InputBox_component
                  type="text"
                  inputStyle="px-1 h-[30px] border-0"
                  placeholder="Find request"
                  lable={null}
                />
              </div>
            </div>
            {RequstUsers.map((users, usersIndex) => {
              return (
                <div
                  className="w-[90%] h-[55px] shadow border rounded flex items-center mt-3 p-2"
                  key={usersIndex}
                >
                  <Avatar className="rounded-full">
                    <AvatarImage src={users.src} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="ml-2">
                    <h1 className="ml-2 text-xs">{users.name}</h1>
                    <h1 className="ml-2 text-[10px] text-[#667085]">
                      {users.lastTime}
                    </h1>
                  </div>
                  {users.online && (
                    <Circle
                      size={10}
                      color="none"
                      fill={"#0328EC"}
                      className="ml-auto"
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="col-span-3   rounded-lg h-full bg-white relative border-b-2   overflow-hidden">
            <div className="h-[100px] border-b-2 border-[#e2e0e0] flex items-center justify-center relative">
                <div className="absolute top-0 h-[90px] w-full bg-[#F9F9F9] z-0"></div>
              <div className="flex items-center justify-between w-full">
                <div className="w-1/2 flex items-center z-10">
                  <div className="relative ml-4">
                    <div className="absolute left-0 bottom-0 w-[30px] border shadow h-[30px] flex items-center justify-center bg-[#E4E4E4] rounded-full">
                      <Image
                        src="/assets/carbrands/bmw.png"
                        width={30}
                        height={30}
                        alt="logo"
                      />
                    </div>
                    <Image
                      src="/assets/categories.icons/gear.webp"
                      width={80}
                      height={80}
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <h1 className="text-black font-bold">Gear</h1>
                   
              
                  </div>
                </div>
                <Button className="z-10 bg-white border-[#EE5719] text-[#EE5719] shadow border rounded-[30px] flex items-center hover:bg-[#EE5719] hover:text-white px-6 mr-4 ">
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
                      do amet sint. velit offica consequat duis enim velit
                      mollit exeraction veniam consequat sunt nosrud amet do
                      amet sint. velit offica consequat duis enim velit mollit
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
                      do amet sint. velit offica consequat duis enim velit
                      mollit exeraction veniam consequat sunt nosrud amet
                    </h1>
                  </div>
                  <Avatar className="rounded-full mb-[100px] border shadow ">
                    <AvatarImage src="" alt="@shadcn" />
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
                      do amet sint. velit offica consequat duis enim velit
                      mollit exeraction veniam consequat sunt nosrud amet do
                      amet sint. velit offica consequat duis enim velit mollit
                      exeraction veniam consequat sunt nosrud amet
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className=" absolute bottom-0 w-full bg-[#E0E0E0]  h-[50px] flex items-center gap-4 px-4 ">
              <Camera size={16} color="#6D717A" />
              <Paperclip size={16} color="#6D717A" />
              <div className="w-[85%] h-[30px] border-b-2 border-[#6D717A]   flex items-center  ml-2  ">
                <Input
                  type="text"
                  className="px-1 h-[20px] border-0 bg-[#E0E0E0] "
                  placeholder="Type here..."
                />
                <Send size={16} color="#6D717A" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
