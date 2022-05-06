import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  //hooks
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>+</button>
      <div><p>Count is <span>{count}</span></p></div>
      <button onClick={() => {
        setCount(count - 1)
      }}>-</button>
    </div>
  );
}

const rootEle = document.getElementById('root')
const root = ReactDOM.createRoot(rootEle);
root.render(<App />);