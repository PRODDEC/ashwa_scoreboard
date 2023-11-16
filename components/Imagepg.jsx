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

          <div style={{
            position:"absolute",
            top:"60%",
            left:"35%",
            transform:"translate(-50%,-50%)",
            color:"black",
            fontSize:"3",
            fontWeight:"bold",
           
          }}
          > <p>======></p></div>
    </div>
  )
}

export default Imagepg
