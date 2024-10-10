"use client";
import { Calendar, ChevronRight } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Calender from "./Shared_Components/Calender";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);

const Requests = [
  {
    Product: "Chair",
    Date: "Sep 01 2024",
    src: "/assets/categories.icons/chair.jpg",
    Status: "approved",
  },
  {
    Product: "Steering Wheel",
    Date: "Sep 01 2024",

    src: "/assets/categories.icons/wheel1.jpg",

    Status: "Cancelled",
  },
  {
    Product: "Gear",
    Date: "Sep 01 2024",
    src: "/assets/categories.icons/gear.webp",
    Status: "requested",
  },
  {
    Product: "Chair",
    Date: "Sep 01 2024",
    src: "/assets/categories.icons/chair.jpg",
    Status: "approved",
  },
  {
    Product: "Door",
    Date: "Sep 01 2024",
    src: "/assets/categories.icons/door.jpg",
    Status: "cancelled",
  },
  {
    Product: "Floor",
    Date: "Sep 01 2024",
    src: "/assets/categories.icons/floor.webp",
    Status: "requested",
  },
  {
    Product: "Chair",
    Date: "Sep 01 2024",
    src: "/assets/categories.icons/chair.jpg",
    Status: "approved",
  },
];

const datapie = {
  labels: ["Roof", "chair", "carpet"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
const options = {
  backgroundColor: "red",
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: true,
      align: "left",
    
      font: {
        size: "16",
        weight: "bold",
        position: "absolute",
      },
      color: "black",
    },
  },
};

export default function page() {
  const Report_cards = [
    {
      value: "635,000.00",
      title: "Sales",
      src: "/assets/dashboardicons/Sales.png",
      link:"/sales"
    },
    {
      value: "123",
      title: "Services",
      src: "/assets/dashboardicons/services.png",
      link:"/services"
    },
    {
      value: "10",
      title: "Car Brands",
      src: "/assets/dashboardicons/carBrands.png",
       link:"/carbrands"
    },
    {
      value: "5",
      title: "Categories",
      src: "/assets/dashboardicons/category.png",
       link:"/categories"
    },
    {
      value: "2300",
      title: "Customers",
      src: "/assets/dashboardicons/customers.png",
       link:"/customers"
    },
    { value: "4", title: "Staffs", src: "/assets/dashboardicons/staffs.png", link:"/staffs" },
    {
      value: "230",
      title: "Request",
      src: "/assets/dashboardicons/requests.png",
       link:"/requests"
    },
    { value: "123", title: "Blogs", src: "/assets/dashboardicons/blogs.png", link:"/blogs" },
    { value: "2", title: "Bodcast", src: "/assets/dashboardicons/bodcast.png" ,link:"/bodcast" },
    { value: "123", title: "Blogs", src: "/assets/dashboardicons/bodcast.png", link:"/blogs" },
  ];
  return (
    <div className="flex justify-center items-start h-screen w-screen ">
      <div className="grid grid-cols-5  grid-rows-3 gap-3 w-[97%] h-full  mt-1 py-2  ">
        <div className=" flex flex-col overflow-auto  grid-cols-2  row-span-3 col-span-2 ">
          <div className="px-2  h-[35px] box-content   grid grid-cols-7 gap-x-4  items-center relative col-span-2">
            <Tabs defaultValue="account" className="col-span-5 flex h-full ">
              <TabsList className="grid  grid-cols-5">
                <TabsTrigger value="account">
                  <h1 className="text-[11px] font-bold">All Time</h1>
                </TabsTrigger>
                <TabsTrigger value="passw">
                  <h1 className="text-[11px] font-bold">12 Months</h1>
                </TabsTrigger>
                <TabsTrigger value="ac">
                  <h1 className="text-[11px] font-bold">30 Days</h1>
                </TabsTrigger>
                <TabsTrigger value="pas">
                  <h1 className="text-[11px] font-bold">7 Days</h1>
                </TabsTrigger>
                <TabsTrigger value="pa">
                  <h1 className="text-[11px] font-bold">24 Hour</h1>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account"></TabsContent>
              <TabsContent value="password"></TabsContent>
            </Tabs>
            <div className="border h-full rounded-[6px] flex items-center justify-center space-x-2 bg-white col-span-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={null}>
                    <Calendar strokeWidth={2} size={16} color="#667085" />
                    <h1 className="text-[11px] ml-2 font-bold text-[#667085]">
                      Select Dates
                    </h1>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0"
                  align="end"
                >

                  <Calender />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="w-full  mt-6   grid grid-cols-2 overflow-auto  no-scrollbar">
            {Report_cards.map((item, index) => {
              return (
                <Link href={item.link}
                  className="  mx-[5px] my-[5px] h-[80px]  bg-[#FFFFFF] border rounded-[8px] shadow flex items-center justify-center relative"
                  key={index}
                >
                  <Image
                    src={item.src}
                    width={40}
                    height={40}
                    alt=""
                    className="mr-2 ml-4"
                  />
                  <div className="px-1 w-full flex justify-center items-center flex-col">
                    <div>
                      <h1 className="text-2xl font-bold text-start text-[#1E1B39]">
                        {item.value}
                      </h1>
                      <h1 className="text-sm   text-[#89868D] text-start">
                        {item.title}
                      </h1>
                    </div>
                  </div>
                  <div className="absolute right-1 bottom-1">
                    <ChevronRight strokeWidth={2.6} />{" "}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className=" shadow row-span-1 rounded-[8px] bg-white flex-col flex items-center  ">
          <div className="w-full  mt-2">
            <h1 className="text-[14px] font-semibold text-[#1E1B39] px-2">
              {" "}
              Categories
            </h1>
          </div>

          <div className="w-full h-[100px]  flex items-center justify-between mt-4">
            <div className="flex  justify-center min-h-full flex-col ml-2 min-w-1/2 ">
              {datapie?.datasets[0]?.data?.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center ">
                      <div
                        className="w-[8px] h-[8px] rounded-full"
                        style={{
                          backgroundColor:
                            datapie.datasets[0].backgroundColor[index],
                        }}
                      ></div>
                      <h1 className="text-[12px] font-bold text-[#1E1B39] px-2">
                        {item}
                      </h1>
                    </div>

                    <h1 className="text-[10px] ml-2 font-normal text-[#99A9C3] px-2">
                      {datapie.labels[index]}{" "}
                    </h1>
                  </div>
                );
              })}
            </div>

            <div className="w-1/2 h-full">
              <Doughnut data={datapie} options={options} />
            </div>
          </div>
        </div>
        <div className="border col-span-2 row-span-3 shadow  bg-white overflow-auto scroll-css">
          <div className="w-full flex items-center h-[50px]">
            <h1 className="ml-4 ">Service Requests</h1>
          </div>

          <Table className="w-full ">
            <TableHeader className="bg-[#F9F9FC]">
              <TableRow className="w-[100px] border ">
                <TableHead className="text-[#333843]">Service</TableHead>
                <TableHead className="text-[#333843]">Date</TableHead>
                <TableHead className="text-[#333843]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="w-full">
              {Requests.map((Requests) => (
                <TableRow key={Requests.Product}>
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
                  <TableCell><h1 className="text-[12px] text-[#667085] font-sembold">{Requests.Date}</h1></TableCell>
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
        </div>

        <div className="border row-span-2 w-auto rounded-[8px] shadow bg-white ">
          <h1 className="text-xl mt-2 font-bold ml-4 text-[#061A48]">
            Recent Customers
          </h1>

          <div className="flex flex-col items-center justify-center">
      
            <div className="flex items-center justify-around w-[96%] space-x-2 mt-3">
              <Avatar>
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="  text-xs font-medium text-[#1A1C21]">
                {" "}
                Customer Name
              </h1>
              <h1 className="text-[9px] text-[#89868D] ">
                {" "}
                sep 02, 2024
              </h1>
            </div>

            <div className="flex items-center justify-around w-[96%] space-x-2 mt-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="  text-xs text-[#1A1C21] font-medium"> Customer Name</h1>
              <h1 className="text-[9px] text-[#89868D] ">
                {" "}
                Sep 02, 2024
              </h1>
            </div>
            <div className="flex items-center justify-around w-[96%] space-x-2 mt-3">
              <Avatar>
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="  text-xs font-medium text-[#1A1C21]">
                {" "}
                Customer Name
              </h1>
              <h1 className="text-[9px] text-[#89868D] ">
                {" "}
                Sep 02, 2024
              </h1>
            </div>
            <div className="flex items-center justify-around w-[94%] space-x-2 mt-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="  text-xs text-[#1A1C21] font-medium"> Customer Name</h1>
              <h1 className="text-[9px] text-[#89868D]  line-clamp-1">
                {" "}
                Sep 02, 2024
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
