import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

export default function PostList({ title, posts, removePost }) {
  if (!posts.length) {
    return (
      <h2 style={{ textAlign: "center", color: "red" }}>
        Posts list is empty!
      </h2>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((el, index) => (
          <CSSTransition
            key={el.id}
            timeout={500}
            classNames="post">
            <PostItem removePost={removePost} index={index + 1} el={el} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
