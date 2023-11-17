import React from "react";

const Board = ({ rank, team, title_color, points_color, lists, totalSubPoints }) => {
  return (
    <div className="board" style={{
      overflowY:"hidden",
      maxHeight:"300px"
    }}>
      <div className="col-1" style={{ backgroundColor: "#343a40" }}>
        <h1>{rank}</h1>
      </div>
      <div className="col-2">
        <div className="title" style={{ backgroundColor: title_color,overflow:"hidden" }}>
          <h2>{team}</h2>
          <h1>{totalSubPoints}</h1>
        </div>
        <div
          className="points"
          style={{
            backgroundColor: points_color,
            boxShadow:
              "rgba(50, 50, 93, 0.2) 0px 20px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 15px 30px -18px inset",
          }}
        >
          {lists.slice().reverse().map((list, index) => (
            <div className={`p${index + 1}`} key={index}>
              <p>{list.item}</p>
              <p>+{list.points}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
