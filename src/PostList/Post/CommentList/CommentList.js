import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment/Comment';

const CommentList = ({ comments }) => (
  <ul className="post__comments">
    {comments.map(
      comment => <Comment key={comment.id} singleComment={comment} />
    )}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default CommentList;
