import React from "react";
import CarouselComponent from "../../../components/Carousel/Carousel";
import { CarouselItem } from "../../../components/Carousel/CarouselItem";

function HomepageCarousel({ data }) {
  return (
    <div>
      <CarouselComponent
        items={data.slice(0, 10)}
        Item={CarouselItem}
        redirect="/overview/"
      ></CarouselComponent>
    </div>
  );
}

export default HomepageCarousel;
