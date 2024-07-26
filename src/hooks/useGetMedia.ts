import { useQuery } from "@tanstack/react-query";
import { privateInstance } from "../lib/axios";
import { Position } from "@/types/auth";

const fetchMedia = async (athlete_id: number): Promise<Position[]> => {
  const response = await privateInstance.get("/media/get", {
    params: { athlete_id: athlete_id },
  });
  return response.data;
};

const useGetMedia = (athlete_id: number) => {
  return useQuery({
    queryKey: ["media", athlete_id],
    queryFn: () => fetchMedia(athlete_id),
  });
};

export default useGetMedia;
