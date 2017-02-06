import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoListItems = props.videos.map((video) => {
    return <VideoListItem 
      key={video.etag}
      video={video}
      onClick={props.onClick}
    />
  });

  return (
    <ul className="col-sm-4 list-group">
      {videoListItems}
    </ul>
  );
};

export default VideoList;