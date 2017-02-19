import React from 'react';

const VideoListItem = ({video, onClick}) => { 
  return (
    <li 
      className="media"
      onClick={() => onClick(video)}
    >
      <div className="media-left">
        <img src={video.snippet.thumbnails.default.url} />
      </div>
      <div className="media-body">
        <div className="media-body">
          <h5 className="media-heading">
            {video.snippet.title}
          </h5>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;