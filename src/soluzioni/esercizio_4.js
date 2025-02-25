import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper  from '@mui/material/Paper';

const Esercizio4 = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map((item) => (
            <Grid size={{ xs: 6, md: 6, lg: 6, xl: 6 }} >
              <Paper
                elevation={5}
                sx={{
                  p: 2,
                  backgroundColor: 'secondary.light',
                  borderRadius: 10,
                  textAlign: 'center',
                  color: 'white'
                }}
              >
                <h3>Elemento {item}</h3>
                <p>Descrizione breve per l'elemento {item}.</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Esercizio4;

