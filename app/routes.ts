import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layouts/index.tsx", [
    index("routes/home.tsx"),
    route("about-us", "routes/about-us.tsx"),
  ]),
] satisfies RouteConfig;
