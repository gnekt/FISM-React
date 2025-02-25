import React, { useState } from 'react';

function Question({ q, a, isActive, onToggle }) {
  return (
    <div style={{ border: '1px solid #aaa', margin: '10px', padding: '10px' }}>
      <h3>{q}</h3>
      <button onClick={onToggle}>{isActive ? 'Nascondi Risposta' : 'Mostra Risposta'}</button>
      {isActive && <p>{a}</p>}
    </div>
  );
}

function Esercizio3() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const questions = [
    { id: 0, q: 'Cos\'è React?', a: 'React è una libreria JavaScript per costruire interfacce utente.' },
    { id: 1, q: 'Cosa sono i componenti?', a: 'I componenti sono blocchi riutilizzabili di codice che definiscono l’interfaccia.' },
    { id: 2, q: 'Che cos\'è lo state?', a: 'Lo state è un oggetto che contiene dati dinamici di un componente.' }
  ];
  
  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };
  
  return (
    <div>
      <h2>FAQ</h2>
      {questions.map(item => (
        <Question 
          key={item.id}
          q={item.q}
          a={item.a}
          isActive={activeQuestion === item.id}
          onToggle={() => toggleQuestion(item.id)}
        />
      ))}
    </div>
  );
}

export default Esercizio3;
