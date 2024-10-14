import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import Calender from "../Shared_Components/Calender";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlignLeft,
  Bold,
  Italic,
  List,
  ListOrdered,
  Calendar,
  Plus,
  SpellCheck2,
  Underline,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import InputBox_component from "../Shared_Components/InputBox_component";
export default function Blogs_sheet() {
  return (
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
            <Button className="mt-4 bg-[#DEDEFA] text-[#133FB2]" variant={null}>
              {" "}
              Add image
            </Button>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <InputBox_component
              type="text"
              placeholder="title"
              inputStyle="bg-[#F9F9FC]  shadow"
              lable="Blog Title"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="email">Blog Content</Label>
              <div className="w-full bg-[#F9F9FC] shadow flex flex-col border rounded-md">
                <div className="flex w-full justify-around p-2 mt-1">
                  <Bold size={16} />
                  <Italic size={16} />
                  <Underline size={16} />
                  <SpellCheck2 size={16} />
                  <List size={16} />
                  <ListOrdered size={16} />
                  <AlignLeft size={16} />
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
            <InputBox_component
              type="text"
              placeholder="tag"
              inputStyle="bg-[#F9F9FC]  shadow"
              lable="Tags"
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
            <InputBox_component
              type="text"
              placeholder="url"
              inputStyle="bg-[#F9F9FC]  shadow"
              lable="External Links"
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
  );
}
