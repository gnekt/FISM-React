import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Esercizio2 = () => {
  return (
    <Container maxWidth="md">
      {/* Header */}
      <Box
        sx={{
          p: 2,
          backgroundColor: 'secondary.main',
          textAlign: 'center',
          mb: 2,
          borderRadius: 1,
          color: 'white'
        }}
      >
        <h1>Header della Pagina</h1>
      </Box>
      {/* Contenuto */}
      <Box
        sx={{
          p: 2,
          backgroundColor: 'grey.200',
          borderRadius: 1
        }}
      >
        <p>
          Questo è il contenuto della pagina, organizzato all'interno di un Container per una visualizzazione centrata e limitata in larghezza.
        </p>
      </Box>
    </Container>
  );
};

export default Esercizio2;
