import React from "react";
import JeLink from "../../../../../components/common/JeLink";
import Paragraph from "../../../../../components/common/Paragraph";
import { InputStyle } from "../../../../../components/styleComponents/input.style";
import { PasswordFormContainerStyle } from "./passwordForm.style";

const PasswordForm = () => {
  return (
    <PasswordFormContainerStyle>
      <Paragraph type="h4" as="h1">
        Inicia sesión en twitto
      </Paragraph>
      <InputStyle type="text" placeholder="correo" />
      <InputStyle type="password" placeholder="password" />
      <JeLink>¿Olvidaste tu contraseña?</JeLink>
    </PasswordFormContainerStyle>
  );
};

export default PasswordForm;
