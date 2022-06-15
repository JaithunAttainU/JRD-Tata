import React, { useState } from 'react'

function withCount(Component) {
  return function Enhanced() {
    const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1)
    }
    return (
      <div>
        <Component count={count} increment={increment} />
      </div>
    )

  }
}

export default withCount