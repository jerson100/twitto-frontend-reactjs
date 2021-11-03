import React from "react";
import AuthForm from "../AuthForm";
import { AuthLogoStyle, AuthWrapperStyle } from "./authWrapper.style";

const AuthWrapper = () => {
  return (
    <AuthWrapperStyle>
      <AuthLogoStyle>{/*  SVG LOGO */}</AuthLogoStyle>
      {/* Title */}
      {/* Description */}
      <AuthForm />
    </AuthWrapperStyle>
  );
};

export default AuthWrapper;
