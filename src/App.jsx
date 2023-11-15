
import React from 'react';
// import Scoreboard from "../components/Scoreboard/Scoreboard"
import "swiper/swiper-bundle.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import Fixture from "../components/Fixture/Fixture"
// import Winners from '../components/Winners/Winners';
//import io from 'socket.io-client'
import Imagepg from "../components/Imagepg"
import Excelboard from '../components/Scoreboard/excelboard';
// import ashwa from "../assets/ashwa.png";

const App = () => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
       <Imagepg />
      </SwiperSlide>
      <SwiperSlide>
        {/* <Scoreboard /> */}
        <Excelboard/>
      </SwiperSlide>
      <SwiperSlide>
        <Fixture />
      </SwiperSlide>
      {/* <SwiperSlide>
        <Winners />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default App;
