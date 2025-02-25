import * as React from "react";
import Button from "@mui/material/Button";
import { Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from '@mui/material/Box';

export default function Es1() {
  const [testo, setTesto] = React.useState("Hello world");
  const [cliccato, setCliccato] = React.useState(false);

  const handleClick = () => {
    setCliccato(!cliccato);
  };

  return (
    <Box sx={{ p: 3 }}>
      
      <Grid container spacing={2} direction={"column"}>
        <Grid item size={3}>
          <TextField
            id="textField1"
            label="Inserisci qualcosa"
            value={testo}
            onChange={(e) => setTesto(e.target.value)}
          />
        </Grid>
        <Grid item size={3}>
          <Button
            variant={cliccato ? "contained" : "outlined"}
            onClick={handleClick}
            
            sx={{ height: "100%" }}
          >
            {testo}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
