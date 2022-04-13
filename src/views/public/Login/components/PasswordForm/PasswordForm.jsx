import React from "react";
import Paragraph from "../../../../../components/common/Paragraph";
import { PasswordFormContainerStyle } from "./passwordForm.style";

const PasswordForm = () => {
  return (
    <PasswordFormContainerStyle>
      <Paragraph type="h4" as="h1">
        Inicia sesión en twitto
      </Paragraph>
    </PasswordFormContainerStyle>
  );
};

export default PasswordForm;
