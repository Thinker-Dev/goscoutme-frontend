import AboutUs from "@/components/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - GoScoutMe",
  description:
    "Learn about GoScoutMe's mission, solution, and team. We revolutionize the way athletes and scouts connect, empowering individuals and transforming the sports recruitment landscape.",
};

export default function AboutUsPage() {
  return <AboutUs />;
}
