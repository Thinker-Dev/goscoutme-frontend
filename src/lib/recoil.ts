import { atom } from "recoil";

export const appointmentState = atom({
  key: "appointmentState",
  default: false,
});

export const selectedtimeState = atom({
  key: "selectedtimeState",
  default: <string | null>null,
});

export const selectedDateState = atom({
  key: "selectedDateState",
  default: new Date(),
});
