"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import { AlignLeft, Bold, Calendar, ChevronLeft, Filter, Italic, List, ListOrdered, Plus, Search, SpellCheck2, Underline } from "lucide-react";
import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Cards from "../Shared_Components/Cards";
import Calender from "../Shared_Components/Calender";

const Requests = [
  {
    discription:
      "The Art of Car Upholstery How Custom Interiors Transform Your Vehicle",
    title: "Interior Design",
    Date: "Sep 01 2024",
    Available: true,
    src: "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_1280.jpg",
  },
  {
    discription:
      "leather vs Fabric: Choosing the Right Upholstery for yoyr car",
    title: "Fabric",
    Date: "Sep 01 2024",
    Available: true,
    src: "https://plus.unsplash.com/premium_photo-1661717332817-7e668ac1c6fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2hlZWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    discription:
      "The Art of Car Upholstery How Custom Interiors Transform Your Vehicle",
    title: "Interior",
    Date: "Sep 01 2024",
    Available: false,
    src: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhciUyMHRhcGlzZXJpfGVufDB8fDB8fHww",
  },
  {
    discription: " Car Upholstery How Custom Interiors Transform Your Vehicle",
    title: "Interior Design",
    Date: "Sep 01 2024",
    Available: true,
    src: "https://images.unsplash.com/photo-1714348938110-d3692bc3716a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMGRvb3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    discription: " Upholstery How Custom Interiors Transform Your Vehicle",
    title: "Interior Design",
    Date: "Sep 01 2024",
    Available: false,
    src: "https://media.istockphoto.com/id/451803655/photo/car-waxing.webp?a=1&b=1&s=612x612&w=0&k=20&c=JPunPg3eSeswXl0mOHKixTpvpN5lbZuie7xqrPYy2sM=",
  },
];
export default function Blogs() {
  return (
    <div className="w-full  flex flex-col items-center justify-start ">
      <div className="flex w-full h-[50px] items-center mt-2 ">
        <Link href={"/"} className="flex items-center gap-2 ml-4">
          {" "}
          <ChevronLeft /> <h1 className="font-bold">Blogs</h1>
        </Link>

        <div className="w-[300px] overflow-hidden flex items-center h-[38px] ml-20 rounded-[30px] bg-white border shadow">
          <Input
            type="text"
            placeholder="Search anyting here..."
            className="w-[90%] h-[36px] border-0"
          />
          <Search strokeWidth={2} size={16} color="#667085" className="mx-2" />
        </div>

        <div className="border rounded-[6px] flex items-center justify-center ml-8  bg-white h-[30px]">
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

        <Sheet>
          <SheetTrigger className="ml-6 absolute right-10 bg-[#29B213] flex py-[5px] px-2 rounded">
            <Plus strokeWidth={2} size={16} color="white" />
            <h1 className="text-[11px] ml-2 font-bold text-white">Add Blog</h1>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Blog Information</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="w-full flex flex-col mt-2">
              <div className="w-full h-[300px] relative bg-[#F9F9FC] border shadow  rounded-lg mt-4 flex flex-col items-center justify-center">
                <h1 className="text-xs">
                  {" "}
                  Drag and drop image here, or click change image
                </h1>
                <Button
                  className="mt-4 bg-[#DEDEFA] text-[#133FB2]"
                  variant={null}
                >
                  {" "}
                  Add image
                </Button>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">Blog Title</Label>
                <Input
                  type="text"
                  placeholder="title"
                  className="bg-[#F9F9FC]  shadow"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="email">Blog Content</Label>
                  <div className="w-full bg-[#F9F9FC] shadow flex flex-col border rounded-md">
                    <div className="flex w-full justify-around p-2 mt-1">
                     <Bold size={16}/>
                    <Italic size={16}/>
                    <Underline size={16}/>
                    <SpellCheck2 size={16}/>
                    <List size={16}/>
                    <ListOrdered size={16}/>
                    <AlignLeft size={16}/>
                    </div>
               

                  <Textarea
                    placeholder=""
                    id="message"
                    className="border-none min-h-[190px] "
                  />
                  </div>
                
                </div>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">
                  <h1 className="text-sm">Tags</h1>
                </Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="tag"
                  className="bg-[#F9F9FC] shadow"
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">
                  <h1 className="text-sm">Schedule Blog</h1>
                </Label>
                
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"} className="flex justify-start">
                <Calendar strokeWidth={2} size={16} color="#667085" />
                <h1 className="text-[11px] ml-2 font-bold text-[#667085]">
                  Select Dates
                </h1>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              <Calender />
            </PopoverContent>
          </Popover>
        
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">
                  <h1 className="text-sm">External Links</h1>
                </Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="url"
                  className="bg-[#F9F9FC] shadow"
                />
              </div>

              <div className="flex justify-center items-center gap-6 mt-6 w-full">
                {" "}
                <Button className=" bg-red-600 text-white" variant={null}>
                  {" "}
                  Cancel
                </Button>{" "}
                <Button className=" bg-[#133FB2] text-white" variant={null}>
                  {" "}
                  Publish
                </Button>{" "}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-[98%] h-full  bg-white border rounded-xl shadow grid p-2  mt-2  no-scrollbar">
   

        <div className="grid grid-cols-4 full gap-4 mt-4 ">
          {Requests.map((items, index) => {
            return <Cards blog={items} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
