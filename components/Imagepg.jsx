import React from 'react'
import ashwa from "../assets/color-ashwa.png"
function Imagepg() {
  return (
    <div style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
          <img height={1000} width={1000} src={ashwa} alt="ashwa" />
    </div>
  )
}

export default Imagepg
