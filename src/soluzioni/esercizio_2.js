import React, { useState } from 'react';

function Esercizio2() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', watched: false },
    { id: 2, title: 'Interstellar', watched: false },
    { id: 3, title: 'Dunkirk', watched: false }
  ]);
  
  const toggleWatched = (id) => {
    setMovies(movies.map(movie => 
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    ));
  };
  
  return (
    <div>
      <h2>Lista di Film</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id} style={{ textDecoration: movie.watched ? 'line-through' : 'none' }}>
            {movie.title} 
            <button onClick={() => toggleWatched(movie.id)}>
              {movie.watched ? 'Non Visto' : 'Visto'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Esercizio2;
