import MovieList from "../../../components/MovieList/MovieList";
import { FetchOtherMovieList } from "../../../features/Home/api/app";
import { FetchParallelMovieList } from "../../../hooks/useFetchMovieList";

function HomepageMovieCategoryList() {
  const category = ["upcoming", "top_rated"];
  const moviesListingData = FetchParallelMovieList(
    category,
    FetchOtherMovieList
  );

  return (
    <div>
      {moviesListingData.map(
        (movie, index) =>
          !movie.isLoading && (
            <MovieList
              key={index}
              movies={movie?.data?.data?.results}
              redirect="/overview/"
            />
          )
      )}
    </div>
  );
}

export default HomepageMovieCategoryList;
