import React, { useState } from 'react';

function Esercizio4() {
  const [activeTab, setActiveTab] = useState('Home');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'Home':
        return <p>Benvenuto nella Home!</p>;
      case 'Profilo':
        return <p>Qui puoi vedere il tuo profilo.</p>;
      case 'Impostazioni':
        return <p>Modifica le impostazioni qui.</p>;
      default:
        return null;
    }
  };
  
  return (
    <div>
      <h2>Tab Selector</h2>
      <div>
        <button onClick={() => setActiveTab('Home')}>Home</button>
        <button onClick={() => setActiveTab('Profilo')}>Profilo</button>
        <button onClick={() => setActiveTab('Impostazioni')}>Impostazioni</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default Esercizio4;
