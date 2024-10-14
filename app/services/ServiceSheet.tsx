import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
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
  
import React from 'react'
import InputBox_component from '../Shared_Components/InputBox_component'

export default function ServiceSheet() {
  return (
    <Sheet>
    <SheetTrigger className="ml-6 absolute right-10 bg-[#29B213] flex py-[5px] px-2 rounded">
      <Plus strokeWidth={2} size={16} color="white" />
      <h1 className="text-[11px] ml-2 font-bold text-white">
        Add Service
      </h1>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Service Information</SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>
      <div className="w-full flex flex-col mt-2">
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
          <InputBox_component
            type="number"
            placeholder="001"
            inputStyle="bg-[#F9F9FC] shadow"
            lable="Service Code"
          />
        </div>
        <div className=" w-full max-w-sm  mt-4">
          <Select>
            <SelectTrigger className="max-w-sm shadow bg-[#F9F9FC] ">
              <SelectValue placeholder="Chair" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Chair</SelectItem>
              <SelectItem value="dark">Door</SelectItem>
              <SelectItem value="system">Floor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
          <InputBox_component
            type="text"
            placeholder="Wub Alem"
            inputStyle="bg-[#F9F9FC] shadow"
            lable="Service Name"
          />
        </div>
        <div className=" w-full max-w-sm  mt-4">
          <Select>
            <SelectTrigger className="max-w-sm shadow bg-[#F9F9FC] ">
              <SelectValue placeholder="Suzuki" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Toyota</SelectItem>
              <SelectItem value="dark">Bmw</SelectItem>
              <SelectItem value="system">Land Rover</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
          <InputBox_component
            type="text"
            placeholder="Toyota"
            inputStyle="bg-[#F9F9FC] shadow"
            lable="Car Model"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
          <InputBox_component
            type="text"
            placeholder="Diamond"
            inputStyle="bg-[#F9F9FC] shadow"
            lable="Type"
          />
        </div>
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
            Change image
          </Button>
          <div className="flex gap-6 mt-6 absolute bottom-2">
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
  )
}
