import { request } from "../../../utils";
export const FetchMovieDetails = (id, category) => {
  return request({
    url: `movie/${id}${category ? "/" + category : ""}?api_key=${
      process.env.REACT_APP_TMDB_API_KEY
    }&language=en-US`,
  });
};

export const FetchMovieMoreDetails = (id, category) => {
  return request({
    url: `movie/${category}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false`,
  });
};
