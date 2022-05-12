import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

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

export default PublicRoute;
