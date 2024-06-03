import { cn } from "@/lib/utils";
import React from "react";

const PlayIcon = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <svg
      width="33"
      height="39"
      viewBox="0 0 33 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path d="M33 19.5L0 38.1195L0 0.880453L33 19.5Z" fill="white" />
    </svg>
  );
};

const PlayIconPrimary = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <svg
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path d="M16 9.5L0.249999 18.5933L0.25 0.406733L16 9.5Z" fill="#1A83FF" />
    </svg>
  );
};

export { PlayIcon, PlayIconPrimary };
