import { publicRoutes } from "./public";
import { privateRoutes } from "./private";
import { useRoutes } from "react-router-dom";
import { useAuth } from "../lib/auth";

export const AppRoutes = () => {
  const { getUser } = useAuth();

  // const commonRoutes = [{ path: "/", element: root }];
  const routes = getUser() ? privateRoutes : publicRoutes;
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
