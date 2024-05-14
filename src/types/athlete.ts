import { TagsTypes } from "./tags";

export interface AthleteType {
  id: number;
  positionPlayed: string;
  name: string;
  level: "Amateur" | "Professional";
  sex: string;
  age: string;
  height: string;
  weight: string;
  country: string;
  region: string;
  gameAppearances: string;
  minutesPlayed: string;
  gamesStarted: string;
  careerGoals: string;
  tag: number;
  otherPositionPlayed: string;
}
