//action is an object which has 'type' and 'payload'

//Action Creators
export const incrementAction = (data = 0) => {
  return {
    type: 'INCREMENT',
    payload: data
  }
}

export const decrementAction = (data = 0) => {
  return {
    type: 'DECREMENT',
    payload: data
  }
}