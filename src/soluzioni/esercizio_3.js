import React from 'react';
import Grid from '@mui/material/Grid2'; // Importazione di Grid2
import Box from '@mui/material/Box';
import { palette } from '@mui/system';
import { styled, useTheme } from "@mui/material/styles";

const Esercizio3 = () => {
  const theme = useTheme(); 
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            p: 2,
            backgroundColor: theme.palette.primary.light,
            textAlign: 'center',
            borderRadius: 1
          }}
        >
          Colonna 1
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            p: 2,
            backgroundColor: theme.palette.primary.main,
            textAlign: 'center',
            borderRadius: 1
          }}
        >
          Colonna 2
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            p: 2,
            backgroundColor: 'primary.dark',
            textAlign: 'center',
            borderRadius: 1
          }}
        >
          Colonna 3
        </Box>
      </Grid>
    </Grid>
  );
};

export default Esercizio3;
