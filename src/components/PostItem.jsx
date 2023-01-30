import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

export default function PostItem({ el,removePost }) {
  const router = useNavigate()
  return (
    <div className="post" key={el.id}>
      <div className="postContent">
        <strong>
          {el.id} {el.title}
        </strong>
        <div>{el.body}</div>
      </div>
      <div className="postBtn">
        <MyButton onClick={()=>router(`/posts/${el.id}`)}>Open</MyButton>
        <MyButton onClick={()=>removePost(el.id)}>Remove</MyButton>
      </div>
    </div>
  );
}

