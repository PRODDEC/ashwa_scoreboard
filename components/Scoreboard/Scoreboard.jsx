import React, { useEffect, useState } from 'react';
import "./Scoreboard.css"
//import { useEffect } from 'react';
import Board from "./Board"
import ashwa from "../../assets/color-ashwa.png"
// import scoreboard_data from "../../constants"
import bg from "../../assets/bg.png"


function arraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}


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

    useEffect(() => {    
      const sortedTeams = [...totalData].sort((a, b) => a.score > b.score);
      if (!arraysEqual(sortedTeams, totalData)) {
        setTotalData(sortedTeams);
      }
    }, [totalData]);




    const sockets = {};
    const setupWebSocket = async (socketUrl, setData) => {
    const socket = new WebSocket(socketUrl);

    socket.onmessage = function (event) {
      try {
        const dataObject = JSON.parse(event.data);
        

        setData((prevData) => {
          const isIdInArray = prevData.some((item) => item.id === dataObject.id);
          console.log(isIdInArray);
          if (isIdInArray) {
            return prevData.map((item) =>
              item.id === dataObject.id ? dataObject : item
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
    const runWebSocketConnections = async () => {
      await setupWebSocket('ws://14.139.189.219/all/team/score/board/realtimeupdate/', setTotalData);
      await setupWebSocket('ws://14.139.189.219/red/team/score/board/realtimeupdate/', setRedData);
      await setupWebSocket('ws://14.139.189.219/blue/team/score/board/realtimeupdate/', setBlueData);
      await setupWebSocket('ws://14.139.189.219/green/team/score/board/realtimeupdate/', setGreenData);
      await setupWebSocket('ws://14.139.189.219/yellow/team/score/board/realtimeupdate/', setYellowData);
    };

    runWebSocketConnections();

    // Clean up all WebSocket connections when the component unmounts
    return () => {
      Object.values(sockets).forEach((socket) => socket.close());
    };
  }, []);

// console.log(redData);
// console.log(yellowData);
// console.log(blueData);
// console.log(greenData);
  console.log(List);
  console.log(totalData);
  return (
    <div id="scoreboard">
      <img height={150} width={150} src={ashwa} alt="Ashwa" />
      <div className="container">
        {totalData.map((data, index) => (
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
