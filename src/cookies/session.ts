"use server";

import { cookies } from "next/headers";

export async function createSessionCookie(session?: string) {
  if (session) {
    cookies().set({
      name: "session",
      value: session,
      httpOnly: true,
      secure: true,
      path: "/",
    });
  }
}

export async function deleteSessionCookie() {
  cookies().set({
    name: "session",
    value: "",
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: -1,
  });
}
