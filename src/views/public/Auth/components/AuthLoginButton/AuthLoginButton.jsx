import React from "react";
import Button from "../../../../../components/common/Button";
import Paragraph from "../../../../../components/common/Paragraph";

const AuthLoginButton = () => {
  return (
    <>
      <Paragraph as="p" type="h6">
        ¿Ya tienes una cuenta?
      </Paragraph>
      <Button
        rounded
        size="NORMAL"
        color="BLUE"
        type="GOSTH"
        //   maxWidth="300px"
      >
        Iniciar sesión
      </Button>
    </>
  );
};

export default AuthLoginButton;
