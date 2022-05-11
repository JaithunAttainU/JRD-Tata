import './App.css';
import React from 'react';
import YoutubeCard from './components/YoutubeCard';
import videoData from './mock/videoData';

function App() {

  const getCards = () => {
    return videoData.map((data) => {
      return <YoutubeCard videoData={data} />
    })
  }

  console.log(getCards())
  return (
    <div className='container d-flex'>
      {getCards()}
    </div>
  )
}

export default App;