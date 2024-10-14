"use client";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
 
  Filter,
  Save,
 
  Search,

  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Calender from "../Shared_Components/Calender";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const Requests = [
  {
    name: "Teme tapiseri",
    Date: "Sep 01 2024",

    bank: "all Customers",

    refno: "FT556656565",
  },
  {
    name: "Teme tapiseri",
    Date: "Sep 01 2024",

    bank: "Abebe Kebede",

    refno: "FT556656565",
  },
  {
    name: "Teme tapiseri",
    Date: "Sep 01 2024",

    bank: "all Customers",

    refno: "FT556656565",
  },
  {
    name: "Teme tapiseri",
    Date: "Sep 01 2024",

    bank: "#455885",

    refno: "FT556656565",
  },
  {
    name: "Teme tapiseri",
    Date: "Sep 01 2024",

    bank: "alemitu",

    refno: "FT556656565",
  },
  {
    name: "Teme tapiseri",
    Date: "Sep 01 2024",

    bank: "#455885",

    refno: "FT556656565",
  },
];
export default function Sales() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start ">
      <div className="flex w-full h-[50px] items-center justify-between mt-2">
        <Link href={"/"} className="flex items-center gap-2 ml-4">
          {" "}
          <ChevronLeft /> <h1 className="font-bold">Notifications</h1>
        </Link>

  <div className="flex items-center  w-1/2 mr-20 gap-4 ">
  <div className="w-[300px] overflow-hidden flex items-center h-[38px]  rounded-[30px] bg-white border shadow">
          <Input
            type="text"
            placeholder="Search anyting here..."
            className="w-[90%] h-[36px] border-0"
          />
          <Search strokeWidth={2} size={16} color="#667085" className="mx-2" />
        </div>

        <div className="border rounded-[6px] flex items-center justify-center  bg-white h-[30px]">
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

        <div className="border rounded-[6px] flex items-center justify-center   bg-white h-[30px]">
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

      </div>
      <div className="w-full h-full flex items-center justify-around mt-4 gap-2  overflow-auto ">
        <div className="w-[30%] h-full bg-white shadow border rounded-lg p-2">
          <h1>New Notification</h1>
          <Textarea className="mt-2" />
          <RadioGroup
            defaultValue="option-one"
            className="w-full flex items-center justify-around mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">SMS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">in APP</Label>
            </div>
          </RadioGroup>
          <Select>
            <SelectTrigger className="w-full mt-2">
              <SelectValue placeholder="Recipient" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Inperson">Abebe Kebede</SelectItem>
              <SelectItem value="Delivery">Alemitu Koker</SelectItem>
              <SelectItem value="None">System</SelectItem>
            </SelectContent>
          </Select>

          <div className="w-full flex p-2 items-center gap-2 mt-2">
            <Badge className="text-white bg-[#EE5719]">Abebe Kebede</Badge>
            <Badge className="text-white bg-[#EE5719]">Alemitu Koker</Badge>
          </div>
          <Separator className="bg-[#6D717A] " />
          <div className="w-full items-center justify-around flex mt-14 py-4 ">
            <Button className="bg-white border-[#29B213] text-[#29B213] shadow border rounded-[30px] flex items-center hover:bg-[#29B213] hover:text-white px-6  ">
              <X className="mr-2" />
              Cancel
            </Button>
            <Button className="bg-[#5C59E8]  text-white shadow border rounded-[30px] flex items-center   px-6 mr-4 ">
              <Save color="white" className="mr-2" />
              Send Notification
            </Button>
          </div>
        </div>
        <div className="h-full w-[65%]">
          <Table className=" rounded-[15px]  shadow bg-white">
            <TableHeader>
              <TableRow className="  ">
                <TableHead className="text-[#333843] font-semibold">
                  Notification Date
                </TableHead>
                <TableHead className="text-[#333843] font-semibold">
                  Medium
                </TableHead>
                <TableHead className="text-[#333843] font-semibold">
                  Recpients
                </TableHead>
                <TableHead className="text-[#333843] font-semibold">
                  View
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="w-full">
              {Requests.map((Requests) => (
                <TableRow key={Requests.name}>
                  <TableCell className="flex items-center ">
                    <div className="ml-4">
                      <h1 className="text-[12px] text-[#667085]">
                        02/01/2023
                      </h1>
                      <h1 className="text-[12px] text-[#667085]">
                        11:12am
                      </h1>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h1 className="text-[#EE5719] text-xs">SMS</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className="text-[#89868D] text-xs">{Requests.bank}</h1>
                  </TableCell>
                  <TableCell>
                    <Button className="bg-white border-[#EE5719] text-[#EE5719] shadow border rounded-[30px] flex items-center hover:bg-[#EE5719] hover:text-white ">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}></TableCell>
                <TableCell colSpan={2} className=" ">
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
    </div>
  );
}
