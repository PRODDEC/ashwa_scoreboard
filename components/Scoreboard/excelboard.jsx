import React, { useState, useEffect } from 'react';
import bg from "../../assets/bg.png"
import ashwa from "../../assets/ashwa.png"
import proddec from "../../assets/proddec.png"
import Board from "./Board"
import "./Scoreboard.css"
import axios from 'axios';



const Excelboard= () => {
  const [data, setData] = useState([]);
 const [sortedData, setSortedData] = useState([]);

  const key = 'AIzaSyDPvKkCJl0GB7cimpBaMxjSkprBK7a6S-Q'; // Replace with your actual API key

  const fetchData = async () => {
    try {
      // Make an API call with Axios and the key parameter
      const response = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/13S4ukA-LM4WA75Ip7CaNKYyYfbbIHBMjsdt28H1azYM/values/item point!A2:G', {
        params: {
          key: key,
        },
      });
      setData(response.data.values);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const Scoreboard = () => {
    const teamObject = {};
  
    // Iterate through the data and organize it by teams
    data.forEach(row => {
      const teamName = row[2];
      const subItem = {
        id: row[0],
        item: row[1],
        // color: row[2],
        points: parseInt(row[3], 10),
        subItemId: parseInt(row[4], 10),
      };
  
      if (!teamObject[teamName]) {
        teamObject[teamName] = {
          team: teamName,
          subItems: [],
          totalPoints: 0, // Initialize totalPoints for each team
        };
      }
  
      // Add the latest subitem and limit the list to 4
      teamObject[teamName].subItems.unshift(subItem);
      if (teamObject[teamName].subItems.length > 4) {
        teamObject[teamName].subItems.pop(); // Remove the oldest subitem if the limit is exceeded
      }
  
      teamObject[teamName].totalPoints += subItem.points; // Accumulate totalPoints
    });
  
    // Convert the object into an array of team objects
    const teamArray = Object.values(teamObject);
    const sortedTeams = teamArray.sort((a, b) => parseFloat(b.totalPoints) - parseFloat(a.totalPoints));
  
    console.log(sortedTeams);
    setSortedData(sortedTeams);
  }
  

      // return teamArray;

    // const teamsWithTotalSubPoints = {};
  
    // data.forEach(row => {
    //   const teamId = row[2]; // Assuming the team name is at index 1 in each row
    //   const subPoints = parseInt(row[3], 10); // Assuming sub_points are at index 3 and converting to integer
  
    //   if (!teamsWithTotalSubPoints[teamId]) {
    //     teamsWithTotalSubPoints[teamId] = 0;
    //   }
  
    //   teamsWithTotalSubPoints[teamId] += subPoints;
    // });
  
  
    // // Convert the object into an array of objects
    // const teamsArray = Object.keys(teamsWithTotalSubPoints).map(team => ({
    //   team,
    //   TotalPoints: teamsWithTotalSubPoints[team],
    // }));
  
    // Sort the array based on totalSubPoints in descending order
 
  useEffect(() => {
    // Initial API call
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
      
    }, 120000);

    return () => clearInterval(intervalId);
  }, []);
useEffect(() => {
  Scoreboard();
}, [data]);


 // Run the effect only once when the component mounts
  console.log(data);
  console.log(sortedData);
  return (
    <div id="scoreboard">
      <div className='header'>
        <img className="proddec" width={100} height={100} src={proddec} alt="" />
      <img height={100} width={100} src={ashwa} alt="Ashwa" /></div>
      
      <div className="container">
        {sortedData.map((data, index) => (
          <Board
          key={index}
          rank={index + 1}
          team={data.team}
          title_color={data.team}
          points_color={data.team}
          lists={data.subItems}
          totalSubPoints={data.totalPoints}
        />
        ))}
      </div>
    </div>
  )
}

export default Excelboard 
