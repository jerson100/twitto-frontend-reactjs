import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
// import MobileMenu from "./components/MobileMenu";
import { CenterLayout, LeftLayout, RightLayout } from "./privateLayout.style";
import BottomNavigationMenu from "./components/BottomNavigationMenu";
import NewTweet from "./components/NewTweet";

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
        {/* <MobileMenu show={show} setShow={setShow} /> */}
      </LeftLayout>
      <CenterLayout>
        <Outlet />
      </CenterLayout>
      <RightLayout />
      <NewTweet />
      <BottomNavigationMenu />
    </>
  );
};

export default PrivateLayout;
