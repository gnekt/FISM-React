import { useState } from "react";


const Spesa = () => {
  const [listaSpesa, setListaSpesa] = useState([]);
  const [textOggetto, setTextOggetto] = useState("");


  const handleSalva = (e) => {
    setListaSpesa([...listaSpesa, textOggetto])
  }

  return (
    <>
      <h3>Lista della spesa:</h3>
      <ul>
        {
          listaSpesa.map((oggetto) => {
            return(<li>{oggetto}</li>)
          })
        }
      </ul>
      <input value={textOggetto} onChange={(e) => setTextOggetto(e.target.value)}/>
      <button onClick={handleSalva}>Salva</button>
    </>

  )
}


export default Spesa;