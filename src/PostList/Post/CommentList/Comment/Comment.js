import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ singleComment }) => (
  <li className="comment">
    <div className="comment__author-info">
      {singleComment.name}
      <br />
      {singleComment.email}
    </div>
    <div className="comment__body">
      {singleComment.body}
    </div>
  </li>
);

Comment.propTypes = {
  singleComment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
