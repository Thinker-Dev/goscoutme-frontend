import { useEffect, useState } from "react";
import { privateInstance } from "../axios";
import { Athlete } from "@/types/auth";

interface IGetAthletes {
  sex?: string;
  ageMin?: number;
  ageMax?: number;
  status?: string;
  country?: string;
  page?: number;
  items?: number;
}

const useGetAthlete = ({
  sex,
  ageMin,
  ageMax,
  status,
  country,
  page,
  items,
}: IGetAthletes) => {
  const [athletes, setAthletes] = useState<Athlete[]>([]);

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const response = await privateInstance.get("/profile/get_athletes", {
          params: {
            sex,
            ageMin,
            ageMax,
            status,
            country,
            page,
            items,
          },
        });
        setAthletes(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAthletes();
  }, [sex, ageMin, ageMax, status, country, page, items]);

  return { athletes };
};

export default useGetAthlete;
