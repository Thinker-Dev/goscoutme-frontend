import React, { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import Checkbox from "react-custom-checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import { Position } from "@/types/auth";

interface Props {
  positions: Position[] | undefined;
}

export const PositionsFilter = ({ positions }: Props) => {
  const [checkedPositions, setCheckedPositions] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const pos = searchParams.get("pos");
    if (pos) {
      setCheckedPositions(pos.split("-"));
    }
  }, [searchParams]);

  const handleCheckboxChange = (value: string) => {
    setCheckedPositions((prevChecked) => {
      let updatedChecked;
      if (prevChecked.includes(value)) {
        updatedChecked = prevChecked.filter((position) => position !== value);
      } else {
        updatedChecked = [...prevChecked, value];
      }
      const concatenatedString = updatedChecked.join("-");
      router.push(`/dashboard?pos=${concatenatedString}`);
      return updatedChecked;
    });
  };

  return (
    <div>
      {positions &&
        positions.map((position, index) => (
          <div key={index} className="flex items-center">
            <Checkbox
              type="checkbox"
              name="position"
              icon={<BsCheckLg />}
              style={{
                borderColor: "#91C8FF",
                borderWidth: 1.5,
                borderRadius: 3,
                width: 15,
                height: 15,
              }}
              checked={checkedPositions.includes(position.id.toString())}
              onChange={() => handleCheckboxChange(position.id.toString())}
            />
            <label
              htmlFor={`position-${index}`}
              className="text-[12px] leading-5 font-lexenda_exa font-light ml-2"
            >
              {position.name}
            </label>
          </div>
        ))}
    </div>
  );
};
