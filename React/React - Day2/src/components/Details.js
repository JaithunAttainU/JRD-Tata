import { Component } from 'react'

class Details extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='row'>
        <div className='col-2'>
          <img src="https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s68-c-k-c0x00ffffff-no-rj"></img>
        </div>
        <div className='col-10'>
          <div className='row'>
            PyScript - Run Python
          </div>
          <div className='row'>
            Pthon Engineer
          </div>
        </div>
      </div>
    )
  }
}

export default Details;