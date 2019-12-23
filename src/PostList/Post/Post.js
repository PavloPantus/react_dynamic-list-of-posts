import React from 'react';
import PropTypes from 'prop-types';
import PostAuthorInfo from './PostAuthorInfo';
import CommentList from './CommentList/CommentList';

const Post = ({ singlePost }) => (
  <>
    <article className="post">
      <h1 className="post__title">{singlePost.title}</h1>
      <h2 className="post__body">{singlePost.body}</h2>
      <PostAuthorInfo postAuthor={singlePost.author} />
      <CommentList comments={singlePost.comments} />
    </article>
  </>
);

Post.propTypes = {
  singlePost: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.object,
    comments: PropTypes.array,
  }).isRequired,
};

export default Post;
