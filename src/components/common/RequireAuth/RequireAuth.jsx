import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const RequireAuth = ({ children, to = "/i/flow/login" }) => {
  const { user, previousLoadingUser } = useAuth();
  const location = useLocation();
  if (previousLoadingUser) return <p>Loading....</p>;
  if (!user) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
