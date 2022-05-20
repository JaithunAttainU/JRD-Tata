import React from 'react'

function ImageList(props) {

  const { images } = props
  console.log(images)
  return (
    <div>
      {images.map((imageObj) => {
        return <img className="m-5" src={imageObj.urls.regular} key={imageObj.id} style={{ width: "25%" }}></img>
      })}
    </div>
  )
}

ImageList.defaultProps = {
  images: [],
  users: [],
  showUsers: false
}

export default ImageList;