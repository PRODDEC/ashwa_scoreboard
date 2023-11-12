import React, { useEffect, useState } from 'react';
import Scoreboard from "../components/Scoreboard/Scoreboard"
import "swiper/swiper-bundle.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
import Fixture from "../components/Fixture/Fixture"
//import io from 'socket.io-client'
import Imagepg from "../components/Imagepg"

const App = () => {
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://14.139.189.219/all/team/score/board/realtimeupdate/');

    socket.onerror = function (error) {
      console.log('WebSocket Error: ', error);
    };

    socket.onopen = function () {
      console.log('WebSocket Client Connected');
    };

    socket.onmessage = function (event) {
      try {
        const dataObject = JSON.parse(event.data);
      
        const isIdInArray = receivedData.some((item) => item.id === dataObject.id);
      
        if (isIdInArray) {
          setReceivedData((prevData) => {
            const newData = prevData.map((item) => {
              if (item.id === dataObject.id) {
                // Update the object at the specific index with the data from dataObject
                console.log('Updating object at index:', prevData.indexOf(item));
                return dataObject;
              } else {
                return item;
              }
            });
            return newData;
          });
        } else {
          setReceivedData((prevData) => [...prevData, dataObject]);
        }
      } catch (error) {
        console.error('Error parsing received data:', error);
      }
      
      
    };
    socket.onerror = function (error) {
      console.error('WebSocket Error:', error);
    };
    socket.onclose = function () {
      console.log('WebSocket Client Closed');
    };
    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);
console.log(receivedData);

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
