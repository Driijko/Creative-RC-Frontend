import React, {useState, useEffect} from 'react';

import {ProfileContainer} from "./Styled Components/ProfileContainer";
import {ProfileTop} from "./Styled Components/ProfileTop";
import {ProfileImageContainer} from "./Styled Components/ProfileImageContainer";
import {ImageOverlay} from "./Styled Components/ImageOverlay";
import {ProfileTopTextSection} from "./Styled Components/ProfileTopTextSection";
import {Name} from "./Styled Components/Name";
import {Stats} from "./Styled Components/Stats";
import {Link} from "./Styled Components/Link";
import {DescriptionContainer} from "./Styled Components/DescriptionContainer";
import {ProjectsSectionDivider} from "./Styled Components/ProjectsSectionDivider";
import {fontThemes} from "../Themes/fontThemes";
import {colorThemes} from "../Themes/colorThemes";
import tempPic from "../../../tempPic.jpeg";

export default function Profile(props) {

  const [profileLinks, setProfileLinks] = useState(null);

  useEffect(()=> {
    console.log()
    const links = [];
    for (let i = 0; i < props.profile.profileLinks.length; i++) {
      links[i] = (
        <Link key={i} color={colorThemes[props.profile.colorTheme][3]} font={fontThemes[props.profile.fontTheme][2]}>
          <a href={`${props.profile.profileLinks[i]}`} 
          style={{textDecoration: "none", color: `${colorThemes[props.profile.colorTheme][3]}`}}>
            {`${props.profile.profileLinks[i][0]}`}
          </a>
        </Link>
      )
    }
    setProfileLinks(links);
  },[])

  return (
    <ProfileContainer backColor={colorThemes[props.profile.colorTheme][1]} borderColor={colorThemes[props.profile.colorTheme][0]}>
      <ProfileTop>
        <ProfileImageContainer color={colorThemes[props.profile.colorTheme][0]}>
          <ImageOverlay color={colorThemes[props.profile.colorTheme][2]}/>
          <img src={tempPic} style={{objectFit: "cover"}} />
        </ProfileImageContainer>
        <ProfileTopTextSection>
          <Name color={colorThemes[props.profile.colorTheme][3]} font={fontThemes[props.profile.fontTheme][0]}>{`${props.profile.firstName} ${props.profile.lastName}`}</Name>
          <div>
            <Stats color={colorThemes[props.profile.colorTheme][3]} font={fontThemes[props.profile.fontTheme][1]}>{`${props.profile.pronouns}`}</Stats>
            <Stats color={colorThemes[props.profile.colorTheme][3]} font={fontThemes[props.profile.fontTheme][1]}>{`${props.profile.batch}`}</Stats>
          </div>
          <div>
            {profileLinks}
          </div>
        </ProfileTopTextSection>
      </ProfileTop>
      <DescriptionContainer font={`${fontThemes[props.profile.fontTheme][3]}`} color={`${colorThemes[props.profile.colorTheme][3]}`}>
        {props.profile.description}
      </DescriptionContainer>
      <hr style={{margin: "0px", marginTop: "2vh", border: `2px solid ${colorThemes[props.profile.colorTheme][0]}`}}/>
      <ProjectsSectionDivider color={colorThemes[props.profile.colorTheme][3]} font={fontThemes[props.profile.fontTheme][4]}>PROJECTS</ProjectsSectionDivider>
      <hr style={{margin: "0px", border: `2px solid ${colorThemes[props.profile.colorTheme][0]}`}}/>
    </ProfileContainer>
  )
}