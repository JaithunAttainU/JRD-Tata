import './App.css';
import React from 'react'
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';


function App(props) {
  return (
    <div className='container'>
      <SongList />
      <SongDetails />
    </div>
  )
}

export default App;