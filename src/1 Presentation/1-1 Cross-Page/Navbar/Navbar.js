import React, {useContext} from 'react';

import Context from '../../../0 Control/0-1 Context/Context';

import {NavbarContainer} from './Styled Components/NavbarContainer';
import {NavbarButton} from './Styled Components/NavbarButton';

export default function Navbar(props) {

  const {setMode} = useContext(Context);

  function handleClick(e) {
    if(e.target.id === "home") {
      setMode("home");
    }
    else if (e.target.id === "artists") {
      setMode("artists");
      console.log("artists");
    }
    else if (e.target.id === "projects") {
      setMode("projects");
    }
    else if (e.target.id === "tools") {
      setMode("tools");
    }
    else if (e.target.id === "links") {
      setMode("links");
    }
  }

  return (
    <div>
      <NavbarContainer>
        <NavbarButton onClick={handleClick} id="home">HOME</NavbarButton>
        <NavbarButton onClick={handleClick} id="artists">ARTISTS</NavbarButton>
        <NavbarButton onClick={handleClick} id="projects">PROJECTS</NavbarButton>
        <NavbarButton onClick={handleClick} id="tools">TOOLS</NavbarButton>
        <NavbarButton onClick={handleClick} id="links">LINKS</NavbarButton>
      </NavbarContainer>
    </div>
  )
}