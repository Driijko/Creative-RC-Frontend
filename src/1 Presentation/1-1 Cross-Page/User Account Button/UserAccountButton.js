import React, {useContext} from 'react';
import axios from 'axios';

import Context from '../../../0 Control/0-1 Context/Context';

import {UserAccountButtonStyle} from './Styled Components/UserAccountButtonStyle';

export default function UserAccountButton(props) {
  const {userAccount, setUserAccount} = useContext(Context);

  function handleClick(e) {
    axios.get("http://localhost:8000/login")
      .then( res => {
        console.log(res);
      })
  }

  return (
    <UserAccountButtonStyle onClick={handleClick}>
      {userAccount === null ?
        "Log In":
        "Log Out"
      }
    </UserAccountButtonStyle>
  )
}