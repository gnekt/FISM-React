import React, { useState } from 'react';
import './App.css';
import Es1Errors from './esempi/Es1/Es1Errors';
import Es1 from './esempi/Es1/Es1';
import Es2Errors from './esempi/Es2/Es2Errors';
import Es2 from './esempi/Es2/Es2';
import Es3Errors from './esempi/Es3/Es3Opt1';
import Es3Opt1 from './esempi/Es3/Es3Opt1';
import Es3Opt2 from './esempi/Es3/Es3Opt2';
import Esercizio1 from './soluzioni/esercizio_1';
import Esercizio2 from './soluzioni/esercizio_2';
import Esercizio3 from './soluzioni/esercizio_3';
import Esercizio4 from './soluzioni/esercizio_4';
import Esercizio5 from './soluzioni/esercizio_5';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

function App() {
  const [activeTab, setActiveTab] = useState("esempi");

  return (
    <div className="container">
       <header>
        <h1>Interfaccia Esempi ed Esercizi</h1>
      </header>
      
      <nav>
        <button 
          className={activeTab === "esempi" ? "active" : ""} 
          onClick={() => setActiveTab("esempi")}
        >
          Esempi
        </button>
        <button 
          className={activeTab === "esercizi" ? "active" : ""} 
          onClick={() => setActiveTab("esercizi")}
        >
          Esercizi
        </button>
      </nav>
      
      <main>
        {activeTab === "esempi" && (
          <Box className="tab-content">
            <Paper>
            <Box className="item">
              <Es1Errors />
            </Box>

            <Box className="item">
              <Es1 />
            </Box>
            </Paper>
            <Divider>Esempio 2</Divider>
            <Paper sx={{padding: 2}} elevation={3}>
            <Box className="item" sx={{marginTop: "3vh"}} >
              <Typography variant="h6">Esempio 2 - Errore</Typography>
              <Es2Errors />
            </Box>
            <Box className="item">
            <Typography variant="h6">Esempio 2 - Corretto</Typography>
              <Es2 />
            </Box>
            </Paper>
            <Divider>Esempio 3</Divider>
            <Box className="item">
              <Es3Errors />
            </Box>
            <Box className="item">
              <Es3Opt1 />
            </Box>
            <Box className="item">
              <Es3Opt2 />
            </Box>
          </Box>
        )}
        {activeTab === "esercizi" && (
          <Box className="tab-content">
            <Box className="item">
              <Esercizio1 />
            </Box>
            <Divider><Typography variant='h6'>Esercizio 2</Typography></Divider>
            <Box className="item">
              <Esercizio2 />
            </Box>
            <Divider><Typography variant='h6'>Esercizio 3</Typography></Divider>
            <Box className="item">
              <Esercizio3 />
            </Box>
            <Divider><Typography variant='h6'>Esercizio 4</Typography></Divider>
            <Box className="item">
              <Esercizio4 />
            </Box>
            <Divider><Typography variant='h6'>Esercizio 5</Typography></Divider>
            <Box className="item">
              <Esercizio5 />
            </Box>
          </Box>
        )}
      </main>
    </div>
  );
}

export default App;
