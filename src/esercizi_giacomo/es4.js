import { Box } from '@mui/material';
import {useState, useEffect} from 'react';
import Grid  from '@mui/material/Grid2';



const ColorSwitcher = () => {
  const [colori, setColori] =  useState(['#f44336','#f57c00','#388e3c'])
  const [colore, setColore] = useState('#e3f2fd')

  const cambiaColore = (selettore) => {
    setColore(colori[selettore]);
  }

  const getRandomInt = (max) => {
    const randomInt = Math.floor(Math.random() * max-2);
    return (randomInt >= 0) ? (randomInt >= colori.length ) ? colori.length-1 : randomInt : 0;
  }

  return (
    <div>
      <button onClick={() => cambiaColore(getRandomInt(colore.length))}>Cambia colore random</button>
      <div style={{backgroundColor: colore, width: "5vw", height: "5vh"}}>
      </div>
    </div>
  )



}


export default ColorSwitcher;