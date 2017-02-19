import React from 'react';

const CommentListItem = ({ comment }) => {
  const topLevelComment = comment.snippet.topLevelComment.snippet;

  return (
    <li className="media">
      <div className="media-left">
        <img src={topLevelComment.authorProfileImageUrl} />
      </div>
      <div className="media-body">
        <div className="media-body">
          <h5 className="media-heading">
            {topLevelComment.authorDisplayName}
          </h5>
          <p>
            {topLevelComment.textDisplay}
          </p>
        </div>
      </div>
    </li>
  );
}

export default CommentListItem;