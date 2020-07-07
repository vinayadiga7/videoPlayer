import React from "react";
import "./VideoDetails.css";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(video);
  return (
    <div>
      <div className="ui segemnt embed">
        <div>
          <iframe title={video.snippet.title} src={videoSource}></iframe>
        </div>
      </div>
      <div className="content">
        <h3 className="ui header header-me">{video.snippet.title}</h3>
        <div className="description">{video.snippet.description}</div>
      </div>
      <div className="button-container">
        <a className="subscribe-button" href="#">
          Subscribe to my channel
        </a>
      </div>
    </div>
  );
};

export default VideoDetails;
