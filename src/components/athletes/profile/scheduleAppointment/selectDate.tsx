import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  addDays,
  isSameDay,
  isSameMonth,
  addMonths,
  subMonths,
} from "date-fns";
import { useRecoilState } from "recoil";
import { selectedDateState } from "@/lib/recoil";

const SelectDate: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between mb-4 items-center">
        <button onClick={prevMonth} className="py-2 ">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-3.27835e-07 6.5L11.25 12.9952L11.25 0.00480987L-3.27835e-07 6.5Z"
              fill="white"
            />
          </svg>
        </button>
        <h2 className="text-base font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button onClick={nextMonth} className="py-2">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.5L0.75 0.00480925L0.75 12.9952L12 6.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    );
  };

  const renderDaysOfWeek = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="w-1/7 text-center font-bold">
          {format(addDays(startDate, i), "EEE")}
        </div>
      );
    }

    return <div className="flex mb-2 w-full justify-between">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;

        days.push(
          <div
            key={day.toString()}
            className={`flex rounded-b-md h-[25px] mb-6 w-[29px] justify-center items-center cursor-pointer 
            ${isSameDay(day, selectedDate) ? "bg-white" : ""} 
                ${isSameDay(day, new Date()) ? "bg-blue-200" : ""} 
                ${isSameMonth(day, monthStart) ? "" : "invisible"}`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span className="text-xs">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex w-full justify-between" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="w-full mt-4">
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderCells()}
    </div>
  );
};

export default SelectDate;
