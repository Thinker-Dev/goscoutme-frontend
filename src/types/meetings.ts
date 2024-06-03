interface AthleteType {
  id: string;
  name: string;
  age: number;
  positionPlayed: string;
}

export interface MeeetingTypes {
  id: string;
  athlete: AthleteType;
  date: string;
  date2: string;
}
