import { useState } from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>ChatApp</h1>
      <PostButton />
    </div>
  );
}

const PostButton = () => {
  return (
    <>
      <button class="btn btn-primary" onClick="post()">
        Post
      </button>
    </>
  );
};

const post = (body) => {
  // fetch
};
