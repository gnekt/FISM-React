import { useState } from 'react';


const Counter = () => {
  const [contatore, setContatore] = useState(0);


  const updateCounter = (e) => {
    setContatore(contatore+1);
  }
  
  return (
    <>
      <button onClick={updateCounter}>Cliccami</button>
      <p>Contatore: {contatore}</p>
    </>
  )

}

export default Counter;