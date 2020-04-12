import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


const Context = createContext();

function ContextProvider(props) {

  const [data, setData] = useState(null);

  useEffect(()=> {
    axios.get('http://localhost:8000/resources')
      .then( res => {
       setData(res.data);
      })
  }, [])

  // useEffect(()=> {
  //   console.log(data);
  // }, [data])

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