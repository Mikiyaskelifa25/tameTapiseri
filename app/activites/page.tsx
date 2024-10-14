"use client";
import {
  Bell,
  Calendar,
  ChevronLeft,
  FileText,
  Filter,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import React from "react";
import Link from "next/link";

import Calender from "../Shared_Components/Calender";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Sales() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start ">
      <div className="flex w-full h-[50px] items-center mt-2">
        <Link href={"/"} className="flex items-center gap-2 ml-4">
          {" "}
          <ChevronLeft /> <h1 className="font-bold">Activities</h1>
        </Link>

        <div className="w-[300px] overflow-hidden flex items-center h-[38px] ml-20 rounded-[30px] bg-white border shadow">
          <Input
            type="text"
            placeholder="Search anyting here..."
            className="w-[90%] h-[36px] border-0"
          />
          <Search strokeWidth={2} size={16} color="#667085" className="mx-2" />
        </div>

        <div className="border rounded-[6px] flex items-center justify-center ml-6  bg-white h-[30px]">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={null}>
                <Calendar strokeWidth={2} size={16} color="#667085" />
                <h1 className="text-[11px] ml-2 font-bold text-[#667085]">
                  Select Dates
                </h1>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calender />
            </PopoverContent>
          </Popover>
        </div>

        <div className="border rounded-[6px] flex items-center justify-center ml-4  bg-white h-[30px]">
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
      </div>

      <div className="w-1/2 h-full overflow-auto scroll-css mt-2 py-4 bg-white flex items-center justify-start flex-col shadow border rounded-lg">
        <div className="relative flex flex-col border-l-2 border-0 p-3 pb-8 w-[80%]">
          <div>
            <h1>Service Registered: Alem Tsehay</h1>
            <h1 className="text-xs">12 Dec 9:00 PM</h1>
          </div>

          <h1 className="text-xs px-2 mt-2 text-[#89868D]">
            Staff user Solomon Alemahu registered a new service: Alem Tsehay
            under Carpet category, for Toyota car.
          </h1>
          <div className="absolute -left-3 top-0">
            <Bell fill="#6E39CB" color="none" />
          </div>
        </div>
        <div className="relative flex flex-col border-l-2 border-0 p-3 pb-8 w-[80%]">
          <div>
            <h1>New Order #1832412</h1>
            <h1 className="text-xs">12 Dec 9:00 PM</h1>
          </div>

          <h1 className="text-xs px-2 mt-2 text-[#89868D]">
            Customer Abebe Kebede placed an new order request of Door service,
            for Toyota car brand.
          </h1>
          <div className="absolute -left-3 top-0">
            <Smartphone color="#2DCCFF" />
          </div>
        </div>
        <div className="relative flex flex-col border-l-2 border-0 p-3 pb-8 w-[80%]">
          <div>
            <h1>Advance Payment Made Order #4395133</h1>
            <h1 className="text-xs">12 Dec 9:00 PM</h1>
          </div>

          <h1 className="text-xs px-2 mt-2 text-[#89868D]">
            Customer Abebe Kebede placed an new order request of Door service,
            for Toyota car brand.
          </h1>
          <div className="absolute -left-3 top-0">
            <FileText fill="#DECCFE" />
          </div>
        </div>
        <div className="relative flex flex-col border-l-2 border-0 p-3 pb-8 w-[80%]">
          <div>
            <h1>Staff Registered</h1>
            <h1 className="text-xs">12 Dec 9:00 PM</h1>
          </div>

          <h1 className="text-xs px-2 mt-2 text-[#89868D]">
            New staff member, Solomon Alemayehu (+251 91 111 11111) registered
            by Temesgen Tapiseri
          </h1>
          <div className="absolute -left-3 top-0">
            <ShieldCheck fill="#F93131" color="white" />
          </div>
        </div>
        <div className="relative flex flex-col border-l-2 border-0 p-3 pb-8 w-[80%]">
          <div>
            <h1>Staff Registered</h1>
            <h1 className="text-xs">12 Dec 9:00 PM</h1>
          </div>

          <h1 className="text-xs px-2 mt-2 text-[#89868D]">
            New staff member, Solomon Alemayehu (+251 91 111 11111) registered
            by Temesgen Tapiseri
          </h1>
          <div className="absolute -left-3 top-0">
            <ShieldCheck fill="#F93131" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
