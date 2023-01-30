import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import { AuthContext } from "./context";
import "./styles/app.scss";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setIsLoaging] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      setIsAuth(true);
    }
    setIsLoaging(false)
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, loading }}>
      <div className="app">
        <Navbar />
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
