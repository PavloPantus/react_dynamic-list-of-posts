import React from 'react';
import PropTypes from 'prop-types';

const PostAuthorInfo = ({ postAuthor }) => (

  <div className="post__author-info">

    <h3 className="author-info__name">{postAuthor.name}</h3>
    <p className="author-info__email">{postAuthor.email}</p>
    <p className="author-info__address">
        street:
      {' '}
      {postAuthor.address.street}
      <br />
        suite:
      {' '}
      {postAuthor.address.suite}
      <br />
        city:
      {' '}
      {postAuthor.address.city}
      <br />
        zipcode:
      {' '}
      {postAuthor.address.zipcode}
    </p>

  </div>

);

PostAuthorInfo.propTypes = {
  postAuthor: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
  }).isRequired,

};

export default PostAuthorInfo;
