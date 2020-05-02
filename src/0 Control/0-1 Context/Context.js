import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';


const Context = createContext();

function ContextProvider(props) {

  const [mode, setMode] = useState("edit profile");
  const [data, setData] = useState(null);
  const [userAccount, setUserAccount] = useState(null);

  // useEffect(()=> {
  //   axios.get('http://localhost:8000/resources')
  //     .then( res => {
  //      setData(res.data);
  //     })
  // }, [])

  useEffect(()=> {
    axios.get('http://localhost:8000/login')
      .then( res => {
       setUserAccount(res.data);
      })
  }, [])



  return (
    <Context.Provider
      value={{data, userAccount, setUserAccount, mode, setMode}}
    >
      { props.children }
    </Context.Provider>
  )
}

export default Context;
export {ContextProvider};