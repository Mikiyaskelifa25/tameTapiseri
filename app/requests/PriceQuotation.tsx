import React from "react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function PriceQuotation() {
  return (
    <Drawer>
      <DrawerTrigger>
        {" "}
        <Paperclip size={16} color="#6D717A" />
      </DrawerTrigger>
      <DrawerContent className=" flex items-center bg-transparent  border-0 h-[95%]">
        <div className="bg-white mt-2 w-1/2 h-full flex flex-col items-center overflow-auto scroll-css rounded-lg">
          <DrawerHeader className="w-full">
            <DrawerTitle>Price Quotation - # 27346733</DrawerTitle>
            <DrawerDescription className="flex w-full">
              invoce Date{" "}
              <h1 className="font-bold text-black ml-4"> 6 march,2024</h1>
            </DrawerDescription>
          </DrawerHeader>
          <Separator className="w-[95%]" />

          <div className="w-full mt-4 flex p-3 justify-between ">
            <div className="ml-4">
              <h1 className="text-sm font-semibold mb-2">Billed To</h1>
              <h1 className="text-sm font-semibold">Abebe Kebede</h1>
              <h1 className="text-sm font-semibold">Abebe@gmail.com</h1>
              <h1 className="text-sm ">(+251) 91-11-11-11</h1>
            </div>
            <div className="mr-4">
              <h1 className="text-sm font-semibold mb-2">From</h1>
              <h1 className="text-sm font-semibold">Tame Tapiseri</h1>
              <h1 className="text-sm font-semibold">Tametapiseri.com</h1>
              <h1 className="text-sm ">(+251) 91-11-11-11</h1>
            </div>
          </div>

          <div className="w-full mt-4 flex p-3 justify-between ">
            <div className="ml-4">
              <h1 className="text-sm font-semibold mb-2"> Description</h1>
              <h1 className="text-sm font-semibold">Door</h1>
              <h1 className="text-sm ">Toyota Corolla DX</h1>
            </div>
            <div className="">
              <h1 className="text-sm font-semibold mb-2">Quantity</h1>
              <h1 className="text-sm font-semibold">1</h1>
            </div>
            <div className="">
              <h1 className="text-sm font-semibold mb-2">Price</h1>
              <h1 className="text-sm font-semibold">ETB 9,000</h1>
            </div>
            <div className="mr-4">
              <h1 className="text-sm font-semibold mb-2">Amount</h1>
              <h1 className="text-sm font-semibold">ETB 9,000</h1>
            </div>
          </div>
          <Separator className="w-[95%] " />
          <div className="w-full mt-4 flex p-3 justify-end ">
            <div className="mr-4">
              <div className="flex justify-between items-center space-x-20  p-2">
                <h1 className="text-xs font-normal  ">subtotal</h1>
                <h1 className="text-xs font-normal ">ETB 9,000</h1>
              </div>
              <Separator className=" " />
              <div className="flex justify-between items-center space-x-20 mt-2 p-2">
                <h1 className="text-xs font-normal  ">Total excluding tax</h1>
                <h1 className="text-xs font-normal ">ETB 9,000</h1>
              </div>
              <Separator className=" " />
              <div className="flex justify-between items-center space-x-20 mt-2 p-2">
                <h1 className="text-xs font-normal  ">Discount (2%)</h1>
                <h1 className="text-xs font-normal ">ETB 1,800</h1>
              </div>
              <Separator className=" " />
              <div className="flex justify-between items-center space-x-20 mt-2 p-2">
                <h1 className="text-xs font-normal  ">Total</h1>
                <h1 className="text-xs font-normal ">ETB 7,200</h1>
              </div>
              <Separator className=" " />
              <div className="flex justify-between items-center space-x-20 mt-2 p-2">
                <h1 className="text-xs font-bold  ">Amout Due</h1>
                <h1 className="text-xs font-bold ">ETB 7,200</h1>
              </div>
              <Separator className=" " />
              
            </div>
          
          </div>
          <div className="w-full mt-4 flex p-3 items-center ">  
             <p className="text-xs"> This Price Quotation will be valid for only 5 days from quotation date </p>
             </div>
             <div className="w-full mt-4 flex p-3 items-center  justify-between">  
             <p className="text-xs font-thin">#27346733 · ETB 7,200 due 11 March, 2024</p>
             <p className="text-xs font-thin">Page 1 of 1</p>
             </div>

             <div className="bg-[#BFBFBF] h-[60px] w-full flex py-2 justify-center items-center">
             <Button className="bg-white border-[#FF0000] text-[#FF0000] shadow border rounded-[30px] flex items-center hover:bg-[#FF0000] hover:text-white px-6 mr-4 ">
                  {" "}
             

                  cancel
                </Button>
                <Button className="bg-white border-[#29B213] text-[#29B213] shadow border rounded-[30px] flex items-center hover:bg-[#29B213] hover:text-white px-6 mr-4 ">
                  {" "}
                  Send Quotation
                </Button>
            

             </div>
       
        </div>
      </DrawerContent>
    </Drawer>
  );
}
