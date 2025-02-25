import React, { useState } from 'react';

function Esercizio5() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username: </label>
          <input 
            type="text" 
            name="username" 
            value={credentials.username} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange} 
          />
        </div>
      </form>
      <p>Username inserito: {credentials.username}</p>
    </div>
  );
}

export default Esercizio5;
