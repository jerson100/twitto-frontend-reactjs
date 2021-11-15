import React from "react";
import Button from "../../../../../components/common/Button";
import Paragraph from "../../../../../components/common/Paragraph";

const AuthForm = () => {
  return (
    <div>
      <Paragraph as="p" type="h4">
        Únete a Twitto hoy mismo
      </Paragraph>
      <Button rounded size="BIG" color="normal">
        Regístrate con el número de teléfono o con el gmail
      </Button>
    </div>
  );
};

export default AuthForm;
