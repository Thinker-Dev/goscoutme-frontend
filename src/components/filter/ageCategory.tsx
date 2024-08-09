import React, { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import Checkbox from "react-custom-checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";
import { ageCategoryState } from "@/lib/recoil";

export const AgeCategory = () => {
  const [selectedAge, setSelectedAge] = useRecoilState(ageCategoryState);

  useEffect(() => {}, [selectedAge]);

  const handleCheckboxChange = (value: string) => {
    const [min, max] = value.split("-").map(Number);
    if (selectedAge.ageMin === min && selectedAge.ageMax === max) {
      setSelectedAge({ ageMin: 0, ageMax: 0 });
    } else {
      setSelectedAge({ ageMin: min, ageMax: max });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-y-2">
      {["5-7", "8-11", "12-14", "15-17", "18-35"].map((value, index) => (
        <div key={index} className="flex items-center">
          <Checkbox
            type="checkbox"
            name="ageCategory"
            icon={<BsCheckLg />}
            style={{
              borderColor: "#91C8FF",
              borderWidth: 1.5,
              borderRadius: 3,
              width: 15,
              height: 15,
            }}
            checked={
              selectedAge.ageMin === Number(value.split("-")[0]) &&
              selectedAge.ageMax === Number(value.split("-")[1])
            }
            onChange={() => handleCheckboxChange(value)}
          />
          <label
            htmlFor={`ageCategory-${index}`}
            className="text-[12px] leading-5 font-lexenda_exa font-light ml-2"
          >
            {value}
          </label>
        </div>
      ))}
    </div>
  );
};
