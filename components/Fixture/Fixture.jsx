import React, { useEffect, useState } from "react";
import "./Fixture.css";
import ashwa from "../../assets/color-ashwa.png";
import Row from "./Row";
import proddec from "../../assets/proddec.png";
import axios from 'axios';

const Fixture = () => {
  const week=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
  const[result, setResult] = useState([]);
  const date=new Date(Date.now()).getDate()
  const day=new Date(Date.now()).getDay()
  //console.log(date);
    const key = 'AIzaSyDPvKkCJl0GB7cimpBaMxjSkprBK7a6S-Q'; // Replace with your actual API key

    const fetchData = async () => {
      try {
        // Make an API call with Axios and the key parameter
        const response = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/13S4ukA-LM4WA75Ip7CaNKYyYfbbIHBMjsdt28H1azYM/values/fixtures!A2:G', {
          params: {
            key: key,
          },
        });
        setResult(response.data.values);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    useEffect(() => {
      // Initial API call
      fetchData();
      const intervalId = setInterval(() => {
        fetchData();
        
      }, 900000);
  
      return () => clearInterval(intervalId);
    }, []);
console.log(result);
  return (
    <div id="fixture">
    <img className="proddec" width={150} height={150} src={proddec} alt="" />
   <img className="logo"  width={150} height={150} src={ashwa} alt="" />
    <div className="container">
      <div className="head">FIXTURES</div>
      <div className="all">
        <div className="date">
          <h1>23rd WEDNESDAY</h1>
        </div>
      </div>
      <div className="fixture-list">

      {result.map((data, index) => (
            <Row
              key={index}
              venue={data[4]}
              roundno={data[5]}
              title={data[6]}
              time={data[3]}
              left_team={data[0]}
              left_color={data[0]}
              right_team={data[1]}
              right_color={data[1]}
            />
          ))}

        </div>
      </div>
      </div>
    
  );
}

export default Fixture



