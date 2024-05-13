"use client";

import React, { FC } from "react";
import { AthleteCard } from "../cards/athlete";
import { Title } from "../auth/createAccount";
import { SearchInput } from "../inputs/searchInput";
import { usePathname } from "next/navigation";

export const Athletes: FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  return (
    <div className="pb-10 pr-12 h-[calc(100vh-113px)] overflow-auto styled-scroll-bar">
      <Title className="text-primary mb-2 xs:pt-0">
        <span className="text-black">Your</span>{" "}
        <span className="text-secondary capitalize">{lastSegment}</span>{" "}
        Dashboard
      </Title>
      <SearchInput />
      <AthleteCard />
    </div>
  );
};
