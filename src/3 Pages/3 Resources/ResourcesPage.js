import React, {useContext, useEffect} from 'react';

import Context from '../../1 Context/Context';

export default function ResourcesPage(props) {

  const {data} = useContext(Context);

  return (
    <div>
      {
        data === null ?

          null:
          <div>{`${data.tags.Languages.JavaScript[0]}`}</div>
      }
    </div>
  )
}