import { useQuery, useQueries } from "react-query";
export const FetchMovieList = (category, request) => {
  return useQuery(["movie-list", category], () => {
    return request(category);
  });
};

export const FetchParallelMovieList = (arr, fn) => {
  let result = [];
  const queryResults = useQueries(
    arr.map((id) => {
      return {
        queryKey: ["movie-list", id],
        queryFn: () => fn(id),
      };
    })
  );
  return queryResults;
};
