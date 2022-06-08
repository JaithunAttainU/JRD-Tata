import React, { useContext } from 'react'
import { UserContext } from '../App'

export default function ChildB() {

  //Getting data from Usercontext using useContext Hook
  const contextData = useContext(UserContext)
  console.log(contextData)

  return (
    <div className='childB'>
      <div>ChildB</div>
      {/* //Render Prop pattern 
      <UserContext.Consumer>

        {(value) => {
          console.log("value is", value)
          return (
            <>
              <div>The username is {value.userName}</div>
              <div>The LoggedIn status is {`${value.isLoggedIn}`}</div>
            </>
          )
        }}

      </UserContext.Consumer>*/}

      {/* //From hooks */}
      <div>The username is {contextData.userName}</div>
      <div>The LoggedIn status is {`${contextData.isLoggedIn}`}</div>
    </div>
  )
}
