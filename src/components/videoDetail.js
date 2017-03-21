import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video) {
    return null;
  }

  const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url}></iframe>
      </div>
      <div className="video-title">
        <h4>{video.snippet.title}</h4>
      </div>
      <div className="video-details">
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;