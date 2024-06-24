"use client";

import { Athletes } from "@/components/athletes";
import { Filter } from "@/components/filter";
import useGetAthletes from "../../../hooks/athletes/useGetAthletes";
import useGetSportsPositions from "../../../hooks/useGetSport";
import { useUserStorage } from "../../../hooks/useUserStorage";
import {
  ageCategoryState,
  filterState,
  pageState,
  searchQueryState,
} from "@/lib/recoil";
import { useRecoilState } from "recoil";
import { useGetAllScoutsNotes } from "@/hooks/notes/useGetAllScoutNotes";

export default function Page() {
  const { profile } = useUserStorage();
  const [checkedItems] = useRecoilState(filterState);
  const [selectedAge] = useRecoilState(ageCategoryState);
  const [searchQuery] = useRecoilState(searchQueryState);
  const [page] = useRecoilState(pageState);
  const {
    data: scoutsNotes,
    isLoading: scoutsNotesLoading,
    refetch: scoutsNotesRefetch,
  } = useGetAllScoutsNotes();

  const { data: positions, isLoading: positionsLoading } =
    useGetSportsPositions(profile.sport.id);

  const { data: athletes, isLoading } = useGetAthletes({
    position: checkedItems.position,
    country: checkedItems.country,
    status: checkedItems.career,
    sex: checkedItems.sex,
    id: searchQuery.toLowerCase(),
    ageMax: selectedAge.ageMax,
    ageMin: selectedAge.ageMin,
    page: page,
    items: 9,
  });

  return (
    <main className="flex min-h-[calc(100vh-116px)]">
      {isLoading && positionsLoading && scoutsNotesLoading ? (
        <div className="w-full min-h-[calc(100vh-240px)] items-center justify-center flex space-x-1">
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-5 w-5 bg-primary rounded-full animate-bounce"></div>
        </div>
      ) : (
        <>
          <Athletes
            profile={profile}
            athletes={athletes}
            scoutsNotes={scoutsNotes}
            scoutsNotesRefetch={scoutsNotesRefetch}
          />
          <Filter positions={positions} />
        </>
      )}
    </main>
  );
}
