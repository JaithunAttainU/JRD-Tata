import { Component } from 'react'
import '../styles/CartCounter.css'
class CartCounter extends Component {
  constructor(props) {
    super(props)

    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  }

  // increment() {
  //   console.log("Increment Function")
  //   console.log("This inside Increment", this)
  //   // this.setState({ count: this.state.count + 1 })

  //   this.setState((prevValue) => {
  //     console.log("Previous Value", prevValue)
  //     return ({
  //       count: prevValue.count + 1
  //     })
  //   })
  //   // this.state.count = this.state.count + 1 //should not update state this way
  // }

  // decrement() {
  //   console.log("Decrement Function")
  //   console.log("This inside Decrement", this)
  //   this.setState({ count: this.state.count - 1 })

  // }

  render() {
    // const sampleEle = document.getElementById('incre') //undefined
    // sampleEle.addEventListeners('', () => { })
    console.log("This", this)

    // const buttonStyle = {
    //   backgroundColor: "blue",
    //   borderRadius: 5,
    //   margin: "2vw",
    //   color: 'white'
    // }
    return (
      <div className='card w-25' id="incre">
        <img className='' src={this.props.imageUrl} />
        <div className='d-flex m-2 p-2'>
          <button className='button-style' onClick={this.props.increment}  /*style={{ backgroundColor: "blue" }}*/ /*style={buttonStyle}*/ /*style={getButtonStyles()}*/ > Add</button >
          <div>Ordered: {this.props.count}</div>
          <button onClick={this.props.decrement}>Remove</button>
        </div>
      </div>
    )
  }
}

function getButtonStyles() {
  const buttonStyle = {
    backgroundColor: "blue",
    borderRadius: 5,
    margin: "2vw",
    color: 'white'
  }
  return buttonStyle
}

export default CartCounter

/**
 * 1) Add functions as arrow functions
 * 2) wrap the function inside another function
 */


// const clcikHandler = this.increment;

// clcikHandler()