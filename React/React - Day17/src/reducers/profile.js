export const userInfoReducer = (state = {}, action) => {
  if (action.type === 'GET_USERINFO') {
    return action.payload
  } else if (action.type === 'REMOVE_USERINFO') {
    return {}
  }
  return state
}