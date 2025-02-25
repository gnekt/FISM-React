import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Paper, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Grid from "@mui/material/Grid2";

const Es4 = () => {
  const [email, setEmail] = useState("");
  const [erroreEmail, setErroreEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [showAlertPassword, setShowAlertPassword] = useState(false);

  useEffect(() => {
    console.log("Email:", email);
    if (email.length > 0 && !email.includes("@")) {
      setErroreEmail(true);
    } else {
      setErroreEmail(false);
    }
  }, [email]);

  const handleChangePassword = () => {
    const password = document.getElementById("textField2").value;
    setShowAlertPassword(true);
    intervalCloseAlert();
    setPassword(password);
  };

  const intervalCloseAlert = () => {
    setTimeout(() => {
      setShowAlertPassword(false);
    }, 5000);
  };

  return (
    <>
      <Paper elevation={5} sx={{ p: 4 }}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12} xl={12}>
            <Typography variant="h6" align="center">
              Inserisci i tuoi dati
            </Typography>
          </Grid>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="Inserisci la tua email (Componente controllato)"
            required
            error={erroreEmail}
          />
          <TextField
            label="Password"
            id="textField2"
            type="password"
            helperText="Inserisci la tua password (Componente non controllato)"
            required
          />
          <Button onClick={handleChangePassword} variant="outlined">
            Salva password
          </Button>
        </Grid>
      </Paper>
      {showAlertPassword ? (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Password salvata correttamente: {password}
        </Alert>
      ) : null}
    </>
  );
};

export default Es4;
