import React from 'react';

import {WelcomeSection} from './WelcomeSection';
import {TitleContainer} from './TitleContainer';
import {TitleSection} from './TitleSection';
import {AboutSection} from './AboutSection';
import {AboutContainer} from './AboutContainer';
import {OptionSection} from './OptionsSection';
import {OptionsPrompt} from './OptionsPrompt';
import {OptionRow} from './OptionRow';
import {OptionButton} from './OptionButton';
import {RecurseSection} from './RecurseSection';

export default function HomePage(props) {
  return (
    <div>

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

    </div>
  )
}