import { useEffect, useState } from "react";
import { privateInstance } from "../axios";
import { Athlete } from "@/types/auth";

interface IGetAllAthletes {
  page?: number;
  items?: number;
}

const useGetAllAthletes = ({ page, items }: IGetAllAthletes) => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAthletes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await privateInstance.get(
          "/profile/get_all_athletes",
          {
            params: {
              page,
              items,
            },
          }
        );
        setAthletes(response.data);
      } catch (err) {
        setError("An error occurred while fetching athletes.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAthletes();
  }, [page, items]);

  return { athletes, loading, error };
};

export default useGetAllAthletes;
