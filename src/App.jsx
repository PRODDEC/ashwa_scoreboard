import React from 'react';
import Scoreboard from "../components/Scoreboard/Scoreboard"
import "swiper/swiper-bundle.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import Fixture from "../components/Fixture/Fixture"
//import io from 'socket.io-client'
import Imagepg from "../components/Imagepg"
const App = () => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      slidesPerView={1}
      autoplay={{
        delay: 100000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Scoreboard />
      </SwiperSlide>
      <SwiperSlide>
       <Imagepg />
      </SwiperSlide>
      <SwiperSlide>
        <Fixture />
      </SwiperSlide>
      {/* <SwiperSlide>
        <Winners />
      </SwiperSlide> */}
    </Swiper>
  )
}

export default App
