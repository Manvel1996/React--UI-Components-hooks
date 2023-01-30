import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import "./Navbar.scss";

export default function Navbar() {
  const { isAuth,setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate()
  function logOut() {
    setIsAuth(false)
    localStorage.removeItem("isAuth")
    navigate("/")
  }
  return (
    <nav>
      <MyButton onClick={logOut}>Logout</MyButton>
      <div className="navbar">
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
