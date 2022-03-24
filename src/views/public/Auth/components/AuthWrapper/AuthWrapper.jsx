import React from "react";
import LogoTwitter from "../../../../../components/common/LogoTwitter";
import Paragraph from "../../../../../components/common/Paragraph";
import Space from "../../../../../components/common/Space";
import AuthForm from "../AuthForm";
import { AuthWrapperStyle, AuthWrapperHeaderStyle } from "./authWrapper.style";

const AuthWrapper = () => {
  return (
    <AuthWrapperStyle>
      <AuthWrapperHeaderStyle>
        <LogoTwitter size={"BIG"} />
        <Space />
        <Paragraph as="h1">Lo que está pasando ahora</Paragraph>
        <Paragraph as="p" type="h4">
          Únete a Twitto hoy mismo
        </Paragraph>
      </AuthWrapperHeaderStyle>
      <AuthForm />
    </AuthWrapperStyle>
  );
};

export default AuthWrapper;
