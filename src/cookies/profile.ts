"use server";

import { cookies } from "next/headers";

export async function createProfileCookie(profile?: string) {
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

export async function deleteProfileCookie() {
  cookies().set({
    name: "profile",
    value: "",
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: -1,
  });
}
