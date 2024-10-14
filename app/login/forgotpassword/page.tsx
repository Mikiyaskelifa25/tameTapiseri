import InputBox_component from "@/app/Shared_Components/InputBox_component";
import { Separator } from "@/components/ui/separator";
import {  MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import Link from "next/link";

export default function login() {
  return (
    <div className="w-full h-full flex z-50">
      <div className="w-1/2 h-full bg-[#D3CFCA] flex items-center justify-center">
        <Image
          src="/assets/categories.icons/chair.jpg"
          width={100}
          height={100}
          alt="login"
        />
      </div>
      <div className="w-1/2 h-full bg-white flex items-center flex-col justify-center">
        <h1 className="font-bold text-4xl"> Forgot password?</h1>

        <div className="w-[60%] px-4 mt-6">
          <h1 className="font-bold text-sm"> Choose how you want to log in</h1>
          <div className="bg-[#F8F7F7] border rounded-lg shadow pl-3 flex items-center justify-between h-[80px] w-full ">
            <div className="flex flex-col">
              <InputBox_component
                type="text"
                placeholder="Email"
                inputStyle="bg-transparent border-0 "
                lable={"Send an email to"}
              />
              <Separator className="bg-[#6D717A] " />
            </div>
            <div className="h-[80px] w-[60px] px-2 flex items-center justify-center rounded-r-lg   bg-[#D9D9D9]">
              <MoveRight />
            </div>
          </div>
        </div>
        <div className="w-[60%] px-4 mt-6">
          
          <div className="bg-[#F8F7F7] border rounded-lg shadow pl-3 flex items-center justify-between h-[80px] w-full ">
            <div className="flex flex-col">
              <InputBox_component
                type="number"
                placeholder="Phone number"
                inputStyle="bg-transparent border-0 "
                lable={"Send a message to"}
              />
              <Separator className="bg-[#6D717A] " />
            </div>
            <div className="h-[80px] w-[60px] px-2 flex items-center justify-center rounded-r-lg   bg-[#D9D9D9]">
             <Link href={"/login/verifyotp"} ><MoveRight /></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
