import React from 'react';

// Import Cross-Page Components
import UserAccountButton from '../../1-1 Cross-Page/User Account Button/UserAccountButton';

// Import Page-Specific Styled Components
import {WelcomeSection} from './Styled Components/WelcomeSection';
import {TitleContainer} from './Styled Components/TitleContainer';
import {TitleSection} from './Styled Components/TitleSection';
import {AboutSection} from './Styled Components/AboutSection';
import {AboutContainer} from './Styled Components/AboutContainer';
import {OptionSection} from './Styled Components/OptionsSection';
import {OptionsPrompt} from './Styled Components/OptionsPrompt';
import {OptionRow} from './Styled Components/OptionRow';
import {OptionButton} from './Styled Components/OptionButton';
import {RecurseSection} from './Styled Components/RecurseSection';

export default function HomePage(props) {
  return (
    <div>

      <OptionRow>
        <UserAccountButton>Log In</UserAccountButton>
      </OptionRow>

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
        </AboutSection>

      </WelcomeSection>

      <OptionSection>

        <OptionsPrompt>Browse by...</OptionsPrompt>

        <OptionRow>
          <OptionButton>ARTIST</OptionButton>
          <OptionButton>PROJECT</OptionButton>
        </OptionRow>

        <OptionRow>
          <OptionButton>CREATIVE CODING RESOURCES</OptionButton>
        </OptionRow>

      </OptionSection>

      <RecurseSection>
        Recurse Center is an educational retreat for programmers based in New York. To learn more about it, visit... 
      </RecurseSection>

      <OptionRow>
        <a href="https://www.recurse.com/" target="_blank">
          <OptionButton>Recurse Center</OptionButton>
        </a>
      </OptionRow>

      <RecurseSection>
        If you are a member of the RC community feel free to...
      </RecurseSection>

      <OptionRow>
        <UserAccountButton>Log In</UserAccountButton>
      </OptionRow>

    </div>
  )
}