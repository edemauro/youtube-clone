import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div className="col-sm-8">
      <div>
        <iframe src={url}></iframe>
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;