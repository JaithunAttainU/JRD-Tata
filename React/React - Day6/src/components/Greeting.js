import UserGreeting from "./UserGreeting"
import GuestGreeting from "./GuestGreeting"

function Greeting(props) {
  return (
    <>
      {/* {props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />} */}
      <UserGreeting isLoggedIn={props.isLoggedIn} />
      <GuestGreeting isLoggedIn={props.isLoggedIn} />
    </>
  )
}

export default Greeting