import React from 'react'
import ashwa from "../assets/color-ashwa.png"
function Imagepg() {
  return (
    <div style={{
      display:'flex',
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
          <img height={500} width={500} src={ashwa} alt="ashwa" />
    </div>
  )
}

export default Imagepg
