import React, { FC, useState } from "react";
import { CheckBoxType } from "@/types/checkBox";
import { genderData } from "@/data/genderData";
import Checkbox from "react-custom-checkbox";
import { XIcon } from "lucide-react";

interface Props {
  label: string;
  className?: string;
  data: CheckBoxType[];
  onChange: (value: string) => void; // Add onChange handler
}

export const RadioGroupInput: FC<Props> = ({
  label,
  className,
  data,
  onChange,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleCheckboxChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <span className="capitalize font-normal font-lexenda_deca text-[12px]">
        {label}
      </span>
      <div className="flex space-x-2">
        {data.map((item, index) => (
          <div className="flex items-center space-x-1" key={index}>
            <Checkbox
              checked={selectedValue === item.value}
              onChange={() => handleCheckboxChange(item.value)}
              icon={
                <div>
                  <XIcon color="black" size={35} fontWeight={800} />
                </div>
              }
              borderWidth={5}
              style={{
                overflow: "hidden",
                borderColor: "#B2AFAF",
                borderRadius: 0,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              size={39}
            />
            <span className="capitalize font-normal font-lexenda_deca text-xs">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
