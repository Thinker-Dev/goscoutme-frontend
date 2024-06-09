"use client";

import { Athletes } from "@/components/athletes";
import { Filter } from "@/components/filter";
import useGetAthletes from "../../../hooks/useGetAthletes";
import useGetSportsPositions from "../../../hooks/useGetSport";
import { useUserStorage } from "../../../hooks/useUserStorage";

export default function Page() {
  const { profile } = useUserStorage();
  const { data: positions } = useGetSportsPositions(1);
  const { data: athletes, isLoading } = useGetAthletes({
    page: 0,
    items: 6,
  });

  return (
    <main className="flex min-h-[calc(100vh-116px)]">
      {isLoading ? (
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
