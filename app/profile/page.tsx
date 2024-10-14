import { Check, ChevronLeft, Circle, Save, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import InputBox_component from "../Shared_Components/InputBox_component";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
export default function Profile() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <div className="flex w-full h-[50px] items-center ">
        <Link href={"/"} className="flex items-center gap-2 ml-4">
          {" "}
          <ChevronLeft /> <h1 className="font-bold">Profile</h1>
        </Link>
      </div>

      <div className="w-[90%] h-full flex items-center justify-center space-x-4 ">
        <div className="w-[30%] min-h-[90%] bg-white flex flex-col items-center justify-start border shadow rounded-[20px] ">
          <div className="w-full px-4 mt-3">
            <h1>Change Password</h1>
          </div>
          <div className="w-full px-4 mt-6">
            <InputBox_component
              type="password"
              placeholder="Enter Current Password"
              inputStyle="bg-white border-0 "
              lable={null}
            />
            <Separator className="bg-[#6D717A] " />
          </div>

          <div className="w-full px-4 mt-20 flex items-start justify-center flex-col">
            <h1 className="text-sm">Criteria:</h1>
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
              <Circle className="h-4 w-4 mr-2" fill="#29B213" color="none"  />
              <h1 className="text-xs text-[#6D717A]">One numeric character</h1>
            </div>
          </div>
          <div className="w-full px-4 mt-6">
            <InputBox_component
              type="password"
              placeholder="New Password"
              inputStyle="bg-white border-0 "
              lable={null}
            />
            <Separator className="bg-[#6D717A] " />
          </div>
          <div className="w-full px-4 mt-6">
            <InputBox_component
              type="password"
              placeholder="Confirm Password"
              inputStyle="bg-white border-0 "
              lable={null}
            />
            <Separator className="bg-[#6D717A] " />
          </div>
          <div className="w-full items-center justify-around flex mt-4 py-4 ">
            <Button className="bg-white border-[#29B213] text-[#29B213] shadow border rounded-[30px] flex items-center hover:bg-[#29B213] hover:text-white px-6  ">
              <X className="mr-2" />
              Cancel
            </Button>
            <Button className="bg-[#5C59E8]  text-white shadow border rounded-[30px] flex items-center   px-6 mr-4 ">
              <Save color="white" className="mr-2" />
              Update Password
            </Button>
          </div>


        </div>
        <div className="w-1/2 min-h-full bg-white flex items-center flex-col justify-start border shadow overflow-auto scroll-css  rounded-[20px]">
          <div className=" rounded-[20px] w-full h-[200px] flex items-center flex-col relative">
            <div className="h-[120px] w-full bg-[#061A48] rounded-[20px]   "></div>

            <Avatar className="rounded-lg  shadow absolute top-[35%] w-[90px] h-[90px] ">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="absolute top-2  flex flex-col justify-center items-center ">
              <h1 className="font-bold text-xl text-white">
                Temesgen Tapiseri
              </h1>
            </div>
          </div>
          <div className="w-full px-6">
            <h1>Personal Information</h1>
          </div>
          <div className="w-full px-6 mt-4 ">
            <InputBox_component
              type="text"
              placeholder="Name"
              inputStyle="bg-[#F9F9FC] shadow mt-2"
              lable="Full Name"
            />
            <InputBox_component
              type="number"
              placeholder="0911"
              inputStyle="bg-[#F9F9FC] shadow mt-2"
              lable="Phone Number"
            />
            <InputBox_component
              type="text"
              placeholder="Email"
              inputStyle="bg-[#F9F9FC] shadow mt-2"
              lable="Email"
            />
          </div>
          <div className="w-full items-center justify-center flex mt-4 py-4">
            <Button className="bg-white border-[#29B213] text-[#29B213] shadow border rounded-[30px] flex items-center hover:bg-[#29B213] hover:text-white px-6 mr-4 ">
              <X className="mr-2" />
              Cancel
            </Button>
            <Button className="bg-[#5C59E8]  text-white shadow border rounded-[30px] flex items-center   px-6 mr-4 ">
              <Save color="white" className="mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
