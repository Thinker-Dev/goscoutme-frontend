import { useQuery } from "@tanstack/react-query";
import { Athlete } from "@/types/auth"; // Adjust the path as necessary
import { privateInstance } from "../../lib/axios";

const fetchAthleteById = async (id: string) => {
  const response = await privateInstance.get("/profile/get_athlete_by_id", {
    params: { id },
  });
  return response.data;
};

const useGetAthleteById = (id: string) => {
  return useQuery<Athlete, Error>({
    queryKey: ["athlete", id],
    queryFn: () => fetchAthleteById(id),
    enabled: !!id, // Ensure the query only runs if id is available
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useGetAthleteById;
