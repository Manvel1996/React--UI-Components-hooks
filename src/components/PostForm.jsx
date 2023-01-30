import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function PostForm({createNewPost}) {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  function addNewPost(e) {
    e.preventDefault();
    const newPost ={
        ...post,
        id: Date.now(),
    }
    createNewPost(newPost)
    
    setPost({ title: "", body: "" });
  }

  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type="text"
        placeholder="Title"
      />
      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        value={post.body}
        type="text"
        placeholder="Body"
      />
      <MyButton onClick={addNewPost}>Add Post</MyButton>
    </form>
  );
}
