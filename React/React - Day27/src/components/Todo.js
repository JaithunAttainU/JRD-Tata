import React from 'react'

function Todo(prop) {
  console.log("Child rendered")
  return (
    <>
      <h1>My Todos</h1>
      {
        prop.list.map((item, index) => {
          return <p key={index}>{item}</p>
        })
      }
      <button onClick={prop.addTodo}>Add Todo</button>
    </>
  )
}

export default React.memo(Todo)
