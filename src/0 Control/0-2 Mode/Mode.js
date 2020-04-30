import React, {useContext} from 'react';

import Context from '../0-1 Context/Context';

import HomePage from '../../1 Presentation/1-0 Pages/1-0-0 Home/HomePage';
import ResourcesPage from '../../1 Presentation/1-0 Pages/1-0-6 Resources/ResourcesPage';

export default function Mode(props) {

  const {mode} = useContext(Context);

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