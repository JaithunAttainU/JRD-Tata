import React, { useState, useMemo } from 'react'

function Factorial() {
  const [num, setNum] = useState(1)
  const [inc, setInc] = useState(0)

  const factorialResult = useMemo(() => calculateFactorial(num), [num])

  // const factorialResult = calculateFactorial(num)
  return (
    <div>
      <input type={"number"} value={num} onChange={(e) => {
        setNum(Number(e.target.value))
      }} />
      <button onClick={(e) => {
        setInc(inc + 1)
      }}>Increment</button>

      <h1>Factorial of {num} is {factorialResult}</h1>
    </div>
  )
}

function calculateFactorial(num) {
  console.log("Factorial function is called")
  return num <= 0 ? 1 : num * calculateFactorial(num - 1)
}
export default Factorial

