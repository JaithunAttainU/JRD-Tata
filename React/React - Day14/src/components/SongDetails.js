import React from 'react'
import { connect } from 'react-redux'

function SongDetails(props) {
  const { selectedSong } = props

  // const storeData = store.getData()
  // console.log("Store", storeData)
  return (
    <> {selectedSong &&
      (<div className='card'>
        <h3>Selected Song is</h3>
        <div>Title: {selectedSong.title}</div>
        <div>Duration: {selectedSong.duration}</div>
      </div>)
    }</>

  )
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetails)
