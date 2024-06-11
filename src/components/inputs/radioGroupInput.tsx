import React, { FC, useState, useEffect } from "react";
import { CheckBoxType } from "@/types/checkBox";
import { genderData } from "@/data/genderData";
import Checkbox from "react-custom-checkbox";
import { XIcon } from "lucide-react";

interface Props {
  label: string;
  className?: string;
  data: CheckBoxType[];
  onChange: (value: string) => void;
  required?: boolean;
  defaultSelected?: string; // New prop for default selection
}

export const RadioGroupInput: FC<Props> = ({
  label,
  className,
  data,
  required,
  onChange,
  defaultSelected, // Receive defaultSelected prop
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultSelected || null
  );

  useEffect(() => {
    // Update selected value when defaultSelected prop changes
    setSelectedValue(defaultSelected || null);
  }, [defaultSelected]);

  const handleCheckboxChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <span className="capitalize font-normal font-lexenda_deca text-[12px]">
        {label} {required && <span className="text-redish">*</span>}
      </span>
      <div className="flex space-x-2">
        {data.map((item, index) => (
          <div className="flex items-center space-x-1" key={index}>
            <Checkbox
              checked={selectedValue === item.id}
              onChange={() => handleCheckboxChange(item.id)}
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
                width: 39,
                height: 39,
              }}
              size={39}
            />
            <span className="font-normal font-lexenda_deca text-xs">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
