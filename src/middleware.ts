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

  if (pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (profileData?.athlete) {
      return NextResponse.redirect(
        new URL(`/athlete/${profileData.public_id}`, request.url)
      );
    }
  } else if (
    pathname === "/" ||
    pathname === "/auth/create-account" ||
    pathname === "/auth/login" ||
    pathname === "/auth/create-account/scout/sport"
  ) {
    if (session) {
      if (profileData?.athlete) {
        return NextResponse.redirect(
          new URL(`/athlete/${profileData.public_id}`, request.url)
        );
      } else if (profileData) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }
  } else if (pathname.startsWith("/athlete")) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (profileData?.athlete) {
      return NextResponse.redirect(
        new URL(`/athlete/${profileData.public_id}`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/", "/athlete"],
};
