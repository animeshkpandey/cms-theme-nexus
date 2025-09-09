import type { Route } from "./+types/home";
import Home from "~/pages/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Nexus" }, { name: "description", content: "" }];
}

export default function HomeRoute() {
  return <Home />;
}
