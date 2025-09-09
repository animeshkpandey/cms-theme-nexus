import type { Route } from "./+types/home";
import Home from "~/pages/home";
import useData from "~/components/hooks/useData";

export function meta({}: Route.MetaArgs) {
  const { meta } = useData();
  return [
    { title: meta.siteTitle },
    { name: "description", content: meta.siteDescription },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
