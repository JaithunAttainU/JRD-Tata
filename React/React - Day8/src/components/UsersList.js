import React, { Component } from 'react'

export default class UsersList extends Component {

  constructor(props) {
    console.log("Constructor")
    super(props)
    this.state = {
      users: [],
      selectedUser: null,
      userInfo: null
    }
  }

  fetchUser = async (id) => {

    const path = id ? `https://jsonplaceholder.typicode.com/users/${id}` : `https://jsonplaceholder.typicode.com/users`
    const response = await fetch(path)
    const data = await response.json()

    if (id) {
      this.setState({ userInfo: data })
    } else {
      this.setState({ users: data })
    }

  }

  componentDidMount() {
    console.log("DidMount Called")
    this.fetchUser()
  }

  componentDidUpdate(prevProps, prevState) {

    console.log("componentDidUpdate called")
    if (this.state.selectedUser !== prevState.selectedUser) {
      this.fetchUser(this.state.selectedUser)
    }
  }

  componentWillUnmount() {
    console.log("Unmounted")
  }

  render() {
    console.log("Render Called")
    return (
      <div>
        <div>
          <h4 className='text-center'>Users List</h4>
          {this.state.users.map((user) => {
            return (
              <div className='card' key={user.id} onClick={() => this.setState({ selectedUser: user.id })}>
                <h5>{user.name}</h5>
                <div>{user.email}</div>
              </div>
            )
          })}
        </div>
        <div>
          {this.state.userInfo ?
            (<div>
              <h4>User Info</h4>
              <div>{this.state.userInfo.name}</div>
              <div>{this.state.userInfo.website}</div>
            </div>) : null}
        </div>
      </div>

    )
  }
}
