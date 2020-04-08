import React from 'react';

import {WelcomeSection} from './WelcomeSection';
import {TitleContainer} from './TitleContainer';
import {TitleSection} from './TitleSection';
import {AboutSection} from './AboutSection';
import {AboutContainer} from './AboutContainer';

export default function HomePage(props) {
  return (
    <WelcomeSection>
      <TitleContainer>
        <TitleSection>CREATIVE</TitleSection>
        <TitleSection>RC</TitleSection>
      </TitleContainer>
      <AboutSection>
        <AboutContainer>
          Welcome to Creative RC, a community of artistically-minded programmers connected to the Recurse Center in New York.          
        </AboutContainer>
        <AboutContainer>
          Exploring the intersection between aesthetics and coding, the projects included on this site utilize a variety of technologies, from artificial intelligence methods to video game engines, and include a variety of mediums, from music, to literature, to installation.
        </AboutContainer>
          
        <AboutContainer>

        </AboutContainer>
      </AboutSection>

    </WelcomeSection>
  )
}