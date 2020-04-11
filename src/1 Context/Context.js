import React, {createContext, useEffect, useState} from 'react';

const Context = createContext();

function ContextProvider(props) {

  const [data, setData] = useState(null);

  useEffect(()=> {

  }, []);

  return (
    <IntervalContext.Provider
      value={{globalInterval}}
    >
      { props.children }
    </IntervalContext.Provider>
  )
}

export default IntervalContext;
export {IntervalContextProvider};