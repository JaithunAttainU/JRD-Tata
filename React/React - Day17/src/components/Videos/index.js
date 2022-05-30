import React from 'react'
import { Grid } from '@material-ui/core'
import VideoCard from './VideoCard'

export default function Videos() {
  const dummyVideos = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div>
      <Grid container spacing={1}>
        {dummyVideos.map((videoItem, i) => {
          return <VideoCard key={i} />
        })}
      </Grid>

    </div>
  )
}
