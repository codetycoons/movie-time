import React from "react";
import HomepageCarousel from "../Home/components/HomepageCarousel";
import HomepageMovieCategoryList from "../Home/components/HomepageMovieCategoryList";
import { FetchMovieList } from "../../hooks/useFetchMovieList";
import { FetchTrendingMovieList } from "../../features/auth/app";
import Loader from "./Loader";

function Layout() {
  const { isLoading, data, isFetching } = FetchMovieList(
    "trending",
    FetchTrendingMovieList
  );

  if (isLoading || isFetching)
    return <Loader isLoading={isLoading || isFetching} />;
  return (
    <>
      <HomepageCarousel data={data?.data?.results.slice(0, 5)} />
      <HomepageMovieCategoryList />
    </>
  );
}

export default Layout;
