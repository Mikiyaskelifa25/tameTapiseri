import { Badge } from "@/components/ui/badge";
import Image from 'next/image'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  type TableData ={
           src:string,
           Date:string,
           Product:string,
           Status:string
  }

export default function Service_Requests_Data({serviceRequest_TableData}:{serviceRequest_TableData:TableData[]}) {
  return (
    
    <Table className="w-full ">
    <TableHeader className="bg-[#F9F9FC]">
      <TableRow className="w-[100px] border ">
        <TableHead className="text-[#333843]">Service</TableHead>
        <TableHead className="text-[#333843]">Date</TableHead>
        <TableHead className="text-[#333843]">Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody className="w-full">
      {serviceRequest_TableData.map((Requests,keyindex) => (
        <TableRow key={keyindex}>
          <TableCell className="flex items-center ">
            <Image
              src={Requests.src}
              alt={"srvice"}
              width={35}
              height={35}
              className=""
            />
            <div className="ml-4">
              {Requests.Product}
              <h1 className="text-[12px] text-[#667085]">
                Customer name
              </h1>
            </div>
          </TableCell>
          <TableCell>
            <h1 className="text-[12px] text-[#667085] font-sembold">
              {Requests.Date}
            </h1>
          </TableCell>
          <TableCell>
            {Requests.Status === "approved" ? (
              <Badge className="bg-[#EFFDE8]">
                <h1 className="text-green-400">Approved</h1>
              </Badge>
            ) : Requests.Status === "requested" ? (
              <Badge className="bg-[#E8F8FD]">
                <h1 className="text-[#13B2E4]">Requested</h1>
              </Badge>
            ) : (
              <Badge className="bg-[#FDF1E8]">
                <h1 className="text-[#E46A11]">Cancelled</h1>
              </Badge>
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}
