import React from 'react'
import withCount from './withCount';

function LikeButton(props) {

  return (
    <div>
      <button onClick={props.increment}>LikeButton</button>
      <span>{props.count}❤</span>
    </div>
  )
}

export default withCount(LikeButton);