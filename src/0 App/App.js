import React from 'react';
import './App.css';
import {ContextProvider} from '../1 Context/Context';
import Mode from '../2 Mode/Mode';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Mode />
      </ContextProvider>
    </div>
  );
}

export default App;
