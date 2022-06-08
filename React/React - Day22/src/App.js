import './App.css';
import React, { useState, createContext } from 'react'

import ChildA from './components/ChildA';

export const UserContext = createContext(); //1 - Create Context

function App() {

  const [userName, setUserName] = useState("Parthiv")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const userContextValue = {
    userName, isLoggedIn
  }
  return (

    // 2 - Provider 3 - Provide value to be stored in Context


    < UserContext.Provider value={userContextValue} >
      <div className='app'>
        <h1>App Component</h1>
        {/* <ChildA userName={userName} isLoggedIn={isLoggedIn} /> */}
        <ChildA />
      </div>
    </UserContext.Provider>

  )
}

export default App;