import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { getPost } from "./redux/docs/post";

function App() {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <button onClick={() => dispatch(getPost())}>Obtener Post</button>
      <p>{post.post?.id}</p>
      <p>{post.post?.title}</p>
      <p>{post.post?.body}</p>
    </div>
  );
}

export default App;
