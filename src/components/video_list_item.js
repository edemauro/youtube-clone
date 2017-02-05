import React from 'react';

const VideoListItem = ({video}) => {
  console.log(video); 
  return (
    <li className="list-group-item">
      <img src={video.snippet.thumbnails.default.url} />
      <h3>
        {video.snippet.title}
      </h3>
      <div>
        {video.snippet.description}
      </div>
    </li>
  );
}

export default VideoListItem;