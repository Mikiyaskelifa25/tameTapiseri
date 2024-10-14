"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Calendar,
  ChevronLeft,
  ChevronRight,
  FileText,
  Filter,
  Pencil,
  Plus,
  ScrollText,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import React from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { Switch } from "@/components/ui/switch";
import Calender from "../Shared_Components/Calender";
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup } from "@/components/ui/radio-group";
import Radiobox_components from "../Shared_Components/Radiobox_components";

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
export default function Staffs() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start ">
      <div className="flex w-full h-[50px] items-center mt-2 ">
        <Link href={"/"} className="flex items-center gap-2 ml-4">
          {" "}
          <ChevronLeft /> <h1 className="font-bold">Staffs</h1>
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
                <div>
                  <h1 className="text-sm my-2"> Status</h1>
                  <RadioGroup defaultValue="one">
                    <Radiobox_components lable="Active" id="one" />
                    <Radiobox_components lable="Inactive" id="two" />
                  </RadioGroup>
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

        <Sheet>
          <SheetTrigger className="ml-6 absolute right-10 bg-[#29B213] flex py-[5px] px-2 rounded">
            <Plus strokeWidth={2} size={16} color="white" />
            <h1 className="text-[11px] ml-2 font-bold text-white">
              Add Staffs
            </h1>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Staff Information</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="w-full flex flex-col mt-2">
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">First Name</Label>
                <Input
                  type="text"
                  placeholder="first name"
                  className="bg-[#F9F9FC]  shadow"
                />
              </div>
       

              <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">
                  <h1 className="text-sm">Middile Name</h1>
                </Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="middile name"
                  className="bg-[#F9F9FC] shadow"
                />
              </div>
         

              <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">
                  <h1 className="text-sm">Phone Number</h1>
                </Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Phone number"
                  className="bg-[#F9F9FC] shadow"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                <Label htmlFor="email">
                  <h1 className="text-sm">Email</h1>
                </Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="email"
                  className="bg-[#F9F9FC] shadow"
                />
              </div>
              <div className=" w-full max-w-sm  mt-4">
              <Label htmlFor="email">
                  <h1 className="text-sm">Staff Role</h1>
                </Label> 
                <Select>
                  <SelectTrigger className="max-w-sm shadow bg-[#F9F9FC] ">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Toyota</SelectItem>
                    <SelectItem value="dark">Bmw</SelectItem>
                    <SelectItem value="system">Land Rover</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full relative bg-[#F9F9FC]   rounded-lg mt-4 flex flex-col items-center justify-center">
               
            
                <div className="flex space-x-6 mt-6 ">
                  {" "}
                  <Button className=" bg-red-600 text-white" variant={null}>
                    {" "}
                    Cancel
                  </Button>{" "}
                  <Button className=" bg-[#133FB2] text-white" variant={null}>
                    {" "}
                    Confirm
                  </Button>{" "}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-full h-full flex items-start justify-center mt-2   overflow-auto ">
        <Table className="w-[95%] border rounded-[15px] shadow bg-white">
          <TableHeader>
            <TableRow className="  ">
              <TableHead className="text-[#333843] font-semibold">
                Avatar
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                First Name
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Middle Name
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Phone Number
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Email
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Status
              </TableHead>
              <TableHead className="text-[#333843] font-semibold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full">
            {Requests.map((Requests) => (
              <TableRow key={Requests.phonenumber}>
                <TableCell className="flex items-center ">
                  <Avatar className="w-[50px] h-[50px]">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                 
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
