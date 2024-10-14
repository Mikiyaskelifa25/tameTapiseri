import InputBox_component from "@/app/Shared_Components/InputBox_component";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Circle,  X } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Set_password() {
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
      <div className="w-1/2 h-full bg-white flex flex-col justify-center p-4">
        <h1 className="font-bold text-2xl"> Set New password</h1>

        <div className="w-full px-4 mt-10 flex items-start justify-center flex-col">
          <h1 className="text-sm">Instruction::</h1>
          <div className="flex items-center mt-2">
            <Check className="h-4 w-4 mr-2" color="#29B213" strokeWidth={6} />
            <h1 className="text-xs text-[#6D717A]">8-32 character</h1>
          </div>
          <div className="flex items-center mt-2">
            <Check className="h-4 w-4 mr-2" color="#29B213" strokeWidth={6} />
            <h1 className="text-xs text-[#6D717A]">One upper case</h1>
          </div>

          <div className="flex items-center mt-2">
            <Check className="h-4 w-4 mr-2" color="#29B213" strokeWidth={6} />
            <h1 className="text-xs text-[#6D717A]">One lower case</h1>
          </div>
          <div className="flex items-center mt-2">
            <X className="h-4 w-4 mr-2" color="red" strokeWidth={6} />
            <h1 className="text-xs text-[#6D717A]">One special character</h1>
          </div>
          <div className="flex items-center mt-2">
            <Circle className="h-4 w-4 mr-2" fill="#29B213" color="none" />
            <h1 className="text-xs text-[#6D717A]">One numeric character</h1>
          </div>
        </div>
        <div className="w-[80%] px-4 mt-6">
          <InputBox_component
            type="password"
            placeholder="New Password"
            inputStyle="bg-white border-0 "
            lable={null}
          />
          <Separator className="bg-[#6D717A] " />
        </div>
        <div className="w-[80%] px-4 mt-6">
          <InputBox_component
            type="password"
            placeholder="Confirm Password"
            inputStyle="bg-white border-0 "
            lable={null}
          />
          <Separator className="bg-[#6D717A] " />
        </div>
        <div className="w-full items-center justify-around flex mt-4 ">
        <Button className="bg-[#061A48] rounded-xl text-white  px-32">Continue</Button>
        </div>
      </div>
    </div>
  );
}
