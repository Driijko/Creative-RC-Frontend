import React, {useContext, useEffect} from 'react';

import Context from '../../1 Context/Context';

import TagMenuSystem from '../6 Tags Menu System/TagMenuSystem';

// Styled Components
import {TitleSection} from './Styled Components/TitleSection';

export default function ResourcesPage(props) {

  const {data} = useContext(Context);

  return (
    <div>

      <TitleSection>CREATIVE CODING RESOURCES</TitleSection>

      <TagMenuSystem>

      </TagMenuSystem>
      {
        data === null ?
          null:
          <div></div>
      }
    </div>
  )
}