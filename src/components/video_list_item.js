import React from 'react';

const VideoListItem = ({video, onClick}) => { 
  return (
    <li 
      className="list-group-item"
      onClick={() => onClick(video)}
    >
      <img src={video.snippet.thumbnails.default.url} />
      <h3>
        {video.snippet.title}
      </h3>
    </li>
  );
}

export default VideoListItem;