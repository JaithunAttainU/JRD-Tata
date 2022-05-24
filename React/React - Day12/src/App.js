import './App.css';
import React, { useState } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux';
import { decrementAction, incrementAction } from './actions';
import Dummy from './components/dummy';

function App(props) {

  const [countBy, setCountBy] = useState(0)


  // //get data from store
  // const count = useSelector((state) => {
  //   return state.updateCounter
  // })

  // const dispatch = useDispatch()
  // const increment = () => {
  //   props.dispatch(incrementAction(Number(countBy)))
  // }

  // const decrement = () => {
  //   props.dispatch(decrementAction(Number(countBy)))
  // }

  console.log(props)

  return (
    <div>
      <button onClick={() => props.incrementAction(Number(countBy))}>+</button>
      <div><p>Count is <span>{props.count}</span></p></div>
      <button onClick={() => props.decrementAction(Number(countBy))}>-</button>

      <input type="number" value={countBy} onChange={(event) => setCountBy(event.target.value)} />
      <Dummy />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.updateCounter }
}

export default connect(mapStateToProps, { incrementAction, decrementAction })(App);

// const connect = () => {
//   return function () {
//     console.log("Heelo")
//   }
// }

// connect()();
