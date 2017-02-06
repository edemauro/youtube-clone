import React from 'react';
import CommentListItem from './comment_list_item'

const CommentList = (props) => {
  const commentListItems = props.comments.map((comment) => {
    return <CommentListItem
      key={comment.etag}
      comment={comment}
    />
  });

  return (
    <ul className="col-sm-8 comments">
      {commentListItems}
    </ul>
  );
};

export default CommentList;