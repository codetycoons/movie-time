import { request } from "../../utils";

export const FetchTrendingMovieList = (category) => {
  return request({
    url: `${category}/movie/day?api_key=${
      process.env.REACT_APP_TMDB_API_KEY
    }&language=en-US&include_adult=false&page=${
      Math.floor(Math.random() * 100) + 1
    }`,
  });
};

export const FetchDiscoverMovieList = (category) => {
  return request({
    url: `${category}/movie?api_key=${
      process.env.REACT_APP_TMDB_API_KEY
    }&language=en-US&include_adult=false&page=${
      Math.floor(Math.random() * 100) + 1
    }`,
  });
};

export const FetchOtherMovieList = (category) => {
  return request({
    url: `movie/${category}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false`,
  });
};

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
