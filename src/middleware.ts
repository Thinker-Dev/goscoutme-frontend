import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const profile = request.cookies.get("profile")?.value;
  const { pathname } = request.nextUrl;

  const getProfileData = (profile: string | undefined) => {
    if (profile) {
      try {
        return JSON.parse(profile);
      } catch (error) {
        console.error("Error parsing profile cookie:", error);
      }
    }
    return null;
  };

  const profileData = getProfileData(profile);

  const redirectTo = (url: string) => {
    return NextResponse.redirect(new URL(url, request.url));
  };

  const isAuthenticated = () => !!session;
  const isAthlete = () => profileData?.athlete;

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/athlete")) {
    if (!isAuthenticated()) {
      return redirectTo("/auth/login");
    }

    if (isAthlete()) {
      return redirectTo(`/athlete/${profileData.public_id}`);
    }
  }

  if (
    pathname === "/" ||
    pathname === "/auth/create-account" ||
    pathname === "/auth/login"
  ) {
    if (isAuthenticated()) {
      if (isAthlete()) {
        return redirectTo(`/athlete/${profileData.public_id}`);
      }
      if (profileData) {
        return redirectTo("/dashboard");
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/", "/athlete"],
};
