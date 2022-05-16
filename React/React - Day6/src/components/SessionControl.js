import React from 'react'
import LogIn from './LogIn'
import Greeting from './Greeting'
import LogOut from './LogOut'
class SessionControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogInClick = this.handleLogInClick.bind(this)
    this.handleLogOutClick = this.handleLogOutClick.bind(this)

    this.state = {
      isLoggedIn: false
    }
  }

  handleLogInClick() {
    this.setState({ isLoggedIn: true })
  }

  handleLogOutClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    let button;

    if (this.state.isLoggedIn) {
      button = (
        <>
          <LogOut clickHandler={this.handleLogOutClick} />
        </>
      )
    } else {
      button = <LogIn clickHandler={this.handleLogInClick} />
    }

    return (
      <>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {/* {this.state.isLoggedIn ? <LogOut clickHandler={this.handleLogOutClick} /> : <LogIn clickHandler={this.handleLogInClick} />} */}
        {/* {button} */}

        {this.state.isLoggedIn && <LogOut clickHandler={this.handleLogOutClick} />}
        {!this.state.isLoggedIn && <LogIn clickHandler={this.handleLogInClick} />}
      </>
    )
  }
}

export default SessionControl