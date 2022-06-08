import React from 'react'
import withCount from './withCount'
function ThumbsUp(props) {

  return (
    <div>
      <button onClick={props.increment}>Amazing!</button>
      <span>{props.count}👍</span>
    </div>
  )
}

export default withCount(ThumbsUp)