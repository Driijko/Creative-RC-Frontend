import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


const Context = createContext();

function ContextProvider(props) {

  const [data, setData] = useState(null);

  useEffect(()=> {
    axios.get('localhost:8000')
      .then( res => {
       
      })
  }, [])

  return (
    <Context.Provider
      value={{data}}
    >
      { props.children }
    </Context.Provider>
  )
}

export default Context;
export {ContextProvider};