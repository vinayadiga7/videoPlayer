import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet } = video;

  const onVideoClick = () => {
    onVideoSelect(video);
  };

  return (
    <div className="item video-item" onClick={onVideoClick}>
      <img
        alt={video.title}
        className="ui image video-image"
        src={snippet.thumbnails.medium.url}
      />
      <div className="content content-me">
        <div className="description-me">{snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
