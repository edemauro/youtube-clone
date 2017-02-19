import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
  const videoListItems = props.videos.map((video) => {
    return <VideoListItem
      key={video.etag}
      video={video}
      onClick={props.onClick}
    />
  });

  return (
    <ul className="media-list">
      {videoListItems}
    </ul>
  );
};

export default VideoList;