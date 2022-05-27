import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Albums() {

  const [albums, setAlbums] = useState([])

  //Do not add async keyword which will slow down the webpage
  useEffect(() => {
    // getAlbums()

    (async function () {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
      console.log(response)
      setAlbums(response.data)
    })()

  }, [])

  const getAlbums = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    console.log(response)
    setAlbums(response.data)
  }

  return (
    <div>
      {albums.map(a => {
        return (
          <h2>{a.title}</h2>
        )
      })}
    </div>
  )
}
