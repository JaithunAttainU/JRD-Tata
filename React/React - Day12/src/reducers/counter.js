
const initialValue = 0
const updateCounter = (prevCount = 0, action) => {
  //based on action type define the operations
  switch (action.type) {
    case 'INCREMENT':
      return prevCount + 1
    case 'DECREMENT':
      return prevCount - 1
    default:
      return prevCount
  }
}

export default updateCounter