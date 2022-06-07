import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { throttle } from 'lodash'
function App() {
  //hooks
  // const [count, setCount] = useState(0)
  const countRef = useRef(0)
  console.log(countRef)

  //TODO: Check
  // countRef.data = 'fserf'
  console.log("Component Rerendered")
  return (
    <div>
      <button onClick={() => {
        // setCount(count + 1) //async
        countRef.current = countRef.current + 1 //synchronous
        console.log(countRef.current)

      }}>ClickMe{countRef.current}</button>
    </div>
  );
}

const rootEle = document.getElementById('root')
const root = ReactDOM.createRoot(rootEle);
root.render(<App />);