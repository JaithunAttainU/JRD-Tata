import { Component } from 'react'

class Details extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, uploaderAvatar, uploaderName, uploadTime, views } = this.props.videoData
    return (
      <div className='row'>
        <div className='col-2 mt-1'>
          <img className="img-fluid rounded-circle" src={uploaderAvatar}></img>
        </div>
        <div className='col-10'>
          <h6>{title}</h6>
          <div className='text-muted'>
            <h6>{uploaderName}</h6>
            <h6>{`${views} views . ${uploadTime}`}</h6>
          </div>
        </div>
      </div >
    )
  }
}

export default Details;
