import classes from "./MovieOverview.module.scss";
import { THUMBNAIL_IMAGE_CDN } from "../../../utils";
function MovieCast({ cast = [], title }) {
  return (
    <div className={classes.Wrapper}>
      <h2 className={classes.category}>{title}</h2>
      <div className={classes.cast}>
        {cast.map((el, index) => {
          return (
            <img
              key={index}
              src={`${THUMBNAIL_IMAGE_CDN}${el.profile_path}`}
              alt={el.character}
              title={el.character}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieCast;
