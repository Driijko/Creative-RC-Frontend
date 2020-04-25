import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


const Context = createContext();

function ContextProvider(props) {

  const [data, setData] = useState(null);
  const [userAccount, setUserAccount] = useState(null);

  // useEffect(()=> {
  //   axios.get('http://localhost:8000/resources')
  //     .then( res => {
  //      setData(res.data);
  //     })
  // }, [])



  return (
    <Context.Provider
      value={{data, userAccount, setUserAccount}}
    >
      { props.children }
    </Context.Provider>
  )
}

export default Context;
export {ContextProvider};