import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { MenuType } from "../types/types";


export default function MenuCards({ MenuContent }: { MenuContent: MenuType }) {
  return (
    <Link
      href={MenuContent?.link}
      className="col-span-3   h-[80px]  bg-[#FFFFFF] border rounded-[8px] shadow flex items-center justify-center relative"
    >
      <Image
        src={MenuContent.src}
        width={40}
        height={40}
        alt=""
        className="mr-2 ml-4 "
      />
      <div className="px-1 w-full flex justify-center items-center flex-col">
        <div>
          <h1 className="text-2xl font-bold text-start text-[#1E1B39]">
            {MenuContent.value}
          </h1>
          <h1 className="text-sm   text-[#89868D] text-start">
            {MenuContent.title}
          </h1>
        </div>
      </div>
      <div className="absolute right-1 bottom-1">
        <ChevronRight strokeWidth={2.6} />{" "}
      </div>
    </Link>
  );
}
