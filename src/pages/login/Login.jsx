import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/UI/button/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import { AuthContext } from "../../context";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate()
  function loginSubmit(e) {
    e.preventDefault();
    setIsAuth(true);
    navigate("/posts")
    localStorage.setItem("isAuth",true)
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginSubmit}>
        <MyInput type="text" placeholder="Write login" />
        <MyInput type="password" placeholder="Write password" />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
}
