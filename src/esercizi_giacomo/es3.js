import React, { useState } from 'react';

export default function TextInput() {
  const [testo, setTesto] = useState("");

  return (
    <>
      <input value={testo} placeholder={"Scrivimi..."} onChange={(e) => setTesto(e.target.value)} />    
      <p>{testo}</p>
    </>
  )
}


