import React, {useState} from 'react';

import HomePage from '../3 Pages/0 Home/HomePage';

export default function Mode(props) {

  const [mode, setMode] = useState('home');

  return (
    <div>
      {
        mode === "home" ?
          <HomePage/>:
          null 
      }
    </div>

  )
}