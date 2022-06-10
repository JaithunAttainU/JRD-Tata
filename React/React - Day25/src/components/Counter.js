import React, { useReducer, useState } from 'react'

const initialValue = { count: 0 }
export default function Counter() {

  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INCRE':
        return { count: state.count + 1 };
      case 'DECRE':
        return { count: state.count - 1 };
      default:
        return state
    }
  }, initialValue)

  return (
    <><button onClick={() => {
      // setCount(count - 1)
      dispatch({ type: 'DECRE' })
    }}>Decrement</button>
      <div>Count is {state.count}</div>
      <button onClick={() => {
        // setCount(count + 1)
        dispatch({ type: 'INCRE' })
      }}>Increment</button></>

  )
}

// function reducerFn(state, action) {
//   switch (action.type) {
//     case 'INCRE':
//       return { count: state.count + 1 };
//     case 'DECRE':
//       return { count: state.count - 1 };
//     default:
//       return state
//   }
// }
