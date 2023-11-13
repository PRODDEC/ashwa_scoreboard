import React, { useEffect, useState } from "react";
import "./Fixture.css";
import ashwa from "../../assets/color-ashwa.png";
import illus from "../../assets/Football Player.gif";
import Row from "./Row";
import axios from 'axios';

const Fixture = () => {
  const week=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
  const[result, setResult] = useState([]);
  const date=new Date(Date.now()).getDate()
  const day=new Date(Date.now()).getDay()
  //console.log(date);
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await axios.get('http://14.139.189.219/fixtures/ashwa/result/all');
        //console.log(response.data.fixture_result); 
        setResult(response.data.fixture_result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResult();
  }, []); 


  return (
    <div id="fixture">
      <div className="container">
        <div className="logo">
          <img src={ashwa} alt="" />
        </div>
        <div className="head">FIXTURES</div>
        <div className="all">
          <div className="date">
            <h1>{date} / {week[day]}</h1>
          </div>
        </div>
        <div className="fixture-list">
          {result.map((data, index) => (

          
            <Row
              key={index}
              venue={data.match_venue}
              roundno={data.match_level}
              title={data.match_item}
              time={data.match_time}
              left_team={data.team_1}
              left_color={data.team_1}
              right_team={data.team_2}
              right_color={data.team_2}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Fixture;
