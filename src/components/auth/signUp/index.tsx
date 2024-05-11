"use client";

import React from "react";
import { Title } from "../createAccount";
import { usePathname } from "next/navigation";
import { TitleTypes } from "@/types/title";

interface Props {
  title: TitleTypes;
}

export const SignUpHeader = ({ title }: Props) => {
  const pathname = usePathname();
  return (
    <Title className="font-extralight">
      {pathname.includes("sign-up-scout") ? (
        <span>
          <span className="text-primary font-black">{title.bold.scout}</span>{" "}
          {title.thin.scout}
        </span>
      ) : (
        <span>
          <span className="text-secondary font-black">
            {title.bold.athlete}
          </span>{" "}
          {title.thin.athlete}
        </span>
      )}
    </Title>
  );
};
