import { useFetchMovieDetails } from "../../../hooks/useFetchMovieDetail";
import { FetchMovieDetails } from "../api/app";
import { useParams } from "react-router-dom";
import CarouselComponent from "../../../components/Carousel/Carousel";
import { CarouselItem } from "../../../components/Carousel/CarouselItem";
import MovieList from "../../../components/MovieList/MovieList";
import MovieTrailer from "./MovieTrailer";
import MovieCast from "./MovieCast";
import Loader from "../../misc/Loader";

function MovieOverview() {
  const { movieId } = useParams();

  const { data: movieOverview, isLoading } = useFetchMovieDetails(
    movieId,
    FetchMovieDetails
  );
  const { data: similarMovies, isLoading: isMoreLoading } =
    useFetchMovieDetails(movieId, FetchMovieDetails, "similar");
  const { data: movieVideo, isLoading: isVideoLoading } = useFetchMovieDetails(
    movieId,
    FetchMovieDetails,
    "videos"
  );
  const { data: movieCredits, isLoading: isCreditsLoading } =
    useFetchMovieDetails(movieId, FetchMovieDetails, "credits");

  if (isLoading || isMoreLoading || isVideoLoading || isCreditsLoading)
    return (
      <Loader
        isLoading={
          isLoading || isMoreLoading || isVideoLoading || isCreditsLoading
        }
      />
    );

  return (
    <div>
      <CarouselComponent items={[movieOverview?.data]} Item={CarouselItem} />
      <MovieTrailer trailers={movieVideo?.data?.results} title="Trailer" />
      <MovieCast cast={movieCredits?.data?.cast.slice(0, 5)} title="Cast" />
      <MovieList movies={similarMovies?.data?.results} redirect="/overview/" />
    </div>
  );
}

export default MovieOverview;
