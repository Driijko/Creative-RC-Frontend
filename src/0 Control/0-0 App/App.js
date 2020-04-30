import React from 'react';
import './App.css';
import {ContextProvider} from '../0-1 Context/Context';
import Mode from '../0-2 Mode/Mode';

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
