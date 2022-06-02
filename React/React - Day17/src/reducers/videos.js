export const loadVideosReducer = (state = [], action) => {
  if (action.type === 'LOAD_VIDEOS') {
    return action.payload
  } else {
    return state
  }
}