import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import MobileMenu from "./components/MobileMenu";
import { CenterLayout, LeftLayout, RightLayout } from "./privateLayout.style";

const PrivateLayout = ({ to = "/i/flow/login" }) => {
  const { user, previousLoadingUser } = useAuth();
  const location = useLocation();
  if (previousLoadingUser) return <p>Loading....</p>;
  if (!user) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }
  return (
    <>
      <LeftLayout>
        <MobileMenu />
      </LeftLayout>
      <CenterLayout>
        <Outlet />
      </CenterLayout>
      <RightLayout />
    </>
  );
};

export default PrivateLayout;
