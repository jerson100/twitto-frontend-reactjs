import React from "react";
import { AuthContainerStyle } from "./auth.style";
import AuthBody from "./components/AuthBody";
import AuthFooter from "./components/AuthFooter";

const Auth = () => {
  return (
    <AuthContainerStyle>
      <AuthBody />
      <AuthFooter />
    </AuthContainerStyle>
  );
};

export default Auth;
