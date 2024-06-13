"use client";

import { Athletes } from "@/components/athletes";
import { Filter } from "@/components/filter";
import useGetAthletes from "../../../hooks/athletes/useGetAthletes";
import useGetSportsPositions from "../../../hooks/useGetSport";
import { useUserStorage } from "../../../hooks/useUserStorage";
import { ageCategoryState, filterState, searchQueryState } from "@/lib/recoil";
import { useRecoilState } from "recoil";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const { profile } = useUserStorage();
  const [checkedItems, setCheckedItems] = useRecoilState(filterState);
  const [selectedAge, setSelectedAge] = useRecoilState(ageCategoryState);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const { data: positions, isLoading: positionsLoading } =
    useGetSportsPositions(profile.sport.id);

  const { data: athletes, isLoading } = useGetAthletes({
    position: checkedItems.position,
    country: checkedItems.country,
    status: checkedItems.career,
    sex: checkedItems.sex,
    id: searchQuery,
    ageMax: selectedAge.ageMax,
    ageMin: selectedAge.ageMin,
    page: 0,
    items: 12,
  });

  return (
    <main className="flex min-h-[calc(100vh-116px)]">
      {isLoading && positionsLoading ? (
        <div className="w-full min-h-[calc(100vh-240px)] items-center justify-center flex space-x-1">
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce"></div>
        </div>
      ) : (
        <>
          <Athletes profile={profile} athletes={athletes} />
          <Filter positions={positions} />
        </>
      )}
    </main>
  );
}
