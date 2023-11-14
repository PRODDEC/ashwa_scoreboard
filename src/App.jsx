import React from "react";
import ashwa from "../assets/color-ashwa.png";
import { Scoreboard, Fixture, Winners } from "../components";

//Swiper
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

const App = () => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      autoplay={{
        delay: 1000000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
       <Imagepg />
      </SwiperSlide>
      <SwiperSlide>
        <Scoreboard />
      </SwiperSlide>
      <SwiperSlide>
        <Fixture />
      </SwiperSlide>
      <SwiperSlide>
        <Winners />
      </SwiperSlide>
    </Swiper>
  );
};

export default App;
