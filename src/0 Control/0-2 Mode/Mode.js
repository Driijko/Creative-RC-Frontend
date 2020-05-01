import React, {useContext} from 'react';

import Context from '../0-1 Context/Context';

import HomePage from '../../1 Presentation/1-0 Pages/1-0-0 Home/HomePage';
import MainEditPage from '../../1 Presentation/1-0 Pages/1-0-1 Main Edit/MainEditPage';
import EditProfilePage from '../../1 Presentation/1-0 Pages/1-0-2 Edit Profile/EditProfilePage';
import EditProjectPage from '../../1 Presentation/1-0 Pages/1-0-3 Edit Project/EditProjectPage';
import ArtistsPage from '../../1 Presentation/1-0 Pages/1-0-4 Artists/ArtistsPage';
import ProjectsPage from '../../1 Presentation/1-0 Pages/1-0-5 Projects/ProjectsPage';
import ToolsPage from '../../1 Presentation/1-0 Pages/1-0-6 Tools/ToolsPage';
import LinksPage from '../../1 Presentation/1-0 Pages/1-0-7 Links/LinksPage';


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
        mode === "main edit" ?
          <MainEditPage/>:
          null
      }
      {
        mode === "edit profile" ?
          <EditProfilePage/>:
          null 
      }
      {
        mode === "edit project" ?
          <EditProjectPage/>:
          null 
      }
      {
        mode === "artists" ?
          <ArtistsPage/>:
          null 
      }
      {
        mode === "projects" ?
          <ProjectsPage/>:
          null 
      }
      {
        mode === "tools" ?
          <ToolsPage/>:
          null 
      }
      {
        mode === "links" ?
          <LinksPage/>:
          null 
      }
    </div>

  )
}