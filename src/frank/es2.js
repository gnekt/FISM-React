import React, { useState } from "react";


const TextRender = () => {

  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <h5 hidden={show}>Oooooooooops!</h5>
      <button onClick={(e) => setShow(!show)}>{!show ? "Nascondi" : "Mostra"}</button>


    </React.Fragment>

  )
}

export default TextRender;