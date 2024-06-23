import { useQuery } from "@tanstack/react-query";
import { privateInstance } from "../lib/axios";

const fetchScoutsNotes = async (athlete_id: string): Promise<ScoutslNote> => {
  const response = await privateInstance.get("/scoutsnotes/get_scout_note", {
    params: { athlete_id },
  });
  return response.data;
};

export const useGetScoutsNotes = (athlete_id: string) => {
  return useQuery({
    queryKey: ["scoutsNotes", athlete_id],
    queryFn: () => fetchScoutsNotes(athlete_id),
    enabled: !!athlete_id,
    staleTime: 1000 * 60 * 5,
  });
};
