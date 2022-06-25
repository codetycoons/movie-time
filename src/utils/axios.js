import axios from "axios";
const baseurl = "https://api.themoviedb.org/3/";
const client = axios.create({ baseURL: baseurl });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN}`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
