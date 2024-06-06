import { SignUpTypes } from "@/types/signUp";
import { atom } from "recoil";

export const appointmentState = atom({
  key: "appointmentState",
  default: false,
});

export const sportState = atom({
  key: "sportState",
  default: <string | null>null,
});

export const selectedtimeState = atom({
  key: "selectedtimeState",
  default: <string | null>null,
});

export const signUpState = atom<SignUpTypes>({
  key: "signUpState",
  default: {
    sport_id: "",
    email: "",
  },
});

export const selectedDateState = atom({
  key: "selectedDateState",
  default: new Date(),
});
