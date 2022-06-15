import React from 'react'
import { useDocumentTitle, useLocalStorage } from '../customHooks'

export default function Title() {
  const [count, setCount] = useLocalStorage('counterValue', 0)
  useDocumentTitle(`you have clicked ${count} times`)

  const handleClick = () => {
    setCount(Number(count) + 1)
  }
  return (
    <div><button onClick={handleClick}>Click Me</button></div>
  )
}
