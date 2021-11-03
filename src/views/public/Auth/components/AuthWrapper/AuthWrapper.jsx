import React from "react";
import Paragraph from "../../../../../components/common/Paragraph/Paragraph";
import AuthForm from "../AuthForm";
import { AuthLogoStyle, AuthWrapperStyle } from "./authWrapper.style";

const AuthWrapper = () => {
  return (
    <AuthWrapperStyle>
      <AuthLogoStyle>{/*  SVG LOGO */}</AuthLogoStyle>
      {/* Title */}
      <Paragraph as="h1" type="h1">
        Lo que está pasando ahora
      </Paragraph>
      <Paragraph type="h4">Únete a Twitto hoy mismo</Paragraph>
      {/* Description */}
      <AuthForm />
    </AuthWrapperStyle>
  );
};

export default AuthWrapper;
