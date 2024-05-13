import React, { FC, useState } from "react";
import Checkbox from "react-custom-checkbox";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  info: string;
  value: boolean;
}

export const CheckboxInput: FC<Props> = ({
  className,
  info,
  ...rest
}: Props) => {
  const [checked, setChecked] = useState<boolean>();
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={cn("flex space-x-3")}>
      <Checkbox
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
        {...rest}
      />

      <span className="capitalize font-normal font-lexenda_deca text-xs">
        {info}
      </span>
    </div>
  );
};
