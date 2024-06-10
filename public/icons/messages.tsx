import { cn } from "@/lib/utils";
import React from "react";

const Messages = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      className={cn(className)}
      width="38"
      height="30"
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2013_92)">
        <path
          d="M0 0V28.8679C0 32.2248 2.7297 35.2108 4.34015 35.4554C5.95059 35.7001 14.9073 36 22.3234 36C29.7395 36 37.3542 35.7369 39.5015 35.4239C41.6488 35.1108 44 32.1169 44 28.8679V0H0ZM39.1955 4.2093L25.19 18.2236C24.3848 19.0286 23.3192 19.4733 22.1865 19.4733C21.0539 19.4733 19.9883 19.0286 19.1831 18.2236L5.18026 4.2093H39.1982H39.1955ZM36.8255 30.7778C34.4474 31.2645 29.0927 31.2645 22.0523 31.2645C15.012 31.2645 9.35131 31.0041 6.96785 30.7463C5.67144 30.6068 4.29183 29.715 4.29183 28.3417V9.3157L16.1259 21.157C17.7417 22.7749 19.8943 23.6641 22.1865 23.6641C24.4787 23.6641 26.6314 22.7723 28.2472 21.157L39.7055 9.68927V28.3391C39.7055 29.8676 38.1407 30.5069 36.8255 30.7752V30.7778Z"
          fill="#1A83FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_2013_92">
          <rect width="44" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const MessagesMeetingIcon = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      className={cn(className)}
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2035_3685)">
        <path
          d="M17.404 16.1337L13.7414 17.0272C13.5345 17.0775 13.3232 17.0885 13.1097 17.0688C13.059 17.0797 13.0062 17.0841 12.9512 17.0841H5.42567C4.98106 17.0841 4.62228 16.7249 4.62228 16.2848C4.62228 15.8446 4.98326 15.4854 5.42567 15.4854H11.0825C10.9394 15.1131 10.8976 14.7211 10.979 14.3445L11.7846 10.5909C11.8705 10.1945 12.0685 9.82876 12.3569 9.54188L16.0679 5.84961H0V19.942C0 21.3501 1.14897 22.4933 2.56426 22.4933H3.30163V26.0038C3.30163 26.8907 4.37796 27.3331 5.00747 26.7068L9.24456 22.4911H19.4466C20.8619 22.4911 22.0108 21.3479 22.0108 19.9398V11.9793L18.3945 15.5774C18.1215 15.849 17.7782 16.0417 17.4018 16.1337H17.404Z"
          fill="white"
        />
        <path
          d="M12.8138 15.2355C12.9899 15.4041 13.2122 15.4983 13.3553 15.4632L16.8484 14.6114L13.3267 11.1074L12.5607 14.6771C12.5277 14.8304 12.6333 15.0625 12.8138 15.2333V15.2355Z"
          fill="white"
        />
        <path
          d="M18.353 5.84915L14.4219 9.75823L18.1879 13.5074L25.4163 6.31561L21.6502 2.56641L18.353 5.84915Z"
          fill="white"
        />
        <path
          d="M27.5584 2.59975L25.3859 0.438264C24.9303 -0.0150573 24.3404 -0.107036 24.1159 0.11415L22.8789 1.34491L26.645 5.09193L27.882 3.86117C28.1043 3.63998 28.014 3.05307 27.5562 2.59756L27.5584 2.59975Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2035_3685">
          <rect width="28" height="27" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { Messages, MessagesMeetingIcon };
