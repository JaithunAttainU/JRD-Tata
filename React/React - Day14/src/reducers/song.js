

const updateSongReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_SONG':
      //states are read-only in redux
      // state.title = action.payload.title
      // state.duration = action.payload.duration
      // return state
      //state.title = {}
      return action.payload //{title: 'sdfe', duration:5}

    //Not Allowed
    // state.title = "eddfer"
    // return state

    //Correct Way
    // return {
    //   ...state,
    //   title: action.payload.title
    // }
    default:
      return state
  }
}

// function (...args) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];   
//   }
// }

/**
 * 
 * Pure Functions
 * 
 * 1. No side Effect (SHould not modify my inputs, should not depend on data outside the function)
 * 2. Return Same response even if the function is called multiple times for same input
 */

const songList = () => {
  return [
    {
      title: "song 1",
      duration: 10
    },
    {
      title: "song 2",
      duration: 20
    },
    {
      title: "song 3",
      duration: 30
    }
  ]
}
export {
  updateSongReducer,
  songList
}