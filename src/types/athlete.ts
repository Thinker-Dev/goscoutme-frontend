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
  status: "red" | "gray" | "orange" | undefined;
  otherPositionPlayed: string;
}
