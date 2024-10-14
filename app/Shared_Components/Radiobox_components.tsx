import React from 'react'
import { Label } from "@/components/ui/label"
import {  RadioGroupItem } from "@/components/ui/radio-group"

export default function Radiobox_components({lable,id}:{lable:string,id:string}) {
  return (
    
  <div className="flex items-center space-x-2">
    <RadioGroupItem value={id} id={id} />
    <Label htmlFor="option-one">{lable}</Label>
  </div>



  )
}
