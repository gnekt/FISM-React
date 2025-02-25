import React, { useState } from "react";
// Importiamo i componenti Material UI richiesti
import Grid from "@mui/material/Grid2"; // Grid2
import {
  Box,
  Paper,
  TextField,
  Alert,
  Radio,
  Select,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function AppBonus() {
  // Stato per gestire la modalità: "login" oppure "register"
  const [mode, setMode] = useState("login");
  const [error, setError] = useState("");
  const theme = useTheme();

  // Dati per il login
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  // Dati per la registrazione
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    role: "",
  });

  // Gestione delle modifiche del form di login
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Gestione delle modifiche del form di registrazione
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Simulazione della sottomissione del form di login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      setError("Compilare tutti i campi per il login.");
    } else {
      setError("");
      // Qui andrebbe chiamata l'API per il login
      console.log("Dati di login:", loginData);
      alert("Login effettuato con successo!");
    }
  };

  // Simulazione della sottomissione del form di registrazione
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password ||
      !registerData.gender ||
      !registerData.role
    ) {
      setError("Compilare tutti i campi per la registrazione.");
    } else {
      setError("");
      // Qui andrebbe chiamata l'API per la registrazione
      console.log("Dati di registrazione:", registerData);
      alert("Registrazione effettuata con successo!");
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid
        size={{ xs: 12, sm: 8, md: 6, lg: 7 }}
        direction={"column"}
        spacing={2}
      >
        <Paper elevation={3} style={{ padding: theme.spacing(4) }}>
          <Grid container justifyContent="center" spacing={2} direction={"row"}>
            <Grid item size={{ xs: 12 }} >
              <Typography variant="h2" align="center">
                {mode === "login" ? "Login" : "Registrazione"}
              </Typography>
            </Grid>
            <Grid item size={{ xs: 3 }}>
              <Button
                onClick={() => {
                  setMode("login");
                  setError("");
                }}
                variant={mode === "login" ? "contained" : "outlined"}
              >
                Login
              </Button>
            </Grid>
            <Grid item size={{ xs: 3 }}>
              <Button
                onClick={() => {
                  setMode("register");
                  setError("");
                }}
                variant={mode === "register" ? "contained" : "outlined"}
              >
                Registrazione
              </Button>
            </Grid>
          </Grid>

          {error && (
            <Alert severity="error" style={{ marginBottom: "1rem" }}>
              {error}
            </Alert>
          )}

          {mode === "login" ? (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={loginData.email}
                onChange={handleLoginChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={loginData.password}
                onChange={handleLoginChange}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    checked={loginData.remember}
                    onChange={handleLoginChange}
                  />
                }
                label="Ricordami"
              />
              <Box mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Accedi
                </Button>
              </Box>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                label="Username"
                name="username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={registerData.username}
                onChange={handleRegisterChange}
              />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={registerData.email}
                onChange={handleRegisterChange}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={registerData.password}
                onChange={handleRegisterChange}
              />

              {/* Selezione del genere tramite RadioGroup */}
              <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Genere</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={registerData.gender}
                  onChange={handleRegisterChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Donna"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Uomo"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Altro"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Preferisco non dire"
                  />
                </RadioGroup>
              </FormControl>

              {/* Selezione del ruolo tramite Select */}
              <FormControl fullWidth margin="normal">
                <FormLabel>Ruolo</FormLabel>
                <Select
                  name="role"
                  value={registerData.role}
                  onChange={handleRegisterChange}
                >
                  <MenuItem value="">
                    <em>Nessuno</em>
                  </MenuItem>
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>

              <Box mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Registrati
                </Button>
              </Box>
            </form>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AppBonus;
