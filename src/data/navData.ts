import { sportState } from "@/lib/recoil";
import { Menu } from "@/types/menu";
import { useRecoilState } from "recoil";

export const menuData: Menu[] = [
  {
    title: "Home",
    path: "/#",
  },
  {
    title: "Sport",
    path: "/sport",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Reach Out to Us",
    path: "/reach-out-to-us",
  },
  {
    title: "Subscription Plan",
    path: "/subscription-plan",
  },
  {
    title: "Create Account",
    path: "/auth/sport",
  },
  {
    title: "Login",
    path: "/auth/login",
  },
];
