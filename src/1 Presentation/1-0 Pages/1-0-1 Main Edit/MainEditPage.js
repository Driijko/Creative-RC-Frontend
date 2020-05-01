import React, {useContext, useState, useEffect} from 'react';

import Context from '../../../0 Control/0-1 Context/Context';

import Navbar from '../../1-1 Cross-Page/Navbar/Navbar';

import {Greeting} from "./Styled Components/Greeting";
import {MainEditRow} from './Styled Components/MainEditRow';
import {MainEditButton} from './Styled Components/MainEditButton';



export default function MainEditPage(props) {

  const {userAccount, setUserAccount, setMode} = useContext(Context);

  return(
    <div>
      <Navbar />
      {
        userAccount ?
        <div>
          <Greeting>{`Hey there, ${userAccount.firstName}!`}</Greeting>
          <MainEditRow>
            <MainEditButton color0="magenta" color1={`hsl(255, 100%, 20%)`}>Edit Profile</MainEditButton>
            <MainEditButton color0="magenta" color1={`hsl(255, 100%, 20%)`}>Delete Profile</MainEditButton>
          </MainEditRow>
          <hr/>
          <MainEditRow>
            <MainEditButton color0="red" color1={`hsl(30, 100%, 10%)`}>Add a Project</MainEditButton>
            <MainEditButton color0="red" color1={`hsl(30, 100%, 10%)`}>Edit a Project</MainEditButton>
            <MainEditButton color0="red" color1={`hsl(30, 100%, 10%)`}>Delete a Project</MainEditButton>
          </MainEditRow> 
          <hr/>         
        </div>
        
        :"No Account"
      }
    </div>
  )
}