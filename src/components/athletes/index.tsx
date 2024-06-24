"use client";

import React, { FC, useRef } from "react";
import { AthleteCard } from "../cards/athlete";
import { Title } from "../auth/createAccount";
import { SearchInput } from "../inputs/searchInput";
import { usePathname } from "next/navigation";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { Profile } from "@/types/auth";
import { AthleteSearchCard } from "../cards/athlete/search";
import { pageState, searchQueryState } from "@/lib/recoil";
import { useRecoilState } from "recoil";
import { useGetScoutsNotes } from "@/hooks/useGetScoutNotes";

interface Props {
  profile: Profile | undefined;
  athletes: any;
}

export const Athletes: FC<Props> = ({ profile, athletes }: Props) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const sportSegment = pathSegments[pathSegments.length - 2];
  const ref = useRef<LoadingBarRef>(null);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const [page, setPage] = useRecoilState(pageState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  return (
    <div className="pb-10 pr-12 h-[calc(100vh-113px)] overflow-auto styled-scroll-bar w-[77%]">
      <LoadingBar color="#1A83FF" ref={ref} />
      <Title className="mb-2 xs:pt-0">
        {lastSegment === "search" ? (
          <span className="capitalize">{sportSegment}</span>
        ) : (
          <>
            <span className="text-black">Your</span>{" "}
            <span className="text-secondary capitalize">
              {profile?.sport.name}
            </span>{" "}
            <span className="text-primary">Dashboard</span>
          </>
        )}
      </Title>
      <SearchInput value={searchQuery} onChange={handleChange} />
      {searchQuery ? (
        <AthleteSearchCard data={athletes} />
      ) : (
        <AthleteCard data={athletes} />
      )}
    </div>
  );
};
