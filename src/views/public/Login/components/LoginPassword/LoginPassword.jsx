import React from "react";
import Button from "../../../../../components/common/Button";
import JeLink from "../../../../../components/common/JeLink";
import Paragraph from "../../../../../components/common/Paragraph";
import Space from "../../../../../components/common/Space";
import { InputStyle } from "../../../../../components/styleComponents/input.style";
import { LoginPasswordContainerStyle } from "./passwordForm.style";

const LoginPassword = () => {
  return (
    <LoginPasswordContainerStyle>
      <Paragraph type="h4" as="h1">
        Inicia sesión en twitto
      </Paragraph>
      <InputStyle type="text" placeholder="correo" />
      <InputStyle type="password" placeholder="password" />
      <Paragraph type="h6" as="p">
        <JeLink color="BLUE">¿Olvidaste tu contraseña?</JeLink>
      </Paragraph>
      <Space size="80px" />
      <Button type="GOSTH" size="BIG" rounded block={false}>
        Iniciar Sesión
      </Button>
      <Space />
    </LoginPasswordContainerStyle>
  );
};

export default LoginPassword;
