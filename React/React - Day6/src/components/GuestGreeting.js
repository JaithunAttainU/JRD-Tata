function GuestGreeting(props) {
  if (props.isLoggedIn) {
    return null
  }
  return <h1>Please Log In using the below Button</h1>
}

export default GuestGreeting