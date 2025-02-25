import React, { useState } from 'react';
import './App.css';
import Es1 from './esempi/Es1/Es1';
import Es2 from './esempi/Es2/Es2';
import Es3 from './esempi/Es3/Es3';
import Esercizio1 from './soluzioni/esercizio_1';
import Esercizio2 from './soluzioni/esercizio_2';
import Esercizio3 from './soluzioni/esercizio_3';
import Esercizio4 from './soluzioni/esercizio_4';
import Esercizio5 from './soluzioni/esercizio_5';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Button, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import AppBonus from './soluzioni/bonus/AppBonus';

function App() {
  const [activeTab, setActiveTab] = useState("esempi");

  return (
    <div className="container">
       <header>
        <h1>Interfaccia Esempi ed Esercizi</h1>
      </header>
      
      <nav>
        <Button 
          variant='outlined'
          className={activeTab === "esempi" ? "active" : ""} 
          onClick={() => setActiveTab("esempi")}
        >
          Esempi
        </Button>
        <Button 
          variant='outlined'
          className={activeTab === "esercizi" ? "active" : ""} 
          onClick={() => setActiveTab("esercizi")}
          
        >
          Esercizi
        </Button>
        <Button
          variant='outlined'
          className={activeTab === "bonus" ? "active" : ""}
          onClick={() => setActiveTab("bonus")}
        >
          Bonus
        </Button>
      </nav>
      
      <main>
        {activeTab === "esempi" && (
          <Box className="tab-content">
            <Paper>
            <Box className="item">
              <Es1 />
            </Box>
            </Paper>
            <Divider>Esempio 2</Divider>
            <Paper sx={{padding: 2}} elevation={3}>
            <Box className="item">
            <Typography variant="h6">Esempio 2</Typography>
              <Es2 />
            </Box>
            </Paper>
            <Divider>Esempio 3</Divider>
            <Box className="item">
              <Es3 />
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
        {activeTab === "bonus" && (
          <Box className="tab-content">
            <AppBonus />
          </Box>
        )}
      </main>
    </div>
  );
}

export default App;
