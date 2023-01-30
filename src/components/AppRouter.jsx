import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publishRoutes } from "../router/routes";
import Loader from "./UI/loader/Loader";

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((rout) => (
            <Route
              key={rout.path}
              path={rout.path}
              element={<rout.element />}
            />
          ))
        : publishRoutes.map((rout) => (
            <Route
              key={rout.path}
              path={rout.path}
              element={<rout.element />}
            />
          ))}
    </Routes>
  );
}
