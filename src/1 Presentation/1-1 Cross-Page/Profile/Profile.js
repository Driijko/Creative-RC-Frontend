import React, {useState, useEffect} from 'react';

import {ProfileContainer} from "./Styled Components/ProfileContainer";
import {ProfileTop} from "./Styled Components/ProfileTop";
import {ProfileImageContainer} from "./Styled Components/ProfileImageContainer";
import {ProfileTopTextSection} from "./Styled Components/ProfileTopTextSection";
import {Name} from "./Styled Components/Name";
import {Stats} from "./Styled Components/Stats";
import {Link} from "./Styled Components/Link";
import {ProjectsSectionDivider} from "./Styled Components/ProjectsSectionDivider";
import tempPic from "../../../tempPic.jpeg";

export default function Profile(props) {

  const [profileLinks, setProfileLinks] = useState(null);

  useEffect(()=> {
    const links = [];
    for (let i = 0; i < props.profile.profileLinks.length; i++) {
      links[i] = (
        <Link key={i}>
          <a href={`${props.profile.profileLinks[i]}`}>
            {`${props.profile.profileLinks[i]}`}
          </a>
        </Link>
      )
    }
    setProfileLinks(links);
  },[])

  return (
    <ProfileContainer>
      <ProfileTop>
        <ProfileImageContainer>
          <img src={tempPic} style={{objectFit: "cover"}} />
        </ProfileImageContainer>
        <ProfileTopTextSection>
          <Name font={props.profile.fonts[0]}>{`${props.profile.firstName} ${props.profile.lastName}`}</Name>
          <Stats>{`${props.profile.pronouns}, ${props.profile.batch}`}</Stats>
          {profileLinks}
        </ProfileTopTextSection>
      </ProfileTop>
      <p style={{textAlign: "center"}}>{props.profile.description}</p>
      <br/>
      <ProjectsSectionDivider>PROJECTS</ProjectsSectionDivider>
    </ProfileContainer>
  )
}