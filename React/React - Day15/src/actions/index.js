//action is an object which has 'type' and 'payload'

import axios from "axios"

//Action Creators
export const getAlbumsAction = () => {
  return async function (dispatch, getState) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')

    //mandatory
    dispatch({
      type: 'GET_ALBUMS',
      payload: response.data
    })
  }
}
// return {
//   type: 'GET_ALBUMS',
//   payload: [{ title: '2445' }, { title: 'gfhnfg' }] //new albums
// }


//Using thunk we can return function from action creators