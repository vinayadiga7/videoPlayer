import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  console.log("From video item");
  console.log(video);
  const { snippet } = video;

  // const onVideoClick = () => {
  //   onVideoSelect(video);
  // };

  return (
    <div className="item video-item" onClick={(video) => onVideoSelect(video)}>
      <img
        className="ui image video-image"
        src={snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div style={{ fontSize: "16px" }} className="description">
          {snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
