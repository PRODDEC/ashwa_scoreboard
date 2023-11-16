import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imagepg from "../components/Imagepg";
import Excelboard from "../components/Scoreboard/excelboard";
import "./App.css";

const App = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // Adjust settings for mobile view if needed
        },
      },
    ],
  };

  return (
    <div className="app">
    <Slider {...sliderSettings}>
      <div>
        <Imagepg />
      </div>
      <div>
        {/* <Scoreboard /> */}
        <Excelboard />
      </div>
      {/* Add more slides as needed */}
    </Slider>
    </div>
  );
};

export default App;

