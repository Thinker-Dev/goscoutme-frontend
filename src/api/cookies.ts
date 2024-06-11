"use server";

import { cookies } from "next/headers";

export async function createCookie(session?: string, profile?: string) {
  if (session) {
    cookies().set({
      name: "session",
      value: session,
      httpOnly: true,
      secure: true,
      path: "/",
    });
  }
  if (profile) {
    cookies().set({
      name: "profile",
      value: profile,
      httpOnly: true,
      secure: true,
      path: "/",
    });
  }
}

export async function deleteCookie() {
  cookies().set({
    name: "session",
    value: "",
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: -1,
  });
  cookies().set({
    name: "profile",
    value: "",
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: -1,
  });
}
