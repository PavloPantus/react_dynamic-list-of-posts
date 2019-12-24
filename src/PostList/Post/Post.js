import React from 'react';
import PropTypes from 'prop-types';
import PostAuthorInfo from './PostAuthorInfo';
import CommentList from './CommentList/CommentList';

const Post = ({ singlePost, searchQuery }) => {
  const getHighlightedText = (text, textToHighLight) => {
    const formatedText = text.replace(/[\n\r]/g, ' ');

    if (textToHighLight.length === 0) {
      return <span>{formatedText}</span>;
    }

    const regular = new RegExp(`(${textToHighLight})`, 'gi');

    return (
      <span>
        {formatedText.split(regular).map(
          (part, index) => (part === textToHighLight
            ? (
              <span
                key={part + index.toString()}
                className="highlighted"
              >
                {part}
              </span>
            )
            : part)
        )}
      </span>
    );
  };

  return (
    <>
      <article className="post">
        <h1 className="post__title">
          {getHighlightedText(singlePost.title, searchQuery)}
        </h1>
        <h2 className="post__body">
          {getHighlightedText(singlePost.body, searchQuery)}
        </h2>
        <PostAuthorInfo postAuthor={singlePost.author} />
        <CommentList comments={singlePost.comments} />
      </article>
    </>
  );
};

Post.propTypes = {
  singlePost: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.object,
    comments: PropTypes.array,
  }).isRequired,
  searchQuery: PropTypes.string,
};

Post.defaultProps = {
  searchQuery: '',
};

export default Post;
