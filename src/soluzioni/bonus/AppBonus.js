import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';

function AppBonus() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  // Recupera la lista degli utenti all'avvio del componente
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
     axios.get('http://localhost:5000/users')
     .then(res => {
        if (res.data){
          setUsers(res.data);
        }
      })
      .catch(error => {
        console.error("Errore nel recupero degli utenti", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      // Aggiornamento dell'utente esistente
        axios.put(`http://localhost:5000/users/${editingUser.id}`, {
          username,
          email
        })
        .then(res => {
          const updatedUser = res.data;
          setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
          setEditingUser(null);
          setUsername('');
          setEmail('');
        })
        .catch(error => {
          console.error("Errore nell'aggiornamento", error);
        });
    }
    else {
      // Creazione di un nuovo utente
      try {
        axios.post('http://localhost:5000/users', {
          username,
          email
        })
        .then(res => {
          console.log(res.data);
          setUsers([...users, res.data]);
          setUsername('');
          setEmail('');
        });
      } catch (error) {
        console.error("Errore nella creazione", error);
      }
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setUsername(user.username);
    setEmail(user.email);
  };

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Errore nell'eliminazione", error);
    }
  };

  return (
    <>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Gestione Utenti del Forum</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button type="submit">
          {editingUser ? 'Aggiorna' : 'Aggiungi'} Utente
        </button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <strong>{user.id}</strong> - {user.username} ({user.email})
            <button onClick={() => handleEdit(user)} style={{ marginLeft: '10px' }}>
              Modifica
            </button>
            <button onClick={() => handleDelete(user.id)} style={{ marginLeft: '5px' }}>
              Elimina
            </button>
          </li>
        ))}
      </ul>
    </div>

    <div style={{ padding: '20px'}}>
      <Typography variant="h4" gutterBottom>Gestione Utenti del Forum: React</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction={'column'} sx={{margin: "auto", width: "100%"}}>
          <Grid item size={2}>
            <TextField
              type="text"
              placeholder="Username"
              value={username}
              fullWidth
              onChange={e => setUsername(e.target.value)}
              required
            />
          </Grid>
          <Grid item size={2}>
            <TextField
              fullWidth
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item size={2}>
            <Button variant="contained" type="submit" fullWidth>
              {editingUser ? 'Aggiorna' : 'Aggiungi'} Utente
            </Button>
          </Grid>
        </Grid>
        
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <strong>{user.id}</strong> - {user.username} ({user.email})
            <button onClick={() => handleEdit(user)} style={{ marginLeft: '10px' }}>
              Modifica
            </button>
            <button onClick={() => handleDelete(user.id)} style={{ marginLeft: '5px' }}>
              Elimina
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default AppBonus;
