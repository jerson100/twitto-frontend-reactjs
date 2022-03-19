import React from "react";
import Button from "../../../../../components/common/Button";
import Paragraph from "../../../../../components/common/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import Space from "../../../../../components/common/Space";
import JeLink from "../../../../../components/common/JeLink";
import { AuthFormStyle, RegisterTermsStyle } from "./authForm.style";
import AuthLoginButton from "../AuthLoginButton/AuthLoginButton";

const AuthForm = () => {
  return (
    <AuthFormStyle>
      <Button
        rounded
        size="NORMAL"
        color="normal"
        // maxWidth="300px"
        Icon={<FontAwesomeIcon icon={faGoogle} />}
      >
        Iniciar sesión con google
      </Button>
      <Button
        rounded
        size="NORMAL"
        color="normal"
        // maxWidth="300px"
        Icon={<FontAwesomeIcon icon={faApple} />}
      >
        Iniciar sesión con apple
      </Button>
      <Button
        rounded
        size="NORMAL"
        color="NORMAL"
        //    maxWidth="300px"
      >
        Iniciar sesión con una cuenta de gmail o telèfono
      </Button>
      <RegisterTermsStyle>
        <Paragraph as="p" type="h6" size="11px">
          Al registrarte, aceptas los{" "}
          <JeLink color="BLUE">Términos de servicio</JeLink> y la
          <JeLink color="BLUE">Política de privacidad</JeLink>, incluida la
          política de
          <JeLink color="BLUE">Uso de Cookies</JeLink>.
        </Paragraph>
      </RegisterTermsStyle>
      <Space size="NORMAL" />
      <AuthLoginButton />
    </AuthFormStyle>
  );
};

export default AuthForm;
