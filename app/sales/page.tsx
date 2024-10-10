"use client"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Dot,
  FileText,
  Filter,
  ScrollText,
  Search,
  Upload,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import ReactPaginate from 'react-paginate';
import Calender from "../Shared_Components/Calender";
import { Input } from "@/components/ui/input";
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

const Requests = [
  {
    phonenumber: "+25195846852",
    name: "Teme tapiseri",
    Date: "Sep 01 2024",
    amount: "ETB 2,568",
    Status: "Paid",
    servicename: "Taitu",
    bank: "#4556666885",
    refno: "FT556656565",
  },
  {
    phonenumber: "+2511111111",
    name: "David",
    Date: "Sep 01 2024",
    amount: "ETB 2,568",
    Status: "Paid",
    servicename: "Masqel",
    bank: "#455885",
    refno: "FT5565",
  },
  {
    phonenumber: "+2511555",
    name: "Aman",
    Date: "Sep 01 2024",
    amount: "ETB 2,568",
    Status: "Paid",
    servicename: "Wub Alem",
    bank: "#4556666885",
    refno: "FT556656757565",
  },
  {
    phonenumber: "+25195846852",
    name: "Teme tapiseri",
    Date: "Sep 01 2024",
    amount: "ETB 2,568",
    Status: "Paid",
    servicename: "Taitu",
    bank: "#4556666885",
    refno: "FT556656565",
  },
  {
    phonenumber: "+2511111111",
    name: "David",
    Date: "Sep 01 2024",
    amount: "ETB 2,568",
    Status: "Paid",
    servicename: "Masqel",
    bank: "#455885",
    refno: "FT5565",
  },
  {
    phonenumber: "+25195846852",
    name: "Teme tapiseri",
    Date: "Sep 01 2024",
    amount: "ETB 2,568",
    Status: "Paid",
    servicename: "Taitu",
    bank: "#4556666885",
    refno: "FT556656565",
  },
];
export default function Sales() {

  return (
    <div className="w-full h-full flex flex-col items-center justify-start ">
      <div className="flex w-full h-[50px] items-center mt-2">
        <Link href={"/"} className="flex items-center gap-2 ml-4">
          {" "}
          <ChevronLeft /> <h1 className="font-bold">Sales</h1>
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
      <div className="w-full h-full flex items-start justify-center mt-2   overflow-auto ">
        <Table className="w-[95%] border rounded-[15px] shadow bg-white">
          <TableHeader>
            <TableRow className="  ">
              <TableHead className="text-[#333843] font-semibold">
                Customer
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Service Name
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Bank
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Ref Number
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Amount
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Status
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full">
            {Requests.map((Requests) => (
              <TableRow key={Requests.phonenumber}>
                <TableCell className="flex items-center ">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    {Requests.name}
                    <h1 className="text-[12px] text-[#667085]">
                      {Requests.phonenumber}
                    </h1>
                  </div>
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
                  <h1 className="text-[#89868D] flex items-center">
                    <Dot size={35} className="text-green-500 " />
                    {Requests.Status}
                  </h1>
                </TableCell>
                <TableCell>
                  <h1 className="text-[#89868D] font-normal text-xs">
                    {Requests.Date}
                  </h1>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
              <TableCell colSpan={3} className=" ">
              <ReactPaginate
        breakLabel={<h1 className="font-bold bg-[#DEDEFA] text-[#5C59E7] rounded-[5px] mx-1 w-[30px] h-[30px] flex items-center justify-center">...</h1>}
        nextLabel={<h1 className=" bg-[#DEDEFA] text-[#5C59E7] rounded-[5px] mx-1 w-[30px] h-[30px] flex items-center justify-center"> <ChevronRight size={20}/> </h1>}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        pageCount={15}
        previousLabel={<h1 className="bg-[#DEDEFA] text-[#5C59E7] rounded-[5px] mx-1 w-[30px] h-[30px] flex items-center justify-center"> <ChevronLeft size={20}/> </h1>}
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
