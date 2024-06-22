import React, { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import Checkbox from "react-custom-checkbox";
import { useRecoilState } from "recoil";
import { ageCategoryState } from "@/lib/recoil";
import { useRouter, useSearchParams } from "next/navigation";

export const AgeCategory = () => {
  const [selectedAge, setSelectedAge] = useState({ ageMin: 0, ageMax: 0 });
  const searchParams = useSearchParams();
  const router = useRouter();
  const ageMax = searchParams.get("age_max");
  const ageMin = searchParams.get("age_min");

  useEffect(() => {
    if (ageMin && ageMax) {
      setSelectedAge({ ageMin: Number(ageMin), ageMax: Number(ageMax) });
    }
  }, [ageMin, ageMax, setSelectedAge]);

  const handleCheckboxChange = (value: string) => {
    const [min, max] = value.split("-").map(Number);
    router.push(`/dashboard?age_min=${min}&age_max=${max}`);
    setSelectedAge({ ageMin: min, ageMax: max });
  };

  return (
    <div className="grid grid-cols-2 gap-y-2">
      {["5-7", "8-11", "12-14", "15-17"].map((value, index) => (
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
