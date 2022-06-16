import React from "react";
import Button from "../../../../../components/common/Button";
import Paragraph from "../../../../../components/common/Paragraph";
import Space from "../../../../../components/common/Space";
import JeLink from "../../../../../components/common/JeLink";
import { AuthFormStyle } from "./authForm.style";
import AuthLoginButton from "../AuthLoginButton/AuthLoginButton";
import DescriptionText from "../../../../../components/common/DescriptionText";
import Icon from "../../../../../components/common/Icon/Icon";

const AuthForm = () => {
  return (
    <AuthFormStyle>
      <Button rounded block Icon={<Icon svg="google" />}>
        Iniciar sesión con google
      </Button>
      <Button rounded block Icon={<Icon svg="apple" />}>
        Iniciar sesión con apple
      </Button>
      <Button rounded block>
        Iniciar sesión con una cuenta de gmail o telèfono
      </Button>
      <DescriptionText>
        <Paragraph as="p" type="h6" size="11px">
          Al registrarte, aceptas los{" "}
          <JeLink color="BLUE">Términos de servicio</JeLink> y la
          <JeLink color="BLUE">Política de privacidad</JeLink>, incluida la
          política de
          <JeLink color="BLUE">Uso de Cookies</JeLink>.
        </Paragraph>
      </DescriptionText>
      <Space size="NORMAL" />
      <AuthLoginButton />
    </AuthFormStyle>
  );
};

export default AuthForm;
