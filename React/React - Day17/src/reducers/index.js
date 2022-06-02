import { combineReducers } from 'redux'
import { toggleLoaderReducer } from './loader'
import { loadVideosReducer } from './videos'

const allReducers = combineReducers({
  videos: loadVideosReducer,
  loader: toggleLoaderReducer
})

export default allReducers