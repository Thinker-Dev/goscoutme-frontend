import { cn } from "@/lib/utils";
import React from "react";

export const Volleyball = ({ ...props }: React.SVGProps<SVGPathElement>) => {
  return (
    <svg
      width="110"
      height="110"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500.000000 500.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill="#0C469A"
        stroke="none"
        {...props}
      >
        <path
          d="M1223 3778 c-25 -27 -30 -78 -12 -125 6 -15 160 -179 344 -363 l333
          -335 -38 -111 -38 -111 768 -768 768 -768 41 7 c56 9 141 48 198 91 100 75
          193 216 209 314 l7 43 -768 768 -768 768 -112 -38 -113 -38 -298 300 c-373
          374 -381 380 -447 386 -45 3 -55 1 -74 -20z"
        />
        <path
          d="M3048 3179 c-49 -14 -117 -74 -139 -123 -24 -53 -24 -139 0 -192 39
          -85 150 -146 238 -129 220 41 266 325 70 426 -46 24 -119 32 -169 18z"
        />
      </g>
      <defs>
        <clipPath id="clip0_2018_1598">
          <rect width="149" height="149" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
