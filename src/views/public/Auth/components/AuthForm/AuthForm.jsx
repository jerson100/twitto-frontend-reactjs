import React from "react";
import Button from "../../../../../components/common/Button";
import Paragraph from "../../../../../components/common/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import Space from "../../../../../components/common/Space/Space";

const AuthForm = () => {
  return (
    <div>
      <Paragraph as="p" type="h4">
        Únete a Twitto hoy mismo
      </Paragraph>
      <Button
        rounded
        size="NORMAL"
        color="normal"
        maxWidth="300px"
        Icon={<FontAwesomeIcon icon={faGoogle} />}
      >
        Iniciar sesión con google
      </Button>
      <Button
        rounded
        size="NORMAL"
        color="normal"
        maxWidth="300px"
        Icon={<FontAwesomeIcon icon={faApple} />}
      >
        Iniciar sesión con apple
      </Button>
      <Button rounded size="NORMAL" color="NORMAL" maxWidth="300px">
        Iniciar sesión con una cuenta de gmail o telèfono
      </Button>
      <Space size="BIG" />
      <Paragraph as="p" type="h6">
        ¿Ya tienes una cuenta?
      </Paragraph>
      <Button rounded size="NORMAL" color="BLUE" type="GOSTH" maxWidth="300px">
        Iniciar sesión
      </Button>
    </div>
  );
};

export default AuthForm;
