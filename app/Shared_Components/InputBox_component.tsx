"use client"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React ,{useState} from "react";

export default function InputBox_component({
  type,
  placeholder,
  inputStyle,
  lable,
}: {
  type: string;
  placeholder: string;
  inputStyle: string;
  lable: string | null;
}) {
  const [inputData,setinputData] =useState("")
  return (
    <>
      {lable && (
        <Label htmlFor="email">
          <h1 className="text-sm">{lable}</h1>
        </Label>
      )}

      <Input type={type} value={inputData} placeholder={placeholder} className={inputStyle} onChange={(e)=>{setinputData(e.target.value)}} />
    </>
  );
}
