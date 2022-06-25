import { publicRoutes } from "./public";
import { privateRoutes } from "./private";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: "<div>Landing Page</div>" }];
  const routes = false ? publicRoutes : privateRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);
  return <>{element}</>;
};
