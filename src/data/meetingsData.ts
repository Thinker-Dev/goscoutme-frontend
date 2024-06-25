import { MeeetingTypes } from "@/types/meetings";

export const meetingsData: MeeetingTypes[] = [
  {
    id: "meeting1",
    athlete: {
      id: "HI3304",
      name: "John Doe",
      age: 29,
      positionPlayed: "Striker",
    },
    date: "8 August 2024 10:00 AM / Thursday ",
    date2: "8 August 2024 / 03:00 AM / Thursday Argentina ART (UTC -3)",
  },
  {
    id: "meeting2",
    athlete: {
      id: "AR1152",
      name: "John Doe",
      age: 29,
      positionPlayed: "Goal Keeper",
    },
    date: "16 June 2024 2:00 PM / Friday ",
    date2: "16 June 2024 / 07:00 PM / Friday Milan CEST (UTC +1)",
  },
  {
    id: "meeting3",
    athlete: {
      id: "NA7690  ",
      name: "John Doe",
      age: 29,
      positionPlayed: "Sweeper",
    },
    date: "13 April 2024 04:00 PM / Wednesday ",
    date2: "13 April 2024 / 1:00 PM / Wednesday Glasgow GMT (UTC +0)",
  },
];
