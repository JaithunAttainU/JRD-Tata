
const initialValue = 0
const updateCounter = (prevCount = 0, action) => {
  //based on action type define the operations
  switch (action.type) {
    case 'INCREMENT':
      return prevCount + action.payload
    case 'DECREMENT':
      return prevCount - action.payload
    default:
      return prevCount
  }
}

export default updateCounter