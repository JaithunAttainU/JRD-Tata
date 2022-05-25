import { combineReducers } from 'redux'
import { songList, updateSongReducer } from './song'

const allReducers = combineReducers({
  selectedSong: updateSongReducer,
  songs: songList
})

export default allReducers