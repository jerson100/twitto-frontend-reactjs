import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../../../../components/common/Button";
import Paragraph from "../../../../../components/common/Paragraph";
import { LoginContentStyle } from "../../login.style";

const LoginContent = () => {
  return (
    <LoginContentStyle>
      <Paragraph type="h4" as="h1">
        Inicia sesión en twitter
      </Paragraph>
      <Button
        rounded
        size="BIG"
        color="normal"
        // maxWidth="300px"
        Icon={<FontAwesomeIcon icon={faGoogle} />}
      >
        Iniciar sesión con google
      </Button>
      <Button
        rounded
        size="BIG"
        color="normal"
        // maxWidth="300px"
        Icon={<FontAwesomeIcon icon={faApple} />}
      >
        Iniciar sesión con apple
      </Button>
      <Button
        rounded
        size="BIG"
        color="NORMAL"
        //    maxWidth="300px"
      >
        Siguiente
      </Button>
      <Button
        rounded
        size="BIG"
        color="NORMAL"
        type="GOSTH"
        //    maxWidth="300px"
      >
        Olvidaste tu contraseña
      </Button>
    </LoginContentStyle>
  );
};

export default LoginContent;
