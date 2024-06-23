export interface IUserResponse {
  profile: Profile;
  session: Session;
  user: User;
  athlete: Athlete;
}

export interface Session {
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: number;
  refresh_token: string;
  user: User;
}

export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: Appmetadata;
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
}

export interface Appmetadata {
  provider: string;
  providers: string[];
}

export interface Profile {
  id: number;
  public_id: string;
  first_name: string;
  last_name: string;
  email: string;
  sex: string;
  birth_date: string;
  account_status: string;
  nationality: string;
  sport_id: number;
  phone: string;
  mobile: string;
  affiliations: string;
  address: string;
  sport: Sport;
  athlete: Athlete;
  scout: Scout;
  organization: Organization;
}

export interface Athlete {
  id: number;
  profile: Profile;
  citzenship: string;
  age: number;
  height: number;
  height_metric: string;
  weight: number;
  weight_metric: string;
  status: string;
  leagues_played: string;
  sport_position: Position;
  media: Media[];
}

export interface Media {
  id: number;
  athlete_id: number;
  name: string;
  type: string;
  media_url: string;
}
export interface Position {
  id: number;
  sportId: number;
  name: string;
}

export interface Sport {
  id: number;
  public_id: number;
  name: string;
}

export interface Organization {
  id: number;
  org_name: null;
  org_email: string;
  org_phone: string;
  org_mobile: string;
  org_document_url: null;
  profile_id: number;
}

export interface Scout {
  id: number;
  profile_id: number;
}
