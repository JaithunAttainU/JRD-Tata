import './App.css';
import React from 'react';
import CartCounter from './components/CartCounter';
import { images } from './mock/images';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
    // this.state.count = this.state.count + 1 //should not update state this way
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        {images.map(img => {
          return <CartCounter imageUrl={img} count={this.state.count} increment={this.increment} decrement={this.decrement} />
        })}
      </React.Fragment>
    )
  }

}

export default App;