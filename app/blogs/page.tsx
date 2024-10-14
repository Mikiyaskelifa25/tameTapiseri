"use client";

import Blogs_sheet from "./Blog_sheet";
import { ChevronLeft, Filter, Search } from "lucide-react";
import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Cards from "../Shared_Components/Cards";

import blogsdata from "../Fake_Data/blogsdata.json";
import InputBox_component from "../Shared_Components/InputBox_component";
import { RadioGroup } from "@/components/ui/radio-group";
import Radiobox_components from "../Shared_Components/Radiobox_components";

export default function Blogs() {
  return (
    <div className="w-full  flex flex-col items-center justify-start ">
      <div className="flex w-full h-[50px] items-center mt-2 ">
        <Link href={"/"} className="flex items-center gap-2 ml-4">
          {" "}
          <ChevronLeft /> <h1 className="font-bold">Blogs</h1>
        </Link>

        <div className="w-[300px] overflow-hidden flex items-center h-[38px] ml-20 rounded-[30px] bg-white border shadow">
      
          <InputBox_component type="text" placeholder="Search anyting here..." inputStyle="w-[90%] h-[36px] border-0" lable={null}/>
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
            <PopoverContent
              className="w-[250px] p-3 flex flex-col  items-center justify-center"
              align="start"
            >
              <div className=" w-full flex items-center justify-between px-2">
                <h1 className="font-semibold">Filter </h1>
                <h1 className="px-1 bg-red-500 text-white rounded"> clear</h1>
              </div>
              <div className="flex mt-2 p-2 w-full justify-between">
                <div>
                  <h1 className="text-sm my-2"> Status</h1>
                  <RadioGroup defaultValue="one">
                    <Radiobox_components lable="Published" id="one" />
                    <Radiobox_components lable="Unpublished" id="two" />
                  </RadioGroup>
                </div>
       
              </div>
            </PopoverContent>
          </Popover>
        </div>
       <Blogs_sheet/>
      </div>
      <div className="w-[98%] h-full  bg-white border rounded-xl shadow grid p-2  mt-2  no-scrollbar">
        <div className="grid grid-cols-4 full gap-4 mt-4 ">
          {blogsdata.map((items, index) => {
            return <Cards blog={items} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
