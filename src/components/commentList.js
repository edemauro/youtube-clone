import React from 'react';
import CommentListItem from './commentListItem'

const CommentList = ({ comments }) => {
  if(!comments) {
    return null;
  }

  const commentListItems = comments.map((comment) => {
    return <CommentListItem
      key={comment.etag}
      comment={comment}
    />
  });

  return (
    <ul className="comments">
      { commentListItems }
    </ul>
  );
};

export default CommentList;