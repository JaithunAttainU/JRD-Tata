export const toggleAuthReducer = (state = false, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return true;
    case 'USER_LOGOUT':
      return false
    default:
      return state
  }
}