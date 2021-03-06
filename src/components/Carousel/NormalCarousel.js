import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "./swiper.scss";
SwiperCore.use([Pagination, Navigation]);

function NormalCarousel({ items, Item, redirect = "" }) {
  const navigate = useNavigate();
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={10}
      loop={false}
      loopFillGroupWithBlank={true}
      navigation={true}
      pagination={false}
      breakpoints={{
        350: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        390: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1268: {
          slidesPerView: 6,
        },
      }}
      className="mySwiper"
    >
      {items.map((item, i) => {
        return (
          <SwiperSlide
            key={i}
            onClick={() => redirect && navigate(`${redirect}${item.id}`)}
          >
            <Item item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default NormalCarousel;
