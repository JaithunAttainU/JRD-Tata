import { combineReducers } from 'redux'
import { toggleAuthReducer } from './auth'
import { toggleLoaderReducer } from './loader'
import { loadVideosReducer } from './videos'
import { userInfoReducer } from './profile'

const allReducers = combineReducers({
  videos: loadVideosReducer,
  loader: toggleLoaderReducer,
  auth: toggleAuthReducer,
  userInfo: userInfoReducer
})

export default allReducers