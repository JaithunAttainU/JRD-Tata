import './App.css';
import React from 'react'
import Albums from './components/Albums';
import AlbumsRedux from './components/AlbumsRedux';


function App(props) {
  return (
    <div className='container'>
      {/* <Albums /> */}
      <AlbumsRedux />
    </div>
  )
}

export default App;