import Layout from "../features/misc/Layout";
import Loader from "../features/misc/Loader";
import MovieOverview from "../features/MovieOverview/MovieOverview";
export const privateRoutes = [
  {
    path: "/",
    element: <Layout />,
    // element: <Loader />,
  },
  {
    path: "/overview/:movieId",
    element: <MovieOverview />,
  },
];
