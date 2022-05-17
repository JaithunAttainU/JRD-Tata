import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import React, { useState } from 'react'
function App() {

  const [images, setImages] = useState([]) //Initialization

  const onFormSubmit = async (searchData) => {
    const imagesResponse = await fetch(`https://api.unsplash.com/search/photos?query=${searchData}&client_id=ErYe3QDouaA9hX6a5GWTMGNCgF39md9dSV3dwSP7Bys`)
    const imagesResult = await imagesResponse.json()
    setImages(imagesResult.results) //Update State
    const newImages = images
  }

  return (
    <div className='container'>
      <SearchBar onFormSubmit={onFormSubmit} />
      <ImageList images={images} />
    </div>
  );

}

export default App;
