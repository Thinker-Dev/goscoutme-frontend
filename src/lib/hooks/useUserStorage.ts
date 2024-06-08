import { Profile, Session, User, Athlete } from "@/types/auth";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const useUserStorage = () => {
  const [currentUser, setCurrentUser] = useState<boolean>(false);
  const pathname = usePathname();
  const [user, setUser] = useState<User>();
  const [profile, setProfile] = useState<Profile>();
  const [athlete, setAthlete] = useState<Athlete>();
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const storedProfile = JSON.parse(localStorage.getItem("profile") || "{}");
    const storedAthlete = JSON.parse(localStorage.getItem("athlete") || "{}");
    const storedSession = JSON.parse(localStorage.getItem("session") || "{}");

    setUser(storedUser);
    setProfile(storedProfile);
    setAthlete(storedAthlete);
    setSession(storedSession);
  }, []);

  useEffect(() => {
    if (pathname.includes(`${profile?.public_id}`)) {
      setCurrentUser(true);
    } else {
      setCurrentUser(false);
    }
  }, [pathname, profile?.public_id]);

  return { user, profile, session, athlete, currentUser };
};
