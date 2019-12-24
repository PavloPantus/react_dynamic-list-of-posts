import React, { useState } from 'react';
import getDataFromUrl from '../api/getDataFromUrl';
import postsUrl from '../api/postsUrl';
import usersUrl from '../api/usersUrl';
import commentsUrl from '../api/commentsUrl';
import Post from './Post/Post';

function PostList() {
  const [preparedPosts, setPreparedPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [isLoadedPosts, setIsLoadedPosts] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getPreparedPostsFromServer = async() => {
    const [posts, users, comments] = await Promise.all(
      [getDataFromUrl(postsUrl, []),
        getDataFromUrl(usersUrl, []),
        getDataFromUrl(commentsUrl, [])]
    );

    return posts.map(
      post => ({
        ...post,
        author: users.find(
          user => user.id === post.userId
        ),
        comments: comments.filter(
          comment => comment.postId === post.id
        ),
      })
    );
  };

  const handleInputChange = (text) => {
    setSearchQuery(text.trim().toLowerCase());
  };

  const debouncer = (func, time) => {
    let timer;

    return (event) => {
      clearTimeout(timer);
      timer = setTimeout(func, time, event.target.value);
    };
  };

  const debouncedHandleInputChange = debouncer(handleInputChange, 1000);

  return (
    isLoadedPosts
      ? (
        <section className="posts">
          <input
            type="text"
            name="searchInPosts"
            className="input input_search-in-posts"
            onChange={debouncedHandleInputChange}
            placeholder="type for searching"
          />

          <ul className="posts-list">

            {preparedPosts
              .filter(
                post => (
                  (post.title + post.body).replace(/[\n\r]/g, ' ')
                    .toLowerCase().includes(searchQuery)
                )
              )
              .map(
                post => (
                  <li key={post.id} className="post-list__item">
                    <Post searchQuery={searchQuery} singlePost={post} />
                  </li>
                )
              )
            }
          </ul>
        </section>
      )
      : (
        <button
          type="button"
          onClick={
            async() => {
              setIsLoadingPosts(true);
              setPreparedPosts(await getPreparedPostsFromServer());
              setIsLoadedPosts(true);
            }
          }
        >
          {isLoadingPosts ? 'Loading' : 'Load the List of Posts'}
        </button>
      )

  );
}

export default PostList;
