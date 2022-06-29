import classes from "./MovieOverview.module.scss";

function MovieTrailer({ trailers = [], title }) {
  const sites = {
    site: "YouTube",
  };
  const url = {
    YouTube: "https://youtube.com/embed/",
  };
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.category}>{title}</h2>
      <div className={classes.trailer}>
        {trailers.map((el, index) => {
          const trailerSrc = url[sites["site"]];
          return (
            <iframe
              key={index}
              src={`${trailerSrc}${el.key}`}
              title={el.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieTrailer;
