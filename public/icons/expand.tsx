import { cn } from "@/lib/utils";
import React from "react";

export const Expand = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path d="M5 8L9.33013 0.5H0.669873L5 8Z" fill="#D9D9D9" />
    </svg>
  );
};
