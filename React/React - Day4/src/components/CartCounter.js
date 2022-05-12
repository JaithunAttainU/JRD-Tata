import { Component } from 'react'

class CartCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  }

  increment = () => {
    console.log("Increment Function")
    console.log("This inside Increment", this)
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    console.log("Decrement Function")
    console.log("This inside Decrement", this)
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    // const sampleEle = document.getElementById('incre') //undefined
    // sampleEle.addEventListeners('', () => { })
    console.log("This", this)
    return (
      <div className='card w-25'>
        <img className='' src='https://www.khub.net/documents/311598138/448598773/Man+throwing+food+away.jpg/89a2decc-1776-3355-2836-fffd8463fe1e?version=1.0&t=1617797244479&imagePreview=1' />
        <div className='d-flex m-2 p-2'>
          <button onClick={this.increment} >Add</button>
          <div>Ordered: {this.state.count}</div>
          <button onClick={this.decrement}>Remove</button>
        </div>
      </div>
    )
  }
}

export default CartCounter