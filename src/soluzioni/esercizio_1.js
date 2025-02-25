import React, { useState } from 'react';

function Esercizio1() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Comprare il latte' },
    { id: 2, task: 'Pulire la casa' },
    { id: 3, task: 'Preparare la cena' }
  ]);
  
  const removeTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <h2>Lista di Compiti</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task} 
            <button onClick={() => removeTask(todo.id)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Esercizio1;
