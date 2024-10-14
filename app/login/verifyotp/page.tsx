import Image from "next/image";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,

  InputOTPSlot,
} from "@/components/ui/input-otp";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Verify_otp() {
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
      <div className="w-1/2 h-full bg-white flex items-center justify-center flex-col ">
 <div className="px-4 w-[60%]">
 <h1 className="font-bold text-4xl text-start"> SMS Verification</h1>
        <h1 className="font-normal text-sm">
          {" "}
          A message with a six digit verification code has been sent to
          user@email.com / +251*******91
        </h1>
 </div>
        <div className="w-[60%] px-4 mt-6 flex flex-col  justify-center">
          <div className="bg-[#F8F7F7] border rounded-lg shadow pl-3 flex items-center justify-between h-[80px] w-full ">
            <InputOTP maxLength={6} className="border-0  flex items-center justify-center">
              <InputOTPGroup className="border-0 space-x-2">
                <InputOTPSlot index={0} className="bg-[#F3F2F2] border-2 border-gray-400 shadow" />
                <InputOTPSlot index={1}  className="bg-[#F3F2F2] border-2 border-gray-400 shadow"/>
                <InputOTPSlot index={2} className="bg-[#F3F2F2] border-2 border-gray-400 shadow" />
              </InputOTPGroup>
          
              <InputOTPGroup className="border-0 space-x-2">
                <InputOTPSlot index={3} className="bg-[#F3F2F2] border-2  border-gray-400 shadow"/>
                <InputOTPSlot index={4} className="bg-[#F3F2F2] border-2 border-gray-400 shadow"/>
                <InputOTPSlot index={5} className="bg-[#F3F2F2] border-2 border-gray-400 shadow"/>
              </InputOTPGroup>
            </InputOTP>
          </div>
          <h1 className="text-xs font-bold text-[#EE5719] text-center">02:21</h1>
          <Link href={"/login/setpwd"} className="w-full flex items-center mt-2"> <Button className="bg-[#061A48] rounded-xl text-white  w-full">Continue</Button> </Link>
         
        </div>
      </div>
    </div>
  );
}
