import React from "react";
import "./MyModal.scss";

export default function MyModal({ children, visible, setVisible }) {
  return (
    <div
      className={visible ? "myModal active" : "myModal"}
      onClick={() => setVisible(false)}>
      <div
        className={visible ? "modalContent active" : "modalContent "}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
