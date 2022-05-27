import { combineReducers } from 'redux'
import { getAlbumReducer } from './albumReducer'

const allReducers = combineReducers({
  albums: getAlbumReducer
})

export default allReducers