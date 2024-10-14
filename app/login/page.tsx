import InputBox_component from "@/app/Shared_Components/InputBox_component";
import { Separator } from "@/components/ui/separator";
import { EyeOff } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
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
        <h1 className="font-bold text-4xl"> SIGN IN</h1>
        <div className="w-[60%] px-4 mt-6">
          <InputBox_component
            type="text"
            placeholder="Email"
            inputStyle="bg-white border-0 "
            lable={null}
          />
          <Separator className="bg-[#6D717A] " />
        </div>
        <div className="w-[60%] px-4 mt-6">
          <div className="flex">
            <InputBox_component
              type="password"
              placeholder="password"
              inputStyle="bg-white border-0 "
              lable={null}
            />
            <EyeOff color="#6D717A" size={18} />
          </div>
          <Separator className="bg-[#6D717A] " />
          <div className="flex items-center p-2 mt-2">
            <Checkbox />
            <h1 className="text-sm ml-2">Remember me</h1>{" "}
          </div>
       
          <Button className="w-full mt-2 rounded"> sign in</Button>
          <Link href="/login/forgotpassword">   <h1 className="text-[#EE5719] text-sm text-center mt-2 "> Forgot Password?</h1></Link>
       
        </div>
      </div>
    </div>
  );
}
