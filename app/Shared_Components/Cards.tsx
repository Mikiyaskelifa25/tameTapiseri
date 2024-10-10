import { Badge } from "@/components/ui/badge";
import {
  Circle,
  EllipsisVertical,
  MessageCircle,
  Pencil,
  Trash2,
  X,
  AlignLeft,
  Bold,
  Italic,
  List,
  ListOrdered,
  SpellCheck2,
  Underline,
  FileUp,
} from "lucide-react";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

type blogsType = {
  discription: string;
  title: string;
  Date: string;
  Available: boolean;
  src: string;
};
export default function Cards({ blog }: { blog: blogsType }) {
  return (
    <Card className="border  min-h-[350px] shadow rounded-[8px]">
      <CardContent className="mt-4 ">
        <img
          src={blog.src}
          height={200}
          alt="image"
          className="rounded-[4px] object-cover w-[300px]"
        />
        <Badge className="bg-[#F6F8FF] my-1 ">
          <h1 className="text-[14px] text-[#5673FB] "> {blog.title} </h1>
        </Badge>
        <h1 className="font-bold">{blog.discription}</h1>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center w-full justify-between ">
          {blog.Available ? (
            <div className="flex items-center">
              <Circle size={15} color="none" fill="#29B213" />{" "}
              <h1 className="text-[14px] text-[#8F8F8F] text-xs ml-2 ">
                {blog.Date}{" "}
              </h1>
            </div>
          ) : (
            <div className="flex items-center">
              <Circle size={15} fill="#8F8F8F" color="none" />{" "}
              <h1 className="text-[14px] text-[#8F8F8F] text-xs ml-2 ">
                {blog.Date}{" "}
              </h1>
            </div>
          )}

          <div className="h-full flex items-center">
            <div className=" rounded-[6px] flex items-center justify-center  bg-white h-[30px]">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant={null}>
                    <EllipsisVertical color="#8F8F8F" size={20} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-2" align="end">
                  <Sheet>
                    <SheetTrigger className="   flex  ">
                      <Pencil color="#8F8F8F" size={15} />{" "}
                      <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                        Edit
                      </h1>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Blog Information</SheetTitle>
                        <SheetDescription></SheetDescription>
                      </SheetHeader>
                      <div className="w-full flex flex-col mt-2">
                        <Label htmlFor="email">Photo</Label>
                        <div className="w-full h-[300px] relative bg-[#F9F9FC] border shadow  rounded-lg mt-4 flex flex-col items-center justify-center">
                          <div className="w-[200px] h-[200px] relative">
                            <img
                              src={
                                "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_1280.jpg"
                              }
                              height={200}
                              width={200}
                              alt="editblog"
                            />
                            <div className="absolute top-1 right-1 w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                              <Dialog>
                                <DialogTrigger>
                                  {" "}
                                  <Pencil
                                    fill="#8F8F8F"
                                    color="white"
                                    strokeWidth={1}
                                    size={17}
                                  />
                                </DialogTrigger>
                                <DialogContent className="w-[350px]">
                                  <DialogHeader>
                                    <DialogTitle>Edit photo</DialogTitle>
                                    <DialogDescription></DialogDescription>
                                  </DialogHeader>
                                  <div className="w-[300px] h-[350px] shadow border rounded-lg bg-[#F2F2F2] flex flex-col items-center justify-center">
                                    <FileUp
                                      fill="#8F8F8F"
                                      color="white"
                                      strokeWidth={1}
                                      size={70}
                                    />
                                    <h1 className="text-[#8F8F8F] text-xs my-2">
                                      {" "}
                                      Drag and drop files here
                                    </h1>
                                    <h1 className="text-[#061A48] text-sm font-semibold my-2">
                                      OR
                                    </h1>
                                    <Button
                                      variant={null}
                                      className="bg-white text-[#133FB2] border border-[#133FB2] rounded-lg my-2"
                                    >
                                      Upload New Image
                                    </Button>
                                  </div>
                                  <DialogFooter className="flex items-center w-full bg-[#E0E0E0]">
                                    <Button
                                      type="submit"
                                      variant={null}
                                      className="bg-white text-[#EE5719] border border-[#EE5719]"
                                    >
                                      Remove Image
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>

                          <h1 className="text-xs">
                            {" "}
                            Drag and drop image here, or click change image
                          </h1>
                          <Button
                            className="mt-4 bg-[#DEDEFA] text-[#133FB2]"
                            variant={null}
                          >
                            {" "}
                            Add image
                          </Button>
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                          <Label htmlFor="email">Blog Title</Label>
                          <Input
                            type="text"
                            placeholder="title"
                            className="bg-[#F9F9FC]  shadow"
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

                         
                            </div>
                          </div>
                        </div>

                        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                          <Label htmlFor="email">
                            <h1 className="text-sm">Tags</h1>
                          </Label>
                          <Input
                            type="text"
                            id="email"
                            placeholder="tag"
                            className="bg-[#F9F9FC] shadow"
                          />
                        </div>

                        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
                          <Label htmlFor="email">
                            <h1 className="text-sm">External Links</h1>
                          </Label>
                          <Input
                            type="text"
                            id="email"
                            placeholder="url"
                            className="bg-[#F9F9FC] shadow"
                          />
                        </div>

                        <div className="flex justify-center items-center gap-6 mt-6 w-full">
                          {" "}
                          <Button
                            className=" bg-red-600 text-white"
                            variant={null}
                          >
                            {" "}
                            Cancel
                          </Button>{" "}
                          <Button
                            className=" bg-[#133FB2] text-white"
                            variant={null}
                          >
                            {" "}
                            Publish
                          </Button>{" "}
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <div className="flex items-center ">
                    <Dialog>
                      <DialogTrigger className="flex items-center overflow-auto ">
                        <MessageCircle color="#8F8F8F" size={15} />{" "}
                        <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                          Comments
                        </h1>
                      </DialogTrigger>
                      <DialogContent className="flex flex-col items-center w-[400px] h-[97%]">
                        <DialogHeader className="w-full flex items-center justify-start ">
                          <DialogTitle>
                            <div className="flex items-center w-full absolute left-4">
                              <h1 className="text-start">Comments</h1>
                            </div>
                          </DialogTitle>
                          <DialogDescription></DialogDescription>
                        </DialogHeader>
                        <div className="w-full flex items-center justify-start flex-col h-full overflow-auto scroll-css">
                          <div className="  rounded-lg  flex flex-col items-start p-4 justify-start mt-4">
                            <img
                              src={
                                "https://cdn.pixabay.com/photo/2016/11/29/12/13/fence-1869401_1280.jpg"
                              }
                              width={300}
                              height={300}
                              className="rounded-lg"
                              alt="comment"
                            />
                            <h1 className="px-4">
                              {" "}
                              The art of car upholstery : how custom interiors
                              Transform your Vehicle
                            </h1>
                            <h1 className="px-4 text-xs text-[#8F8F8F]">
                              {" "}
                              October 2, 2024
                            </h1>
                          </div>

                          <div className="flex items-center w-full  flex-col my-2">
                            <div className="flex  items-center w-full gap-2 shadow">
                              <div className="flex items-start w-full justify-center flex-col">
                                <h1 className="px-4  text-sm">
                                  {" "}
                                  The art of car upholstery : how custom
                                  interiors Transform your Vehicle
                                </h1>
                                <h1 className="px-4 text-[10px]">
                                  {" "}
                                  Abebe kebede . jan 12,2024 12:34
                                </h1>
                              </div>
                              <Trash2 color="red" size={25} className="px-1" />
                            </div>
                          </div>
                          <div className="flex items-center w-full  flex-col my-2">
                            <div className="flex  items-center w-full gap-2 shadow">
                              <div className="flex items-start w-full justify-center flex-col">
                                <h1 className="px-4  text-sm">
                                  {" "}
                                  The art of car upholstery : how custom
                                  interiors Transform your Vehicle
                                </h1>
                                <h1 className="px-4 text-[10px]">
                                  {" "}
                                  Abebe kebede . jan 12,2024 12:34
                                </h1>
                              </div>
                              <Trash2 color="red" size={25} className="px-1" />
                            </div>
                          </div>
                          <div className="flex items-center w-full  flex-col my-2">
                            <div className="flex  items-center w-full gap-2 shadow">
                              <div className="flex items-start w-full justify-center flex-col">
                                <h1 className="px-4  text-sm">
                                  {" "}
                                  The art of car upholstery : how custom
                                  interiors Transform your Vehicle
                                </h1>
                                <h1 className="px-4 text-[10px]">
                                  {" "}
                                  Abebe kebede . jan 12,2024 12:34
                                </h1>
                              </div>
                              <Trash2 color="red" size={25} className="px-1" />
                            </div>
                          </div>
                          <div className="flex items-center w-full  flex-col my-2">
                            <div className="flex  items-center w-full gap-2 shadow">
                              <div className="flex items-start w-full justify-center flex-col">
                                <h1 className="px-4  text-sm">
                                  {" "}
                                  The art of car upholstery : how custom
                                  interiors Transform your Vehicle
                                </h1>
                                <h1 className="px-4 text-[10px]">
                                  {" "}
                                  Abebe kebede . jan 12,2024 12:34
                                </h1>
                              </div>
                              <Trash2 color="red" size={25} className="px-1" />
                            </div>
                          </div>
                          <div className="flex items-center w-full  flex-col my-2">
                            <div className="flex  items-center w-full gap-2 shadow">
                              <div className="flex items-start w-full justify-center flex-col">
                                <h1 className="px-4  text-sm">
                                  {" "}
                                  The art of car upholstery : how custom
                                  interiors Transform your Vehicle
                                </h1>
                                <h1 className="px-4 text-[10px]">
                                  {" "}
                                  Abebe kebede . jan 12,2024 12:34
                                </h1>
                              </div>
                              <Trash2 color="red" size={25} className="px-1" />
                            </div>
                          </div>
                    
                 
                        </div>
                    
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex items-center ">
                    {" "}
                    <X color="#8F8F8F" size={15} />{" "}
                    <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                      UnPublish
                    </h1>
                  </div>
                  <div className="flex items-center ">
                    {" "}
                    <Trash2 color="#8F8F8F" size={15} />{" "}
                    <h1 className="text-[14px] text-[#8F8F8F] text-sm ml-2  font-normal">
                      Remove
                    </h1>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
