import './App.css';
import React, { useEffect, useState } from 'react'
import UsersList from './components/UsersList';

function App() {
  const [showUsers, setShowUsers] = useState(false)
  const [dummy, setDummy] = useState('')

  // //first render and on every rerender
  // useEffect(() => {
  //   console.log("UseEffect1 is called")
  // })

  // //only on first render
  // useEffect(() => {
  //   console.log("UseEffect2 is called")
  // }, [])

  // //first render and when showusers state is changed
  // useEffect(() => {
  //   console.log("SHowUsers UseEffect is called")
  // }, [showUsers])

  // //first render and when dummy state is changed
  // useEffect(() => {
  //   console.log("Dummy UseEffect is called")
  // }, [dummy])

  return (
    <div className='d-grid gap-2 col-4 mx-auto'>
      <button className="btn btn-primary" onClick={() => setShowUsers(!showUsers)}>Show Users List</button>
      {/* <button className="btn btn-primary" onClick={() => setDummy("Newtext")}>Update Dummy</button> */}
      {showUsers ? <UsersList /> : null}
    </div>
  );
}

export default App;
