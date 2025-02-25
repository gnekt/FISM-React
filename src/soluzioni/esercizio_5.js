import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Divider, Paper, toggleButtonClasses, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeContext, ThemeProvider } from "@emotion/react";

const Esercizio5 = () => {
  const theme = useTheme();
  const [menu, setMenu] = React.useState([
    ["Pizza", theme.palette.primary.light],
    ["Mele", theme.palette.secondary.light],
  ]);
  return (
    <Container maxWidth="xl">
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                p: 2,
                backgroundColor: "grey.300",
                minHeight: "100vh",
                borderRadius: 1,
              }}
            >
              <Typography variant="h4" align="center">
                Sidebar
              </Typography>
              <Divider />
              <p>Link 1</p>
              <p>Link 2</p>
              <p>Link 3</p>
            </Box>
          </Grid>
          {/* Contenuto Principale */}
          <Grid
            size={{ xs: 12, md: 9 }}
            alignContent={"flex-start"}
            justifyContent={"center"}
          >
            <Typography variant="h4" align="center">
              Menu
            </Typography>
            <Grid container spacing={2} sx={{ p: 2 }}>
              {menu.map((item) => {
                const nome = item[0];
                const colore = item[1];
                return (
                <Paper
                  sx={{
                    p: 2,
                    backgroundColor: colore,
                    borderRadius: 10,
                    mb: 2,
                  }}
                >
                  <Typography variant="h4" sx={{ marginLeft: 2 }}>
                    {nome}
                  </Typography>
                  <Box sx={{ marginTop: 2 }}>
                    Questo è il contenuto principale della dashboard. Qui puoi
                    inserire grafici, tabelle o qualsiasi altro componente per
                    rappresentare i dati.
                  </Box>
                </Paper>
              )})}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Esercizio5;
