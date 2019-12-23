import React from 'react';
import PostList from './PostList/PostList';
import './App.scss';

function App() {
  return (
    <div className="App">

      <h1 className="app-heading">Dynamic list of posts</h1>
      <PostList />

    </div>
  );
}

export default App;
