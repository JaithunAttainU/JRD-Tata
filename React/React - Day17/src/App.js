import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Videos from './components/Videos';
import Profile from './components/Profile';
import Login from './components/Login';
import LayOut from './components/LayOut';

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayOut />} >
          <Route path='/videos' element={<Videos />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;