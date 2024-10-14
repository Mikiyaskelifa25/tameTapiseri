"use client";
import React, { useRef, useEffect } from "react";
import { format } from "date-fns";
import {  toZonedTime } from 'date-fns-tz';
export default function Time_and_Date() {
  const timeRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get the local time zone
      const zonedDate = toZonedTime(now, timeZone);
      const formattedTime = format(zonedDate, "EEE MMM dd yyyy | HH:mm a");
      if (timeRef.current) {
        timeRef.current!.innerHTML = ` ${formattedTime}`;
      }
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <h1
      ref={timeRef}
      className="text-[#7B7B7B] text-[11px] font-bold flex items-center"
    ></h1>
  );
}
