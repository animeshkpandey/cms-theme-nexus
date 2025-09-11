import type { Route } from "./+types/services";
import Services from "~/pages/services";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Services" }, { name: "description", content: "" }];
}

export default function ServicesRoute() {
  return <Services />;
}
