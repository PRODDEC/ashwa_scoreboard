import React, { useEffect, useState } from 'react';
import "./Scoreboard.css"
//import { useEffect } from 'react';
import Board from "./Board"
import ashwa from "../../assets/color-ashwa.png"
// import scoreboard_data from "../../constants"
import bg from "../../assets/bg.png"

// const list=[
//   {
//     item: "Hockey",
//     points: Math.floor(Math.random() * 100) + 1,
//   },
//   {
//     item: "Volleyball",
//     points: 75,
//   },
//   {
//     item: "Table Tennis",
//     points: 55,
//   },
//   {
//     item: "Badminton",
//     points: Math.floor(Math.random() * 100) + 1,
//   },
//   {
//     item: "Tennis",
//     points: Math.floor(Math.random() * 100) + 1,
//   },
//   {
//     item: "Badminton",
//     points: Math.floor(Math.random() * 100) + 1,
//   },
//   {
//     item: "Tennis",
//     points: Math.floor(Math.random() * 100) + 1,
//   },
// ]

const Scoreboard = () => {
  const [totalData, setTotalData] = useState([]);
  const [redData, setRedData] = useState([]);
  const [blueData, setBlueData] = useState([]);
  const [greenData, setGreenData] = useState([]);
  const [yellowData, setYellowData] = useState([]);
  const List={
    RED:redData,
    BLUE:blueData,
    GREEN:greenData,
    YELLOW:yellowData
    }
  const setupWebSocket = (socketUrl, setData) => {
    const socket = new WebSocket(socketUrl);

    socket.onmessage = function (event) {
      try {
        const dataObject = JSON.parse(event.data);
        

        setData((prevData) => {
          const isIdInArray = prevData.some((item) => item.id === dataObject.item_id);
          console.log(isIdInArray);
          if (isIdInArray) {
            return prevData.map((item) =>
              item.id === dataObject.item_id ? dataObject : item
            );
          } else {
            return [...prevData, dataObject].slice(-4);
          }
        });
      } catch (error) {
        console.error('Error parsing received data:', error);
      }
    };

    socket.onclose = function () {
      console.log('WebSocket Client Closed');
    };

    return () => {
      socket.close();
    };
  };

  useEffect(() => {
    const socket1 = setupWebSocket('ws://14.139.189.219/all/team/score/board/realtimeupdate/', setTotalData);
    const socket2 = setupWebSocket('ws://14.139.189.219/red/team/score/board/realtimeupdate/', setRedData);
    const socket3 = setupWebSocket('ws://14.139.189.219/blue/team/score/board/realtimeupdate/', setBlueData);
    const socket4 = setupWebSocket('ws://14.139.189.219/green/team/score/board/realtimeupdate/', setGreenData);
    const socket5 = setupWebSocket('ws://14.139.189.219/yellow/team/score/board/realtimeupdate/', setYellowData);

    // Clean up all WebSocket connections when the component unmounts
    return () => {
      socket1();
      socket2();
      socket3();
      socket4();
      socket5();
    };
  }, []);
// console.log(totalData);
// console.log(redData);
// console.log(yellowData);
// console.log(blueData);
// console.log(greenData);
  console.log(List);
  const sortedTeams = totalData.sort(
    (a, b) => a.score > b.score
  )

  return (
    <div id="scoreboard">
      <img height={150} width={150} src={ashwa} alt="Ashwa" />
      <div className="container">
        {sortedTeams.map((data, index) => (
          <Board
          key={index}
          rank={index + 1}
          team={data.team}
          title_color={data.team}
          points_color={data.team}
          lists={List[data.team]}
          totalSubPoints={data.score}
        />
        ))}
      </div>
    </div>
  )
}

export default Scoreboard
