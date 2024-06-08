import { useQuery } from "@tanstack/react-query";
import { privateInstance } from "../axios";
import { Position } from "@/types/auth";

const fetchSportsPositions = async (sportId: number): Promise<Position[]> => {
  const response = await privateInstance.get("/sports/get_sports_position", {
    params: { sport_id: sportId },
  });
  return response.data;
};

const useGetSportsPositions = (sportId: number) => {
  return useQuery({
    queryKey: ["sportsPositions", sportId],
    queryFn: () => fetchSportsPositions(sportId),
  });
};

export default useGetSportsPositions;
