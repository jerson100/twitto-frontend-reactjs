import React from "react";
import Button from "../../../../../components/common/Button";
import DescriptionText from "../../../../../components/common/DescriptionText";
import Icon from "../../../../../components/common/Icon/Icon";
import JeLink from "../../../../../components/common/JeLink";
import Paragraph from "../../../../../components/common/Paragraph";
import Separator from "../../../../../components/common/Separator";
import Space from "../../../../../components/common/Space";
import { InputStyle } from "../../../../../components/styleComponents/input.style";
import { LoginContentStyle } from "../../login.style";

const LoginContent = ({ handleNext }) => {
  return (
    <LoginContentStyle>
      <Paragraph type="h4" as="h1">
        Inicia sesión en twitto
      </Paragraph>
      <Button rounded block color="NORMAL" Icon={<Icon svg="google" />}>
        Iniciar sesión con google
      </Button>
      <Button rounded block color="NORMAL" Icon={<Icon svg="apple" />}>
        Iniciar sesión con apple
      </Button>
      <Separator text="O" />
      <InputStyle type="text" />
      <Button
        rounded
        color="NORMAL"
        block
        handleClick={handleNext}
        //    maxWidth="300px"
      >
        Siguiente
      </Button>
      <Button
        rounded
        block
        color="NORMAL"
        type="GOSTH"
        //    maxWidth="300px"
      >
        Olvidaste tu contraseña
      </Button>
      <Space />
      <DescriptionText>
        <Paragraph as="p" type="p" size="14px">
          ¿No tienes una cuenta?{" "}
          <JeLink color="BLUE" href="/auth">
            Registrate
          </JeLink>
        </Paragraph>
      </DescriptionText>
    </LoginContentStyle>
  );
};

export default LoginContent;
