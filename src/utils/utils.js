export const POSTER_IMAGE_CDN = "https://image.tmdb.org/t/p/original/";
export const THUMBNAIL_IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";

let debounceTimer;
export const debounce = (cb, delay) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    cb();
    debounceTimer = undefined;
  }, delay);
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
