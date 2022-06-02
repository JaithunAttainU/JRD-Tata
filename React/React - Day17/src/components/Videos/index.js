import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import VideoCard from './VideoCard'
import { useDispatch, useSelector } from 'react-redux'
import { videosAction } from '../../actions/videos'

export default function Videos() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(videosAction())
  }, [dispatch])

  const videos = useSelector((state) => state.videos)
  return (
    <div>
      <Grid container spacing={1}>
        {videos.map((videoItem, i) => {
          return <VideoCard key={i} video={videoItem} />
        })}
      </Grid>

    </div>
  )
}
