import React from "react";
import classes from "./MovieList.module.scss";
import NormalCarousel from "../Carousel/NormalCarousel";
import { THUMBNAIL_IMAGE_CDN } from "../../utils";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const MovieCard = ({ item }) => {
  return (
    <div className={classes.MovieCard}>
      <img
        className={classes.poster}
        src={`${THUMBNAIL_IMAGE_CDN}${item.poster_path}`}
        alt={item.title}
      />
      <div className={classes.playIcon}>
        <PlayCircleOutlineIcon style={{ fontSize: "5rem" }} />
      </div>
      <p>{item.title}</p>
    </div>
  );
};

function MovieList({ movies, redirect }) {
  return (
    <div className={classes.MovieList}>
      <h1 className={classes.category}>Upcoming</h1>
      <NormalCarousel items={movies} Item={MovieCard} redirect={redirect} />
    </div>
  );
}

export default MovieList;
