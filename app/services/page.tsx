"use client";
import { Input } from "@/components/ui/input";

import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Filter,
  Pencil,
  ScrollText,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { Switch } from "@/components/ui/switch";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Table,
  TableFooter,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ServiceSheet from "./ServiceSheet";
import serviceTable from "../Fake_Data/serviceTable.json";
import Check_Box from "../Shared_Components/Checkbox";

export default function Services() {
  return (
    <div className="w-full h-[90%] flex flex-col items-center justify-start ">
      <div className="flex w-full h-[50px] items-center mt-2 ">
        <Link href={"/"} className="flex items-center gap-2 ml-4">
          {" "}
          <ChevronLeft /> <h1 className="font-bold">Services</h1>
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

        <ServiceSheet />
      </div>
      <div className="w-full h-full flex items-start justify-center mt-2   overflow-auto ">
        <Table className="w-[95%] border rounded-[15px] shadow bg-white">
          <TableHeader>
            <TableRow className="  ">
              <TableHead className="text-[#333843] font-semibold">
                Service Name
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Service Code
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Case
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Brand
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Car Model
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Status
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full">
            {serviceTable.map((Requests) => (
              <TableRow key={Requests.phonenumber}>
                <TableCell className="flex items-center ">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">{Requests.name}</div>
                </TableCell>
                <TableCell>
                  <h1 className="text-[#89868D] text-xs">
                    {Requests.servicename}
                  </h1>
                </TableCell>
                <TableCell>
                  <h1 className="text-[#89868D] text-xs">{Requests.bank}</h1>
                </TableCell>
                <TableCell>
                  <h1 className="text-[#89868D] text-xs">{Requests.refno}</h1>
                </TableCell>
                <TableCell>
                  <h1 className="text-[#89868D] text-xs">{Requests.amount}</h1>
                </TableCell>
                <TableCell>
                  <Switch className="bg-[#2663EB]" />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {" "}
                    <Pencil size={16} color="#667085" />{" "}
                    <Trash2 size={16} color="#667085" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
              <TableCell colSpan={3} className=" ">
                <ReactPaginate
                  breakLabel={
                    <h1 className="font-bold bg-[#DEDEFA] text-[#5C59E7] rounded-[5px] mx-1 w-[30px] h-[30px] flex items-center justify-center">
                      ...
                    </h1>
                  }
                  nextLabel={
                    <h1 className=" bg-[#DEDEFA] text-[#5C59E7] rounded-[5px] mx-1 w-[30px] h-[30px] flex items-center justify-center">
                      {" "}
                      <ChevronRight size={20} />{" "}
                    </h1>
                  }
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={3}
                  pageCount={5}
                  previousLabel={
                    <h1 className="bg-[#DEDEFA] text-[#5C59E7] rounded-[5px] mx-1 w-[30px] h-[30px] flex items-center justify-center">
                      {" "}
                      <ChevronLeft size={20} />{" "}
                    </h1>
                  }
                  renderOnZeroPageCount={null}
                  className="flex items-center justify-center max-w-full"
                  pageLinkClassName="font-semibold  bg-[#DEDEFA] text-[#5C59E7] rounded-[5px] mx-1 w-[30px] h-[30px] flex items-center justify-center"
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
