import { useState, useEffect } from "react";
import { Athlete } from "@/types/auth"; // Adjust the path as necessary
import { privateInstance } from "../axios";

interface Props {
  id: string;
}

const useGetAthleteById = ({ id }: Props) => {
  const [athlete, setAthlete] = useState<Athlete | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAthlete = async () => {
      setLoading(true);
      try {
        const response = await privateInstance.get(
          `/profile/get_athlete_by_id`,
          {
            params: { id },
          }
        );
        setAthlete(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchAthlete();
    }
  }, [id]);

  return { athlete, loading, error };
};

export default useGetAthleteById;
