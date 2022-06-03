import axios from 'axios'
import keys from '../config.json'
import { loaderStartAction, loaderStopAction } from './loader'

export const videosAction = (searchParam) => {
  return async function (dispatch, getState) {
    dispatch(loaderStartAction())
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 50,
        key: keys.youtubeKey,
        q: searchParam ? searchParam : ''
      }
    })

    //mandatory
    dispatch({
      type: 'LOAD_VIDEOS',
      payload: response.data.items
    })
    dispatch(loaderStopAction())
  }
}