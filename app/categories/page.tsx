import React from "react";
import Link from "next/link";
import { ChevronLeft, EllipsisVertical, Pencil, SearchIcon, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Filter, Search, ScrollText, Upload, FileText } from "lucide-react";
import Image from "next/image";
import Check_Box from "../Shared_Components/Checkbox";


export default function page() {
  return (
    <div className={"w-full h-[90%] flex flex-col items-center justify-start"}>
      <div className="grid grid-cols-4 grid-rows-7 mt-2 h-[96%] w-[96%] ">
        <div className="flex w-full h-[50px] items-center mt-2 col-span-3 ">
          <Link href={"/"} className="flex items-center gap-2 ml-4">
            {" "}
            <ChevronLeft /> <h1 className="font-bold">Categories</h1>
          </Link>

          <div className="w-[300px] overflow-hidden flex items-center h-[38px] ml-20 rounded-[30px] bg-white border shadow">
            <Input
              type="text"
              placeholder="Search anyting here..."
              className="w-[90%] h-[36px] border-0"
            />
            <Search
              strokeWidth={2}
              size={16}
              color="#667085"
              className="mx-2"
            />
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
              className="w-[200px] p-3 flex flex-col  items-center justify-center"
              align="start"
            >
              <div className=" w-full flex items-center justify-between px-2">
                <h1 className="font-semibold">Filter </h1>
                <h1 className="px-1 bg-red-500 text-white rounded"> clear</h1>
              </div>
              <div className="flex mt-2 p-2 w-full justify-between">
           
                <div className="space-y-2">
                <h1 className="text-sm my-2 "> Category</h1>
                  <Check_Box lable="Door" />
                  <Check_Box lable="Chair" />
                  <Check_Box lable="Floor" />
                  <Check_Box lable="Roof" />
                  <Check_Box lable="Gear" />
                  <Check_Box lable="Steering Wheel" />
                </div>
              </div>
            </PopoverContent>
            </Popover>
          </div>
          <div className="border rounded-[6px] flex items-center justify-center ml-40  bg-[#DEDEFA] h-[30px]">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={null}>
                  <Upload strokeWidth={2} size={16} color="#5C59E8" />
                  <h1 className="text-[11px] ml-2 font-bold text-[#5C59E8]">
                    Export
                  </h1>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="flex flex-col p-2">
                  <h1 className="text-green-500 text-[12px] flex items-center">
                    <ScrollText size={14} className="mr-1" /> Export as Excel
                  </h1>
                  <h1 className="text-red-500 text-[12px] flex items-center ">
                    <FileText size={14} className="mr-1" /> Export as PDF
                  </h1>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="row-span-7 pb-6 border rounded-[8px] flex flex-col items-center justify-start ml-8  bg-white shadow h-full overflow-auto scroll-css">
          <div className="flex items-center space-x-2 self-start ml-2 mt-2 h-[40px] w-[90%] ">
            <div className="w-[95%] h-full border-2 border-[#e2e0e0] border-t-0  border-r-0  border-l-0  flex items-center  ml-2  ">
              <SearchIcon
                strokeWidth={2}
                size={18}
                color="#667085"
                className=""
              />

              <Input
                type="text"
                className="px-1 h-[30px] border-0 text-xs"
                placeholder="Find Car brand"
              />
            </div>
          </div>
          <div className="min-h-[70px] border-2 w-[95%] mt-2 rounded-lg flex items-center space-x-4">
            <Image
              src="/assets/carbrands/bmw.png"
              width={65}
              height={65}
              alt="car brand"
              className="ml-2"
            />
            <h1 className="font-bold text-sm ml-2">BMW</h1>
          </div>
          <div className="min-h-[70px] border-2 w-[95%] mt-2 rounded-lg flex items-center space-x-4">
            <Image
              src="/assets/carbrands/ford.png"
              width={65}
              height={65}
              alt="car brand"
              className="ml-2"
            />
            <h1 className="font-bold text-sm ml-2">FORD</h1>
          </div>

          <div className="min-h-[70px] border-2 w-[95%] mt-2 rounded-lg flex items-center space-x-4">
            <Image
              src="/assets/carbrands/honda.png"
              width={65}
              height={65}
              alt="car brand"
              className="ml-2"
            />
            <h1 className="font-bold text-sm ml-2">HONDA</h1>
          </div>

          <div className="min-h-[70px] border-2 w-[95%] mt-2 rounded-lg flex items-center space-x-4">
            <Image
              src="/assets/carbrands/jeep.png"
              width={65}
              height={65}
              alt="car brand"
              className="ml-2"
            />
            <h1 className="font-bold text-sm ml-2">JEEP</h1>
          </div>

          <div className="min-h-[70px] border-2 w-[95%] mt-2 rounded-lg flex items-center space-x-4">
            <Image
              src="/assets/carbrands/nissan.png"
              width={65}
              height={65}
              alt="car brand"
              className="ml-2"
            />
            <h1 className="font-bold text-sm ml-2">NISSAN</h1>
          </div>
          <div className="min-h-[70px] border-2 w-[95%] mt-2 rounded-lg flex items-center space-x-4">
            <Image
              src="/assets/carbrands/toyota.png"
              width={65}
              height={65}
              alt="car brand"
              className="ml-2"
            />
            <h1 className="font-bold text-sm ml-2">TOYOTA</h1>
          </div>
          <div className="min-h-[70px] border-2 w-[95%] mt-2 rounded-lg flex items-center space-x-4">
            <Image
              src="/assets/carbrands/LandRover.jpg"
              width={65}
              height={65}
              alt="car brand"
              className="ml-2"
            />
            <h1 className="font-bold text-sm ml-2">LAND ROVER</h1>
          </div>
        </div>

        <div className="row-span-6 col-span-3 bg-white border shadow rounded-[8px] grid grid-cols-3 h-full w-full items-start gap-6 p-4 ">
          <div className="flex items-center flex-col justify-center border shadow rounded min-h-[150px] relative  pb-2">
            <div className="flex items-center gap-2 w-[80%]  border-b-[1.5px] ">
              <Image
                src="/assets/categories.icons/chair.jpg"
                width={100}
                height={100}
                alt="car brand"
                className=""
              />
              <h1 className="font-bold line-clamp-1">CHAIR</h1>
            </div>

            <div className="w-[80%] flex justify-between items-center mt-4">
              <div>
                <h1 className="text-xs">10</h1>
                <h1 className="text-[10px] text-[#89868D]">Sales</h1>
              </div>

              <div>
                <h1 className="text-xs">02.08.22</h1>
                <h1 className="text-[10px] text-[#89868D]">Register Date</h1>
              </div>
            </div>
            <div className="absolute right-2 top-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={null}>
                  <EllipsisVertical color="#8F8F8F" size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" align="end">
                <div className="flex items-center ">
                  {" "}
                  <Pencil color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Edit
                  </h1>
                </div>
                <div className="flex items-center ">
                  {" "}
                  <Trash2 color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Remove
                  </h1>
                </div>
              </PopoverContent>
            </Popover>
            </div>
        
          </div>
          <div className="flex items-center flex-col justify-center border shadow rounded min-h-[150px] relative  pb-2">
            <div className="flex items-center gap-2 w-[80%]  border-b-[1.5px] ">
              <Image
                src="/assets/categories.icons/wheel1.jpg"
                width={100}
                height={100}
                alt="car brand"
                className=""
              />
              <h1 className="font-bold line-clamp-2 uppercase">Steering Weel</h1>
            </div>

            <div className="w-[80%] flex justify-between items-center mt-4">
              <div>
                <h1 className="text-xs">10</h1>
                <h1 className="text-[10px] text-[#89868D]">Sales</h1>
              </div>

              <div>
                <h1 className="text-xs">02.08.22</h1>
                <h1 className="text-[10px] text-[#89868D]">Register Date</h1>
              </div>
            </div>
            <div className="absolute right-2 top-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={null}>
                  <EllipsisVertical color="#8F8F8F" size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" align="end">
                <div className="flex items-center ">
                  {" "}
                  <Pencil color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Edit
                  </h1>
                </div>
                <div className="flex items-center ">
                  {" "}
                  <Trash2 color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Remove
                  </h1>
                </div>
              </PopoverContent>
            </Popover>
            </div>
        
          </div>
          <div className="flex items-center flex-col justify-center border shadow rounded min-h-[150px] relative pb-2 ">
            <div className="flex items-center gap-2 w-[80%]  border-b-[1.5px] ">
              <Image
                src="/assets/categories.icons/gear.webp"
                width={100}
                height={100}
                alt="car brand"
                className=""
              />
              <h1 className="font-bold uppercase">GEar</h1>
            </div>

            <div className="w-[80%] flex justify-between items-center mt-4">
              <div>
                <h1 className="text-xs">10</h1>
                <h1 className="text-[10px] text-[#89868D]">Sales</h1>
              </div>

              <div>
                <h1 className="text-xs">02.08.22</h1>
                <h1 className="text-[10px] text-[#89868D]">Register Date</h1>
              </div>
            </div>
            <div className="absolute right-2 top-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={null}>
                  <EllipsisVertical color="#8F8F8F" size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" align="end">
                <div className="flex items-center ">
                  {" "}
                  <Pencil color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Edit
                  </h1>
                </div>
                <div className="flex items-center ">
                  {" "}
                  <Trash2 color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Remove
                  </h1>
                </div>
              </PopoverContent>
            </Popover>
            </div>
        
          </div>
          <div className="flex items-center flex-col justify-center border shadow rounded min-h-[150px] relative pb-2 ">
            <div className="flex items-center gap-2 w-[80%]  border-b-[1.5px] ">
              <Image
                src="/assets/categories.icons/door.jpg"
                width={100}
                height={100}
                alt="car brand"
                className=""
              />
              <h1 className="font-bold uppercase">Door</h1>
            </div>

            <div className="w-[80%] flex justify-between items-center mt-4">
              <div>
                <h1 className="text-xs">10</h1>
                <h1 className="text-[10px] text-[#89868D]">Sales</h1>
              </div>

              <div>
                <h1 className="text-xs">02.08.22</h1>
                <h1 className="text-[10px] text-[#89868D]">Register Date</h1>
              </div>
            </div>
            <div className="absolute right-2 top-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={null}>
                  <EllipsisVertical color="#8F8F8F" size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" align="end">
                <div className="flex items-center ">
                  {" "}
                  <Pencil color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Edit
                  </h1>
                </div>
                <div className="flex items-center ">
                  {" "}
                  <Trash2 color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Remove
                  </h1>
                </div>
              </PopoverContent>
            </Popover>
            </div>
        
          </div>
          <div className="flex items-center flex-col justify-center border shadow rounded min-h-[150px] relative pb-2 ">
            <div className="flex items-center gap-2 w-[80%]  border-b-[1.5px] ">
              <Image
                src="/assets/categories.icons/floor.webp"
                width={100}
                height={100}
                alt="car brand"
                className=""
              />
              <h1 className="font-bold uppercase">Floor</h1>
            </div>

            <div className="w-[80%] flex justify-between items-center mt-4">
              <div>
                <h1 className="text-xs">10</h1>
                <h1 className="text-[10px] text-[#89868D]">Sales</h1>
              </div>

              <div>
                <h1 className="text-xs">02.08.22</h1>
                <h1 className="text-[10px] text-[#89868D]">Register Date</h1>
              </div>
            </div>
            <div className="absolute right-2 top-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={null}>
                  <EllipsisVertical color="#8F8F8F" size={20} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" align="end">
                <div className="flex items-center ">
                  {" "}
                  <Pencil color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Edit
                  </h1>
                </div>
                <div className="flex items-center ">
                  {" "}
                  <Trash2 color="#8F8F8F" size={15} />{" "}
                  <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                    Remove
                  </h1>
                </div>
              </PopoverContent>
            </Popover>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
}
