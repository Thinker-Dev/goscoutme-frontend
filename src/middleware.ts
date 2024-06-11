import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const profile = request.cookies.get("profile")?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (profile) {
      const profileData = JSON.parse(profile);
      try {
        if (profileData.athlete) {
          return NextResponse.redirect(
            new URL(`/${profileData.public_id}`, request.url)
          );
        }
      } catch (error) {
        console.error("Error parsing profile cookie:", error);
      }
    }
  } else if (pathname === "/" || pathname === "/auth/login") {
    if (session) {
      if (profile) {
        const profileData = JSON.parse(profile);
        try {
          if (profileData.athlete) {
            return NextResponse.redirect(
              new URL(`/${profileData.public_id}`, request.url)
            );
          } else {
            return NextResponse.redirect(new URL("/dashboard", request.url));
          }
        } catch (error) {
          console.error("Error parsing profile cookie:", error);
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/"],
};
