import React, {useContext, useState, useEffect} from 'react';

import Context from '../../../0 Control/0-1 Context/Context';

import Navbar from '../../1-1 Cross-Page/Navbar/Navbar';

import {Greeting} from "./Styled Components/Greeting";
import {MainEditRow} from './Styled Components/MainEditRow';
import {MainEditButton} from './Styled Components/MainEditButton';
import {ProjectList} from './Styled Components/ProjectList';
import {ProjectListing} from "./Styled Components/ProjectListing";
import {ProjectTitle} from "./Styled Components/ProjectTitle";
import {Checkbox} from "./Styled Components/Checkbox";



export default function MainEditPage(props) {

  const {userAccount, setUserAccount, setMode} = useContext(Context);
  const [projects, setProjects] = useState(null);

  // If the user account data is loaded, we set up a projects list.
  useEffect(()=> {
    if (userAccount) {
      const projectList = [];
      for(let i = 0; i < userAccount.projects.length; i++) {
        projectList[i] = (
          <ProjectListing key={i}>
            <Checkbox />
            <ProjectTitle>{`${userAccount.projects[i].name}`}</ProjectTitle>
          </ProjectListing>
        )
      }
      setProjects(projectList);
    }
  },[userAccount]);

  function handleClick(e) {
    if (e.target.id === "editProfile") {
      setMode("edit profile");
    }
    else if (e.target.id === "deleteProfile") {

    }  
    else if (e.target.id === "addProject") {

    }
    else if (e.target.id === "editProject") {

    }
    else if (e.target.id === "deleteProject") {

    }
  }

  return(
    <div>
      <Navbar />
      {
        userAccount ?
        <div>
          <Greeting>{`Hey there, ${userAccount.firstName}!`}</Greeting>
          <MainEditRow>
            <MainEditButton id="editProfile" onClick={handleClick} color0="magenta" color1={`hsl(255, 100%, 20%)`}>Edit Profile</MainEditButton>
            <MainEditButton id="deleteProfile" color0="magenta" color1={`hsl(255, 100%, 20%)`}>Delete Profile</MainEditButton>
          </MainEditRow>
          <hr style={{border: "1px solid white"}}/>
          <MainEditRow>
            <MainEditButton id="addProject" color0={`hsl(300, 100%, 50%)`} color1={`hsl(30, 100%, 65%)`}>Add a Project</MainEditButton>
            <MainEditButton id="editProject" color0={`hsl(300, 100%, 50%)`} color1={`hsl(30, 100%, 65%)`}>Edit a Project</MainEditButton>
            <MainEditButton id="deleteProject" color0={`hsl(300, 100%, 50%)`} color1={`hsl(30, 100%, 65%)`}>Delete a Project</MainEditButton>
          </MainEditRow> 
          <hr style={{border: "1px solid white"}}/>
          <ProjectList>
            {projects}
          </ProjectList>
       
        </div>
        
        :"No Account"
      }
    </div>
  )
}