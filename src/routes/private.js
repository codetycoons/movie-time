import Layout from "../features/misc/Layout";
import MovieOverview from "../features/MovieOverview/components/MovieOverview";
export const privateRoutes = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/overview/:movieId",
    element: <MovieOverview />,
  },
];
