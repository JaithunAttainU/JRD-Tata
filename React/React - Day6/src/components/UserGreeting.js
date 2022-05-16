function UserGreeting(props) {

  if (!props.isLoggedIn) {
    return null
  }
  return <h1>Welcome Back!</h1>
}

export default UserGreeting