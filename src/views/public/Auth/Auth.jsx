import React from "react";
import { AuthContainerStyle } from "./auth.style";
import AuthBody from "./components/AuthBody";
import AuthFooter from "./components/AuthFooter";
// import Top from "./components/Top";

const Auth = () => {
  return (
    <AuthContainerStyle>
      <AuthBody />
      <AuthFooter />
    </AuthContainerStyle>
  );
};

export default Auth;
