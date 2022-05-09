import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import AuthView from "../../../views/public/Auth";
import LoginView from "../../../views/public/Login";

const PublicRouter = () => {
  return (
    <Routes>
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <AuthView />
          </PublicRoute>
        }
      />
      <Route
        path="i/flow/login"
        element={
          <PublicRoute>
            <LoginView />
          </PublicRoute>
        }
      ></Route>
    </Routes>
  );
};

const PublicRoute = ({ children }) => {
  const { user, previousLoadingUser } = useAuth();
  if (previousLoadingUser) {
    return <p>loading...</p>;
  }
  if (user) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default PublicRouter;
