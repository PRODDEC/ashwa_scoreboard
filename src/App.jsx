import React, { useEffect } from "react"
import Scoreboard from "../components/Scoreboard/Scoreboard"
import "swiper/swiper-bundle.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import Fixture from "../components/Fixture/Fixture"

import io from 'socket.io-client';
import Imagepg from "../components/Imagepg"
const App = () => {
  useEffect(() => {
    const socket = io('ws://14.139.189.219/all/team/score/board/realtimeupdate/');
  
      // Event listener for connection success
      socket.on('connect', () => {
        console.log('Connected to WebSocket server');
      });
  
      // Event listener for receiving messages
      socket.on('message', (data) => {
        console.log('Received message:', data);
      });
  
      //Clean up the WebSocket connection on component unmount
      return () => {
        console.log('Disconnecting from WebSocket server');
        socket.disconnect();
      };
    }, []);
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
    </Swiper>
  )
}

export default App
