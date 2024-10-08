import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React, { FC, forwardRef } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchInput: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        className={
          "flex items-center space-x-2 px-2 bg-light-blue rounded-b-md h-[39px]"
        }
      >
        <SearchIcon className="text-gray-700" />
        <input
          ref={ref}
          placeholder="Search by Athlete ID"
          className={cn(
            "bg-transparent  outline-none  text-sm font-normal w-full placeholder:text-gray-800",
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
