import classes from "./Carousel.module.scss";
import imdb from "../../assests/imdb.png";
import ButtonComponent from "../Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import Stack from "@mui/material/Stack";
import { primarytheme, secondarytheme } from "../../utils";
import { POSTER_IMAGE_CDN } from "../../utils";
import { useNavigate } from "react-router-dom";

export function CarouselItem({ item, redirect = "" }) {
  const navigate = useNavigate();
  return (
    <div
      className={classes.Item}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 60%),url(${POSTER_IMAGE_CDN}${item.backdrop_path})`,
      }}
    >
      <div className={classes.wrapper}>
        <h1>{item.title}</h1>
        <div className={classes.rating}>
          <img src={imdb} alt="rating" />
          <span>{item.vote_average}</span>
        </div>
        <p>Release Date&nbsp;:&nbsp;{item.release_date}</p>
        <p>{item.overview}</p>
        <div>
          <Stack direction="row" spacing={2}>
            <ButtonComponent
              text="Play"
              variant="contained"
              icon={<PlayArrowIcon />}
              size="large"
              theme={primarytheme}
              color="primary"
              onClick={() => redirect && navigate(`${redirect}${item.id}`)}
            />
            <ButtonComponent
              text="More Info"
              variant="outlined"
              icon={<InfoIcon />}
              size="large"
              theme={secondarytheme}
              color="primary"
              onClick={() => redirect && navigate(`${redirect}${item.id}`)}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}
