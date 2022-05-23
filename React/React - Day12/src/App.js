import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrementAction, incrementAction } from './actions';

function App() {

  //get data from store
  const count = useSelector((state) => {
    return state.updateCounter
  })

  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(incrementAction)}>+</button>
      <div><p>Count is <span>{count}</span></p></div>
      <button onClick={() => dispatch(decrementAction)}>-</button>
    </div>
  );
}

export default App;