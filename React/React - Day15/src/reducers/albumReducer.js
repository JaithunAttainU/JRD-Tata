export const getAlbumReducer = (state = [], action) => {
  if (action.type === 'GET_ALBUMS') {
    return action.payload
  } else {
    return state
  }
}