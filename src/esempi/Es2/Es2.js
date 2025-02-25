import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function Es2() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <Typography variant="h2" align='center'>
            Inserisci qui il tuo codice
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}