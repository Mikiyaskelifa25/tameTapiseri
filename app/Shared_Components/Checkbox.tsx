import { Checkbox } from "@/components/ui/checkbox";

import { Label } from "@/components/ui/label";
import React from "react";

export default function Check_Box({ lable }: { lable: string }) {
  return (
   <div className="flex items-center">
          <Checkbox />

<Label htmlFor="email">
  <h1 className="text-xs text-[#7B7B7B] ml-4 ">{lable}</h1>
</Label>
   </div>
  );
}
