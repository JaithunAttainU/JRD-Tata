
export const getUserInfoAction = (userInfo) => {
  return {
    type: 'GET_USERINFO',
    payload: userInfo
  }
}

export const removeUserInfoAction = () => {
  return {
    type: 'REMOVE_USERINFO'
  }
}