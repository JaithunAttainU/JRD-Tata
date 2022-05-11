import React from "react";
import Thumbnail from "./Thumbnail";
import Details from "./Details";

function YoutubeCard(props) {

  const { videoData } = props

  return (
    <div className="card w-25 m-3">
      <Thumbnail imageUrl={videoData.imageUrl} />
      <Details videoData={videoData} />
    </div>
  )
}
export default YoutubeCard;