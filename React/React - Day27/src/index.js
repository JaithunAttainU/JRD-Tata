import React, { Component, useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './components/Todo';
function App() {

  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])


  const increment = () => {
    console.log("Increment function")
    setCount(count + 1)
  }

  const addTodo = useCallback(() => {
    console.log("Add Todo function")

    setTodos((todos) => {
      return [
        ...todos,
        'dummy'
      ]
    })
  }, [todos])

  return (
    <>
      <Todo list={todos} addTodo={addTodo} />
      <div>{`Counter: ${count}`}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
}

const rootEle = document.getElementById('root')
const root = ReactDOM.createRoot(rootEle);
root.render(<App />);


// 1) useMemo - cache a return value of a function
// 2) React.memo - cache the retunred value of a Component