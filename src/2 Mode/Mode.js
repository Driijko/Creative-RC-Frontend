import React, {useState} from 'react';

import HomePage from '../3 Pages/0 Home/HomePage';
import ResourcesPage from '../3 Pages/3 Resources/ResourcesPage';

export default function Mode(props) {

  const [mode, setMode] = useState('resources');

  return (
    <div>
      {
        mode === "home" ?
          <HomePage/>:
          null 
      }
      {
        mode === "resources" ?
          <ResourcesPage/>:
          null 
      }
    </div>

  )
}