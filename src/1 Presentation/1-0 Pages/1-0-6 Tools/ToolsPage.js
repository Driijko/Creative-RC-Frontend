import React, {useContext, useEffect} from 'react';

import Context from '../../../0 Control/0-1 Context/Context';

// Import cross-page components.
import TagMenuSystem from '../../1-1 Cross-Page/Tags Menu System/TagMenuSystem';

// Styled Components
import {TitleSection} from './Styled Components/TitleSection';

export default function ToolssPage(props) {

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