import { useQuery } from "react-query";
export const useFetchMovieDetails = (id, request, cat = "") => {
  return useQuery(["movie-detail", [id, cat]], () => {
    return request(id, cat);
  });
};
