import React from "react";
import Carousel from "react-material-ui-carousel";
import classes from "./Carousel.module.scss";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

function CarouselComponent({ items, Item, redirect }) {
  return (
    <div className={classes.Carousel}>
      <Carousel
        autoPlay={true}
        indicators={false}
        animation="fade"
        duration={800}
        swipe={false}
        IndicatorIcon={<HorizontalRuleIcon />}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} redirect={redirect} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
