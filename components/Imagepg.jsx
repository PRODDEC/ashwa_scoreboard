import React from 'react'
import ashwa from "../assets/color-ashwa.png"
function Imagepg() {
  return (
    <div style={{
        height: "90vh",
        width: "100%",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        
      }}
    >
          <img height={380} width={380} src={ashwa} alt="ashwa" />
    </div>
  )
}

export default Imagepg
