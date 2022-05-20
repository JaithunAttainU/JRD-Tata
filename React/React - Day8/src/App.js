import './App.css';
import React, { useState } from 'react'
import UsersList from './components/UsersList';

class App extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     showUsers: false
  //   }
  // }

  state = { showUsers: false, users: [] }
  render() {
    return (
      <div className='d-grid gap-2 col-4 mx-auto'>
        <button className="btn btn-primary" onClick={() => this.setState({ showUsers: !this.state.showUsers })}>Show Users List</button>
        {this.state.showUsers ? <UsersList /> : null}
      </div>
    );
  }
}


export default App;
