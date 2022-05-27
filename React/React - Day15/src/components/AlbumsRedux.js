import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbumsAction } from '../actions'

export default function AlbumsRedux() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAlbumsAction()) //Action/Thunk
  }, [])

  const albums = useSelector((state) => state.albums)

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
