import { FilterTypes } from "@/types/filter";
import { Menu } from "@/types/menu";
import { genderData } from "./genderData";
import { athleteStatusData } from "./athleteStatusData";
import { COUNTRIES } from "./countriesData";

const filterData: FilterTypes[] = [
  {
    title: {
      singular: "position",
      plural: "positions",
    },
    filters: [
      {
        value: ["Stricker"],
      },
      {
        value: ["Full Back"],
      },
      {
        value: ["Center Back"],
      },
      {
        value: ["Goal Keeper"],
      },
    ],
  },
  {
    title: {
      singular: "sex",
    },
    filters: genderData.map((item) => ({
      value: [item.value],
    })),
  },
  {
    title: {
      singular: "age category",
      plural: "age categories",
    },
    filters: [
      {
        value: ["5-7", "8-11"],
      },
      {
        value: ["12-14", "15-17"],
      },
    ],
  },
  {
    title: {
      singular: "career",
    },
    filters: athleteStatusData.map((item) => ({
      value: [item.value],
    })),
  },
  {
    title: {
      singular: "region",
      plural: "regions",
    },
    filters: COUNTRIES.map((item) => ({
      value: [item.name],
    })),
  },
  {
    title: {
      singular: "country",
      plural: "countries",
    },
    filters: COUNTRIES.map((item) => ({
      value: [item.name],
    })),
  },
];
export default filterData;
