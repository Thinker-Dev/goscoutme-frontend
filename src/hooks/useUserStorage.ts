import {
  Profile,
  Session,
  User,
  Athlete,
  Sport,
  Appmetadata,
  Organization,
  Scout,
} from "@/types/auth";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const defaultAppMetadata: Appmetadata = {
  provider: "",
  providers: [],
};

const defaultSport: Sport = {
  id: 0,
  name: "",
  public_id: 0,
};

const defaultOrganization: Organization = {
  id: 0,
  org_name: "",
  org_email: "",
  org_phone: "",
  org_mobile: "",
  org_document_url: "",
  profile_id: 0,
};

const defaultProfile: Profile = {
  id: 0,
  public_id: "",
  first_name: "",
  last_name: "",
  email: "",
  sex: "",
  birth_date: "",
  account_status: "",
  nationality: "",
  sport: defaultSport,
  phone: "",
  photo_url: "",
  mobile: "",
  address: "",
  affiliations: "",
  athlete: null as unknown as Athlete,
  organization: defaultOrganization,
  scout: null as unknown as Scout,
  sport_id: 0,
};

const defaultUser: User = {
  id: "",
  aud: "",
  role: "",
  email: "",
  email_confirmed_at: "",
  phone: "",
  confirmed_at: "",
  last_sign_in_at: "",
  app_metadata: defaultAppMetadata,
  created_at: "",
  updated_at: "",
  is_anonymous: false,
};

const defaultSession: Session = {
  access_token: "",
  token_type: "",
  expires_in: 0,
  expires_at: 0,
  refresh_token: "",
  user: defaultUser,
};

export const useUserStorage = () => {
  const [currentUser, setCurrentUser] = useState<boolean>(false);
  const pathname = usePathname();
  const [user, setUser] = useState<User>(defaultUser);
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [session, setSession] = useState<Session>(defaultSession);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    refetch();
    setIsLoading(false);
  }, []);

  const refetch = () => {
    const storedUser = localStorage.getItem("user");
    const storedProfile = localStorage.getItem("profile");
    const storedSession = localStorage.getItem("session");

    try {
      setUser(storedUser ? JSON.parse(storedUser) : defaultUser);
      setProfile(storedProfile ? JSON.parse(storedProfile) : defaultProfile);
      setSession(storedSession ? JSON.parse(storedSession) : defaultSession);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      setUser(defaultUser);
      setProfile(defaultProfile);
      setSession(defaultSession);
    }
  };

  useEffect(() => {
    if (pathname.includes(`${profile?.public_id}`)) {
      setCurrentUser(true);
    } else {
      setCurrentUser(false);
    }
  }, [pathname, profile?.public_id]);

  return { user, profile, session, currentUser, isLoading, refetch };
};
