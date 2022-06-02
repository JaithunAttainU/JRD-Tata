export const toggleLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADER_START':
      return true;
    case 'LOADER_STOP':
      return false
    default:
      return state
  }
}