import { SignUpTypes } from "@/types/signUp";
import { atom } from "recoil";

export const appointmentState = atom({
  key: "appointmentState",
  default: false,
});

export const searchQueryState = atom({
  key: "searchQueryState",
  default: "",
});

export const selectedtimeState = atom({
  key: "selectedtimeState",
  default: <string | null>null,
});

export const signUpState = atom<SignUpTypes>({
  key: "signUpState",
  default: {
    sport_id: 0,
    email: "",
  },
});

export const selectedDateState = atom({
  key: "selectedDateState",
  default: new Date(),
});

export const ageCategoryState = atom({
  key: "ageCategoryState",
  default: { ageMin: 0, ageMax: 0 },
});

export const filterState = atom<{ [key: string]: string }>({
  key: "filterState",
  default: {},
});
