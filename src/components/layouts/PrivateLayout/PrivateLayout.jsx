import React from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const PrivateLayout = ({ to = "/i/flow/login" }) => {
  const { user, previousLoadingUser } = useAuth();
  const location = useLocation();
  if (previousLoadingUser) return <p>Loading....</p>;
  if (!user) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }
  return (
    <div>
      <ul
        style={{
          marginTop: "20rem",
        }}
      >
        <li>
          <Link to={"/configuration"}>Configuración</Link>
        </li>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
