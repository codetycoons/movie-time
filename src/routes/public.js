import { AuthRoutes } from "../features/auth/routes";
import Landing from "../features/misc/Landing";
export const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
