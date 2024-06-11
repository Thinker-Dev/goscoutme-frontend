import { selectedtimeState } from "@/lib/recoil";
import React from "react";
import { useRecoilState } from "recoil";

interface Time {
  label: string;
  value: string;
}

const am: Time[] = [
  { label: "01:00 AM", value: "01:00 AM" },
  { label: "02:00 AM", value: "02:00 AM" },
  { label: "03:00 AM", value: "03:00 AM" },
  { label: "04:00 AM", value: "04:00 AM" },
  { label: "05:00 AM", value: "05:00 AM" },
  { label: "06:00 AM", value: "06:00 AM" },
  { label: "07:00 AM", value: "07:00 AM" },
  { label: "08:00 AM", value: "08:00 AM" },
  { label: "09:00 AM", value: "09:00 AM" },
  { label: "10:00 AM", value: "10:00 AM" },
  { label: "11:00 AM", value: "11:00 AM" },
  { label: "12:00 NOON", value: "12:00 NOON" },
];

const pm: Time[] = [
  { label: "01:00 PM", value: "01:00 PM" },
  { label: "02:00 PM", value: "02:00 PM" },
  { label: "03:00 PM", value: "03:00 PM" },
  { label: "04:00 PM", value: "04:00 PM" },
  { label: "05:00 PM", value: "05:00 PM" },
  { label: "06:00 PM", value: "06:00 PM" },
  { label: "07:00 PM", value: "07:00 PM" },
  { label: "08:00 PM", value: "08:00 PM" },
  { label: "09:00 PM", value: "09:00 PM" },
  { label: "10:00 PM", value: "10:00 PM" },
  { label: "11:00 PM", value: "11:00 PM" },
  { label: "12:00 MIDNIGHT", value: "12:00 MIDNIGHT" },
];

const SelectTime = () => {
  const [selectedTime, setSelectedTime] = useRecoilState(selectedtimeState);

  const handleTimeClick = (value: string) => {
    setSelectedTime(value);
  };

  const renderButton = (time: Time) => (
    <button
      className={`text-xs rounded-b-md px-1 py-1     ${
        selectedTime === time.value ? "bg-white" : ""
      }`}
      key={time.value}
      onClick={() => handleTimeClick(time.value)}
    >
      {time.label}
    </button>
  );

  return (
    <div className="flex space-x-10  justify-center w-full mt-4">
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-center mb-4">AM</h3>
        <div className="flex flex-col space-y-0.5">{am.map(renderButton)}</div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-semibold text-center mb-4">PM</h3>
        <div className="space-y-0.5 flex flex-col">{pm.map(renderButton)}</div>
      </div>
    </div>
  );
};

export default SelectTime;
