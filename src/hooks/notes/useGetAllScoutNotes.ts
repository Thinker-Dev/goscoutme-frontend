import { useQuery } from "@tanstack/react-query";
import { privateInstance } from "../../lib/axios";

const fetchAllScoutsNotes = async (): Promise<ScoutslNote[]> => {
  const response = await privateInstance.get("/scoutsnotes/get_all_scout_note");
  return response.data;
};

export const useGetAllScoutsNotes = () => {
  return useQuery({
    queryKey: ["allScoutsNotes"],
    queryFn: fetchAllScoutsNotes,
    staleTime: 1000 * 60 * 5,
  });
};
