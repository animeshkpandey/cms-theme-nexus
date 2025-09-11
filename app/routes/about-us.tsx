import type { Route } from "./+types/about-us";
import AboutUs from "~/pages/about-us";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About Us" }, { name: "description", content: "" }];
}

export default function AboutUsRoute() {
  return <AboutUs />;
}
