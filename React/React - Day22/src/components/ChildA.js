import React from 'react'
import ChildB from './ChildB'
export default function ChildA() {
  return (
    <div className='childA'>
      <div>childA</div>
      {/* <ChildB userName={props.userName} isLoggedIn={props.isLoggedIn} /> */}
      {/* <ChildB {...props} /> */}
      <ChildB />
    </div>

  )
}
