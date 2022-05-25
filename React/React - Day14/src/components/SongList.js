import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSongAction } from '../actions'

class SongList extends Component {
  render() {
    const songList = this.props.songs
    return (
      <div>
        {songList.map((song, index) => {
          return (
            <div className='d-flex m-3'>
              <div key={index} className="card">
                <div className='card-body'>
                  <div>Name: {song.title}</div>
                  <div>Duration: {song.duration}</div>
                </div>
              </div>
              <button onClick={() => this.props.selectSongAction(song)} className='btn btn-primary'>Select</button>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSongAction })(SongList)