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

interface Appmetadata {
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
  birt_date: string;
  account_status: string;
  nationality: string;
  sport_id: number;
  phone: null;
  mobile: null;
  address: string;
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
  leagues_played: null;
}
