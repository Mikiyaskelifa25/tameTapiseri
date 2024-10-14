"use client";
import { Calendar } from "lucide-react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Calender from "./Shared_Components/Calender";
import saleData from "./Fake_Data/salesData.json";
import serviceRequestTable from "./Fake_Data/serviceRequestTable.json";
import recentCustomer from "./Fake_Data/recentCustomer.json";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MenuCards from "./Shared_Components/MenuCards";
import Service_Requests_Data from "./Shared_Components/Service_Requests_Data";

ChartJS.register(ArcElement, Tooltip, Legend);

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
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function page() {
  return (
    <div className="flex justify-center items-start h-screen w-screen ">
      <div className="grid grid-cols-5  grid-rows-3 gap-4 w-[97%] h-[90%] mt-4   ">
        <div className="grid row-span-3 col-span-2  grid-cols-2 grid-rows-3  ">
          <Tabs
            defaultValue="All Time"
            className="col-span-7 grid grid-cols-7 row-span-3  h-full  gap-x-4"
          >
            <TabsList className="col-span-5 h-[40px] grid grid-cols-5 items-center">
              <TabsTrigger value="All Time">
                <h1 className="text-[11px] font-bold">All Time</h1>
              </TabsTrigger>
              <TabsTrigger value="12 Months">
                <h1 className="text-[11px] font-bold">12 Months</h1>
              </TabsTrigger>
              <TabsTrigger value="30 Days">
                <h1 className="text-[11px] font-bold">30 Days</h1>
              </TabsTrigger>
              <TabsTrigger value="pas">
                <h1 className="text-[11px] font-bold">7 Days</h1>
              </TabsTrigger>
              <TabsTrigger value="pa">
                <h1 className="text-[11px] font-bold">24 Hour</h1>
              </TabsTrigger>
            </TabsList>

            <div className="border h-[40px] rounded-[6px] flex items-center justify-center space-x-2 bg-white col-span-2">
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
            <TabsContent
              value="All Time"
              className="max-h-full  mt-7 scroll-css col-span-7 grid grid-cols-6 overflow-auto gap-3"
            >
              {saleData?.map((Menu_items, index) => {
                return <MenuCards MenuContent={Menu_items} key={index} />;
              })}
            </TabsContent>
          </Tabs>
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

            <div className="w-1/2 h-full relative flex items-center justify-center mr-2">
              <div className="absolute">
                <h1 className="text-xs font-semibold">450 </h1>
              </div>
              <Doughnut data={datapie} options={options} />
            </div>
          </div>
        </div>
        <div className="border col-span-2 row-span-3 shadow  bg-white overflow-auto scroll-css">
          <div className="w-full flex items-center h-[50px]">
            <h1 className="ml-4 ">Service Requests</h1>
          </div>
          <Service_Requests_Data
            serviceRequest_TableData={serviceRequestTable}
          />
        </div>

        <div className="border row-span-2 w-auto rounded-[8px] shadow bg-white ">
          <h1 className="text-xl mt-2 font-bold ml-4 text-[#061A48]">
            Recent Customers
          </h1>

          <div className="flex flex-col items-center justify-center">
            {recentCustomer.map((customer, index) => {
              return (
                <div
                  className="flex items-center justify-around w-[96%] space-x-2 mt-3"
                  key={index}
                >
                  <Avatar>
                    <AvatarImage src={customer.src} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1 className="  text-xs font-medium text-[#1A1C21]">
                    {customer.name}
                  </h1>
                  <h1 className="text-[9px] text-[#89868D] ">
                    {customer.date}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
