import React, { FC, useRef, useState } from "react";
import { AthleteCard } from "../cards/athlete";
import { Title } from "../auth/createAccount";
import { SearchInput } from "../inputs/searchInput";
import { usePathname, useRouter } from "next/navigation";
import { AthleteSearchCard } from "../cards/athlete/search";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import useGetAllAthletes from "@/lib/hooks/useGetAllAthletes";

export const Athletes: FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const sportSegment = pathSegments[pathSegments.length - 2];
  const ref = useRef<LoadingBarRef>(null);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(2);
  const { athletes } = useGetAllAthletes({ page, items });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      ref.current?.continuousStart();

      if (lastSegment === "search") {
        router.push(
          `/${sportSegment}/search?q=${encodeURIComponent(searchQuery)}`
        );
      } else {
        router.push(
          `/${lastSegment}/search?q=${encodeURIComponent(searchQuery)}`
        );
      }
    }
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
            <span className="text-secondary capitalize">{lastSegment}</span>{" "}
            <span className="text-primary">Dashboard</span>
          </>
        )}
      </Title>
      <SearchInput
        onKeyDown={handleKeyDown}
        value={searchQuery}
        onChange={handleChange}
      />
      {lastSegment === "search" ? (
        <AthleteSearchCard data={athletes} />
      ) : (
        <AthleteCard data={athletes} />
      )}
    </div>
  );
};
