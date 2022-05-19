import React, { Component, useEffect, useState } from 'react'

export default function UsersList() {

  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  // //First time
  // useEffect(() => {
  //   console.log("Fetching all users")
  //   fetchUser()
  // }, [])

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("Interval is called")
    }, 3000)


    return () => {
      //.componentwillunmount
      console.log("Unmount")
      clearInterval(intervalID)
    }
  }, [])

  //Executes first time & every time selectedUser is changed
  useEffect(() => {
    fetchUser(selectedUser)
  }, [selectedUser])

  const fetchUser = async (id) => {

    const path = id ? `https://jsonplaceholder.typicode.com/users/${selectedUser}` : 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(path)
    const data = await response.json()

    if (id) {
      setUserInfo(data)
    } else {
      setUsers(data)
    }
  }

  return (
    <div>
        <div>
          <h4 className='text-center'>Users List</h4>
        {users.map((user) => {
            return (
              <div className='card' key={user.id} onClick={() => setSelectedUser(user.id)}>
                <h5>{user.name}</h5>
                <div>{user.email}</div>
              </div>
            )
          })}
        </div>
        <div>
        {userInfo ?
          (<div>
            <h4>User Info</h4>
            <div>{userInfo.name}</div>
            <div>{userInfo.website}</div>
          </div>
          ) : <></>}
        </div>
    </div>
  )
}