import React, { useEffect, useRef } from "react"
import "./Fixture.css"
import ashwa from "../../assets/color-ashwa.png"
import illus from "../../assets/Football Player.gif"
import Row from "./Row"

const Fixture = () => {
  const containerRef = useRef(null)

  useEffect(
    () => {
      // Scroll to the bottom when the component mounts or when content changes
      scrollToBottom()
    },
    [
      /* dependencies that trigger a scroll, if any */
    ]
  )

  const scrollToBottom = () => {
    if (containerRef.current) {
      // Scroll to the bottom of the container
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }
  return (
    <d id="fixture">
      <div className="container">
        <div className="logo">
          <img src={ashwa} alt="" />
        </div>
        <div className="head">FIXTURES</div>
        <div className="all">
          <div className="date">
            <h1>23rd WEDNESDAY</h1>
          </div>
        </div>
        <div className="fixture-list" ref={containerRef}>
          <Row
            title="Volleyball"
            roundno="Round 1"
            time="11:30"
            venue="open court"
            left_team="GREEN"
            left_color="#4DB657"
            right_team="YELLOW"
            right_color="#DBD355"
          />
          <Row
            title="Cricket"
            roundno="Round 1"
            time="12:30"
            venue="open court"
            left_team="BLUE"
            left_color="#3A71C4"
            right_team="RED"
            right_color="#F3594D"
          />
          <Row
            title="Football"
            roundno="Round 1"
            time="10:30"
            venue="open court"
            left_team="RED"
            left_color="#F3594D"
            right_team="GREEN"
            right_color="#4DB657"
          />
          <Row
            title="Basketball-"
            roundno="Round 1"
            time="11:30"
            venue="open court"
            left_team="GREEN"
            left_color="#4DB657"
            right_team="YELLOW"
            right_color="#DBD355"
          />
          <Row
            title="Basketball-"
            roundno="Round 1"
            time="11:30"
            venue="open court"
            left_team="GREEN"
            left_color="#4DB657"
            right_team="YELLOW"
            right_color="#DBD355"
          />{" "}
          <Row
            title="Basketball-"
            roundno="Round 1"
            time="11:30"
            venue="open court"
            left_team="GREEN"
            left_color="#4DB657"
            right_team="YELLOW"
            right_color="#DBD355"
          />{" "}
          <Row
            title="Basketball-"
            roundno="Round 1"
            time="11:30"
            venue="open court"
            left_team="GREEN"
            left_color="#4DB657"
            right_team="YELLOW"
            right_color="#DBD355"
          />
        </div>
      </div>
    </d>
  )
}

export default Fixture
